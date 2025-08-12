// import { Injectable } from '@angular/core';
// import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServices {
//      user$: Observable<any>; // User | null

//   constructor(private auth: Auth, private router: Router) {
//     this.user$ = authState(this.auth);
//   }

//    // Google Sign-in
//   async googleSignIn() {
//     const provider = new GoogleAuthProvider();
//     const credential = await signInWithPopup(this.auth, provider);
//     return credential; // user credential
//   }

//   // Optional: email/password sign-up
//   async signUpWithEmail(email: string, password: string) {
//     return createUserWithEmailAndPassword(this.auth, email, password);
//   }

//   // Optional: email/password sign-in
//   async signInWithEmail(email: string, password: string) {
//     return signInWithEmailAndPassword(this.auth, email, password);
//   }

//   // Sign out
//   async signOut() {
//     await signOut(this.auth);
//     await this.router.navigate(['/login']);
//   }
  
// }
