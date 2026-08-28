import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;

import '../constants/schedule_data.dart';
import '../services/api_service.dart';
import 'login_screen.dart';

class BookingScreen extends StatefulWidget {
  final String username;

  const BookingScreen({super.key, required this.username});

  @override
  State<BookingScreen> createState() => _BookingScreenState();
}

class _BookingScreenState extends State<BookingScreen> {
  late DateTime _selectedDate;
  late final List<DateTime> _weekDays;

  String _direction = 'a';
  int _selectedTrip = 1;
  bool _isBooking = false;
  bool _isLoadingData = true;
  Map<String, dynamic> _timetable = {};

  @override
  void initState() {
    super.initState();
    final now = DateTime.now();
    _selectedDate = DateTime(now.year, now.month, now.day);
    _weekDays = List.generate(7, (i) {
      final d = now.add(Duration(days: i));
      return DateTime(d.year, d.month, d.day);
    });
    _loadTimetable();
  }

  Future<void> _loadTimetable() async {
    try {
      final String jsonStr = await rootBundle.loadString(
        'assets/timetable.json',
      );
      setState(() {
        _timetable = json.decode(jsonStr);
        _isLoadingData = false;
      });
      debugPrint('[BookingScreen] Successfully loaded timetable.json');
    } catch (e) {
      debugPrint('[BookingScreen] Error loading timetable.json: $e');
      setState(() => _isLoadingData = false);
    }
  }

