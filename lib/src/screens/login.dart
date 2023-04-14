import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';

class GoogleLoginScreen extends StatefulWidget {
  const GoogleLoginScreen({super.key});

  @override
  _GoogleLoginScreenState createState() => _GoogleLoginScreenState();
}

class _GoogleLoginScreenState extends State<GoogleLoginScreen> {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final GoogleSignIn _googleSignIn = GoogleSignIn();
  bool _isLoading = false;

  void _handleGoogleSignIn() async {
    setState(() {
      _isLoading = true;
    });
    try {
      final GoogleSignInAccount? googleSignInAccount =
          await _googleSignIn.signIn();
      final GoogleSignInAuthentication? googleSignInAuthentication =
          await googleSignInAccount?.authentication;
      final AuthCredential credential = GoogleAuthProvider.credential(
        accessToken: googleSignInAuthentication?.accessToken,
        idToken: googleSignInAuthentication?.idToken,
      );
      final UserCredential userCredential =
          await _auth.signInWithCredential(credential);
      final User? user = userCredential.user;
      if (user != null) {
        // You can handle further logic here, e.g. navigate to home screen
      }
      if (user!.metadata.creationTime == user.metadata.lastSignInTime) {
        await FirebaseFirestore.instance
            .collection('users')
            .doc(FirebaseAuth.instance.currentUser!.uid)
            .set({
          'name': user.displayName,
          'email': user.email,
          'photoURL': user.photoURL,
          'uid': user.uid,
          'coffee_beans': 100,
        });
      }
    } catch (e) {
      // Handle sign-in error
      print('Error: $e');
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _isLoading
            ? const CircularProgressIndicator()
            : Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    margin: EdgeInsets.only(bottom: 6),
                    height: MediaQuery.of(context).size.height * 0.2,
                    child: Image.asset(
                      "assets/images/anna.png",
                    ),
                  ),

                  Image.asset(
                    "assets/images/ettarra.png",
                  ),
                  ElevatedButton(
                    style: ButtonStyle(
                      backgroundColor:
                          MaterialStateProperty.all(const Color(0xffe2c2aa)),
                      foregroundColor: MaterialStateProperty.all(
                          const Color.fromARGB(255, 0, 0, 0)),
                    ),
                    onPressed: _handleGoogleSignIn,
                    child: const Text('Sign in with Google'),
                  ),
                ],
              ),
      ),
    );
  }
}
