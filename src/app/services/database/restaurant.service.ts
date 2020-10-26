import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from 'src/app/model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends UserService {

  constructor(
    afa: AngularFireAuth,
    afs: AngularFirestore
  ) {
    super(afa, afs);
  }

  updateProfileInfo(userFirebase: firebase.User, user: Restaurant) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection("user").doc(userFirebase.uid).update({
        id: userFirebase.uid,
        phone: user.phone,
        slogan: user.slogan,
        latitude: user.latitude,
        longitude: user.longitude,
        address: user.address
      }).then(res => resolve(res), err => reject(err));
    });
  }
}