  Future<void> _confirmAndSubmitBooking() async {
    // -----------------------------------------------------------------
    // 1. 予約データの組み立てと確認ログ出力
    // -----------------------------------------------------------------
    final dateStr =
        '${_selectedDate.year}'
        '${_selectedDate.month.toString().padLeft(2, '0')}'
        '${_selectedDate.day.toString().padLeft(2, '0')}';

    final tripKey = _selectedTrip.toString();
    final busParams = _timetable[_direction]?[tripKey];

    debugPrint('=== Reservation Data Check ===');
    debugPrint('Direction: $_direction');
    debugPrint('Trip Key: $tripKey');
    debugPrint('Date (YYYYMMDD): $dateStr');

    if (busParams == null) {
      debugPrint('Error: timetable data is null for $_direction / $tripKey');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'Timetable error: $_direction / trip $tripKey not found in json',
          ),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    final String line = busParams['line'];
    final String busId = busParams['bus_id'];

    final depStation = _direction == 'a' ? 'JAIST' : 'Komatsu Sta.';
    final arrStation = _direction == 'a' ? 'Komatsu Sta.' : 'JAIST';
    final tripTime = ScheduleData.schedules[_direction]![_selectedTrip - 1];

    final bool? confirmed = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Confirm Reservation'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Date: $dateStr',
              style: const TextStyle(fontWeight: FontWeight.bold),
            ),
            Text('Route: $depStation ➔ $arrStation'),
            Text('Trip: Trip $_selectedTrip (${tripTime[0]} ➔ ${tripTime[1]})'),
            const SizedBox(height: 8),
            Text(
              'Line: $line / Bus ID: $busId',
              style: const TextStyle(fontSize: 12, color: Colors.grey),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx, false),
            child: const Text('Cancel'),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.indigo,
              foregroundColor: Colors.white,
            ),
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Confirm'),
          ),
        ],
      ),
    );

    if (confirmed != true) return;

    setState(() => _isBooking = true);

    try {
      final response = await ApiService.submitReservation(
        targetDate: dateStr,
        line: line,
        busId: busId,
        direction: _direction,
      );

      if (!mounted) return;

      final isSuccess = response.statusCode == 200;

      debugPrint(
        '[BookingScreen] Server responded with Status: ${response.statusCode}',
      );

      showDialog(
        context: context,
        builder: (ctx) => AlertDialog(
          icon: Icon(
            isSuccess ? Icons.check_circle : Icons.error,
            color: isSuccess ? Colors.green : Colors.red,
            size: 48,
          ),
          title: Text(isSuccess ? 'Reservation Success' : 'Reservation Failed'),
          content: Text(
            isSuccess
                ? 'Your reservation for Trip $_selectedTrip on $dateStr has been completed.'
                : 'Server responded with status code: ${response.statusCode}',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(ctx),
              child: const Text('OK'),
            ),
          ],
        ),
      );
    } catch (e) {
      if (!mounted) return;
      debugPrint('[BookingScreen] API Call Exception: $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e'), backgroundColor: Colors.red),
      );
    } finally {
      if (mounted) setState(() => _isBooking = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoadingData) {
      return const Scaffold(body: Center(child: CircularProgressIndicator()));
    }

    final currentSchedule = ScheduleData.schedules[_direction]!;
    final depStation = _direction == 'a' ? 'JAIST' : 'Komatsu Sta.';
    final arrStation = _direction == 'a' ? 'Komatsu Sta.' : 'JAIST';

    return Scaffold(
      appBar: AppBar(
        title: const Text('Book Shuttle'),
        backgroundColor: Colors.indigo,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            tooltip: 'Sign Out',
            onPressed: () {
              ApiService.logout();
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const LoginScreen()),
              );
            },
          ),
        ],
      ),
      body: Column(
        children: [
          // 1. Date Selection
          Container(
            color: Colors.indigo.shade50,
            padding: const EdgeInsets.symmetric(
              vertical: 12.0,
              horizontal: 16.0,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '1. Select Date',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                    color: Colors.indigo,
                  ),
                ),
                const SizedBox(height: 8),
                SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: _weekDays.map((date) {
                      final isSelected = _selectedDate == date;
                      final isWeekend =
                          date.weekday == DateTime.saturday ||
                          date.weekday == DateTime.sunday;
                      final weekName =
                          ScheduleData.weekDayNames[date.weekday - 1];

                      return Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: ChoiceChip(
                          showCheckmark: false,
                          selectedColor: Colors.indigo,
                          backgroundColor: Colors.white,
                          label: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Text(
                                weekName,
                                style: TextStyle(
                                  fontSize: 11,
                                  fontWeight: FontWeight.bold,
                                  color: isSelected
                                      ? Colors.white
                                      : (isWeekend
                                            ? Colors.redAccent
                                            : Colors.grey[700]),
                                ),
                              ),
                              Text(
                                '${date.month}/${date.day}',
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w600,
                                  color: isSelected
                                      ? Colors.white
                                      : Colors.black87,
                                ),
                              ),
                            ],
                          ),
                          selected: isSelected,
                          onSelected: (selected) {
                            if (selected) setState(() => _selectedDate = date);
                          },
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ],
            ),
          ),

          // 2. Direction Selection
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  '2. Select Direction',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                    color: Colors.indigo,
                  ),
                ),
                const SizedBox(height: 8),
                SegmentedButton<String>(
                  segments: const [
                    ButtonSegment(
                      value: 'a',
                      label: Text('JAIST ➔ Station'),
                      icon: Icon(Icons.arrow_forward),
                    ),
                    ButtonSegment(
                      value: 'b',
                      label: Text('Station ➔ JAIST'),
                      icon: Icon(Icons.arrow_back),
                    ),
                  ],
                  selected: {_direction},
                  onSelectionChanged: (newSelection) =>
                      setState(() => _direction = newSelection.first),
                ),
              ],
            ),
          ),

          const Divider(height: 20),

          // 3. Trip Selection
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  '3. Select Trip',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                    color: Colors.indigo,
                  ),
                ),
                Text(
                  'Route: $depStation ➔ $arrStation',
                  style: const TextStyle(
                    fontSize: 12,
                    color: Colors.grey,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),

          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              itemCount: currentSchedule.length,
              itemBuilder: (context, index) {
                final tripNumber = index + 1;
                final depTime = currentSchedule[index][0];
                final arrTime = currentSchedule[index][1];
                final isSelected = _selectedTrip == tripNumber;

                return Card(
                  elevation: isSelected ? 3 : 1,
                  margin: const EdgeInsets.only(bottom: 8.0),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                    side: BorderSide(
                      color: isSelected ? Colors.indigo : Colors.grey.shade300,
                      width: isSelected ? 2.0 : 1.0,
                    ),
                  ),
                  color: isSelected ? Colors.indigo.shade50 : Colors.white,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(10),
                    onTap: () => setState(() => _selectedTrip = tripNumber),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: 10.0,
                        horizontal: 12.0,
                      ),
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 10,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: isSelected
                                  ? Colors.indigo
                                  : Colors.grey.shade200,
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text(
                              'Trip $tripNumber',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: isSelected
                                    ? Colors.white
                                    : Colors.black87,
                              ),
                            ),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: Row(
                              children: [
                                Text(
                                  depTime,
                                  style: const TextStyle(
                                    fontSize: 17,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                const Padding(
                                  padding: EdgeInsets.symmetric(
                                    horizontal: 8.0,
                                  ),
                                  child: Icon(
                                    Icons.arrow_right_alt,
                                    color: Colors.grey,
                                  ),
                                ),
                                Text(
                                  arrTime,
                                  style: const TextStyle(
                                    fontSize: 17,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Icon(
                            isSelected
                                ? Icons.check_circle
                                : Icons.radio_button_unchecked,
                            color: isSelected ? Colors.indigo : Colors.grey,
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            ),
          ),

          // 4. Bottom Action Bar
          Container(
            padding: const EdgeInsets.all(16.0),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.05),
                  blurRadius: 10,
                  offset: const Offset(0, -4),
                ),
              ],
            ),
            child: SafeArea(
              child: Row(
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          '${_selectedDate.month}/${_selectedDate.day} (${ScheduleData.weekDayNames[_selectedDate.weekday - 1]}) - Trip $_selectedTrip',
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 15,
                          ),
                        ),
                        Text(
                          '${currentSchedule[_selectedTrip - 1][0]} ➔ ${currentSchedule[_selectedTrip - 1][1]}',
                          style: TextStyle(
                            fontSize: 13,
                            color: Colors.grey[700],
                          ),
                        ),
                      ],
                    ),
                  ),
                  ElevatedButton(
                    onPressed: _isBooking ? null : _confirmAndSubmitBooking,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.indigo,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 24,
                        vertical: 12,
                      ),
                    ),
                    child: _isBooking
                        ? const SizedBox(
                            width: 20,
                            height: 20,
                            child: CircularProgressIndicator(
                              color: Colors.white,
                              strokeWidth: 2,
                            ),
                          )
                        : const Text(
                            'Book Now',
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
