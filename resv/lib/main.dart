import 'package:flutter/material.dart';

import 'screens/login_screen.dart';

void main() {
  runApp(const JaistShuttleApp());
}

class JaistShuttleApp extends StatelessWidget {
  const JaistShuttleApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JAIST Shuttle Booking',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,
      ),
      home: const LoginScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
