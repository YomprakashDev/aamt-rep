import { Injectable } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthServices {
    user$: Observable<any>;

    constructor(private auth: Auth) {
        this.user$ = authState(this.auth);
    }

    // Google Sign-in
    async googleSignIn() {
        console.log('Google-Login started');
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(this.auth, provider);
            console.log('Google-Login success:', result.user);
            const user = result.user;
            console.log('Google-Login success:', user);
            if (!user) {
                throw new Error('Google-Login error');
            }
        } catch (error) {
            console.error('Google-Login error:', error);
            throw error;
        }
    }

    // // Optional: email/password sign-up
    // async signUpWithEmail(email: string, password: string) {
    //     return createUserWithEmailAndPassword(this.auth, email, password);
    // }

    // // Optional: email/password sign-in
    // async signInWithEmail(email: string, password: string) {
    //     return signInWithEmailAndPassword(this.auth, email, password);
    // }

    // // Sign out
    // async signOut() {
    //     await signOut(this.auth);
    //     await this.router.navigate(['/login']);
    // }

}
