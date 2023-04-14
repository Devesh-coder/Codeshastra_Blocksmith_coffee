import 'dart:async';

import 'package:codeshastra/src/constants/appbar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_fortune_wheel/flutter_fortune_wheel.dart';

class SpinWheel extends StatefulWidget {
  const SpinWheel({super.key});

  @override
  State<SpinWheel> createState() => _SpinWheelState();
}

class _SpinWheelState extends State<SpinWheel> {
  List<String>? items;
  StreamController<int> selected = StreamController<int>();
  String? offer;

  @override
  void initState() {
    super.initState();
    items = <String>[
      'Happy Hour',
      'Loyalty Program',
      'Special Seasonal Drinks',
      'Free Pastry with Drink',
      'Buy One, Get One Free',
      'Coffee Tasting Events',
      'Customizable Drinks ',
      'Student Discount',
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarTop.appBar(const Text("Wheel of Fortune")),
      body: GestureDetector(
        onTap: () {
          setState(() {
            selected.add(
              Fortune.randomInt(0, items!.length),
            );
          });
        },
        child: Column(
          children: [
            Expanded(
              child: FortuneWheel(
                selected: selected.stream,
                items: [
                  for (var it in items!) FortuneItem(child: Text(it)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
