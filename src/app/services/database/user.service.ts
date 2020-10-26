import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/model/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { isDefined } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    protected afa: AngularFireAuth,
    protected afs: AngularFirestore
  ) { }

  updateProfileInfo(userFirebase: firebase.User, user: User) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection("user").doc(String(userFirebase.uid)).update({
        id: String(userFirebase.uid),
        phone: user.phone
      }).then(res => resolve(res), err => reject(err));
    });
  }

  updateEmail(user: firebase.User, email: string) {
    return new Promise<any>((resolve, reject) => {
      user.verifyBeforeUpdateEmail(email).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  updateProfile(user: firebase.User, displayNameUser: string, photoURLUser?: string) {
    return new Promise<any>((resolve, reject) => {
      if (isDefined(photoURLUser)) {
        user.updateProfile({
          displayName: displayNameUser,
          photoURL: photoURLUser
        }).then(
          res => resolve(res),
          err => reject(err)
        );
      } else {
        user.updateProfile({
          displayName: displayNameUser
        }).then(
          res => resolve(res),
          err => reject(err)
        );
      }
    });
  }

  sendPasswordResetEmail(email: string) {
    return new Promise<any>((resolve, reject) => {
      this.afa.sendPasswordResetEmail(email).then(
        res => resolve(res),
        err => reject(err)
      )
    });
  }

}
