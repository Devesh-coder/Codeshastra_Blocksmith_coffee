import 'dart:math';
import 'package:codeshastra/src/constants/appbar.dart';
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class LotteryGame extends StatefulWidget {
  const LotteryGame({super.key});

  @override
  _LotteryGameState createState() => _LotteryGameState();
}

class _LotteryGameState extends State<LotteryGame> {
  int _selectedNumber = 0;
  bool _isNumberSelected = false;

  void _selectNumber() {
    setState(() {
      _selectedNumber = Random().nextInt(100) + 1;
      _isNumberSelected = true;
    });
  }

  int score = 0;
  int beans = 0;
  Future submit() async {
    DocumentSnapshot beansData = await FirebaseFirestore.instance
        .collection('users')
        .doc(FirebaseAuth.instance.currentUser!.uid)
        .get();
    beans = score * 3;
    await FirebaseFirestore.instance
        .collection('users')
        .doc(FirebaseAuth.instance.currentUser!.uid)
        .update({
      'coffee_beans':
          (int.parse(beansData['coffee_beans'].toString()) + beans).toString()
    });
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController controller = TextEditingController();
    return Scaffold(
      appBar: AppBarTop.appBar(const Text("Lottery Game")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Guess a number between 1 and 100',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 20),
            SizedBox(
              width: MediaQuery.of(context).size.width * 0.8,
              child: TextFormField(
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  labelText: 'Enter your number',
                  border: OutlineInputBorder(),
                ),
                controller: controller,
              ),
            ),
            const SizedBox(height: 20),
            Container(
              width: 200,
              height: 200,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _isNumberSelected ? Colors.green : Colors.grey,
              ),
              child: Center(
                child: Text(
                  _isNumberSelected ? '$_selectedNumber' : '?',
                  style: const TextStyle(
                    fontSize: 80,
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: _selectNumber,
              style: ButtonStyle(
                backgroundColor:
                    MaterialStateProperty.all(const Color(0xffe2c2aa)),
                foregroundColor: MaterialStateProperty.all(
                    const Color.fromARGB(255, 0, 0, 0)),
              ),
              child: const Text('Generate Number'),
            ),
            controller.text.isNotEmpty
                ? (controller.text == _selectedNumber.toString())
                    ? const Text(
                        'You guessed it right!',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      )
                    : (int.parse(controller.text) - _selectedNumber).abs() <= 20
                        ? const Text(
                            'You are close!',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          )
                        : const Text(
                            'You guessed it wrong!',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          )
                : const SizedBox.shrink(),
          ],
        ),
      ),
    );
  }
}
