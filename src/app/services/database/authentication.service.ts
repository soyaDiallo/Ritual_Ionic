import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore
  ) { }

  signInWithEmailAndPassword(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afa.signInWithEmailAndPassword(email, password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afa.createUserWithEmailAndPassword(email, password).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

  signInWithEmailLink(email: string) {
    return new Promise<any>((resolve, reject) => {
      this.afa.signInWithEmailLink(email).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

  userLogOut() {
    return new Promise<any>((resolve, reject) => {
      this.afa.signOut().then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

}
