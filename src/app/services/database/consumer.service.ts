import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService extends UserService {

  constructor(
    afa: AngularFireAuth,
    afs: AngularFirestore
  ) {
    super(afa, afs);
  }
}
