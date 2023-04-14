import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:codeshastra/src/constants/appbar.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class TriviaResult extends StatefulWidget {
  int score = 0;
  TriviaResult({super.key, required this.score});

  @override
  State<TriviaResult> createState() => _TriviaResultState();
}

class _TriviaResultState extends State<TriviaResult> {
  int beans = 0;
  Future submit() async {
    DocumentSnapshot beansData = await FirebaseFirestore.instance
        .collection('users')
        .doc(FirebaseAuth.instance.currentUser!.uid)
        .get();
    beans = widget.score * 30;
    await FirebaseFirestore.instance
        .collection('users')
        .doc(FirebaseAuth.instance.currentUser!.uid)
        .update({
      'coffee_beans':
          (int.parse(beansData['coffee_beans'].toString()) + beans).toString()
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    submit().then((value) => print(value));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarTop.appBar(
        const Text('Trivia Result'),
      ),
      backgroundColor: const Color(0xfff2eae2),
      body: Container(
        alignment: Alignment.center,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Your Score is',
              style: TextStyle(
                fontSize: 30,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 20),
            Text(
              '${widget.score}',
              style: const TextStyle(
                fontSize: 50,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('Play Again'),
            ),
          ],
        ),
      ),
    );
  }
}
