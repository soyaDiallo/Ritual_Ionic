import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ControllerService } from 'src/app/services/system/controller.service';
import { AlertController, Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private dataLogin: FormGroup;
  private showPassword: boolean = false;

//  providerFb: firebase.auth.FacebookAuthProvider;
  private provider = new firebase.auth.GoogleAuthProvider();
  constructor(
    private formBuilder: FormBuilder,
    private authS: AuthenticationService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private ctrlS: ControllerService,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    private fb: Facebook,
    public platform: Platform,
    private af:AngularFirestore
  ) {
    //this.providerFb = new firebase.auth.FacebookAuthProvider();
    this.dataLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,30}$'), Validators.required])]
    });
  }

  ngOnInit() {
    this.nativeStorage.getItem("userEmail").then(obj => {
      this.dataLogin.get("email").setValue(obj);
      alert(obj);
    });
    this.allResto();
  }

  get errorControl() {
    return this.dataLogin.controls;
  }

  signIn() {
    this.ctrlS.loadingWithMessage("Veuillez patienter...");
    this.authS.signInWithEmailAndPassword(this.dataLogin.get("email").value, this.dataLogin.get("password").value).then(res => {
      this.nativeStorage.setItem("userEmail", this.dataLogin.get("email").value);
      this.router.navigateByUrl("/home");
    }, err => {
      this.ctrlS.toastWithMessage(err.message);
      this.ctrlS.hideLoadingWithMessage();
    });
  }

  //  ENVOIE D'UN EMAIL AU DERNIER COMPTE UTILISATEUR CONNECTE AVEC UNE DEMANDE DE CONFIRMATION
  sendResetPasswordEmailToUserSystem() {

  }

  ionViewWillLeave() {
    this.ctrlS.hideLoadingWithMessage();
  }

  LoginFacebook(){
    if (this.platform.is('cordova')) {
      console.log('PLateforme cordova');
      this.facebookCordova();
    } else {
      console.log('PLateforme Web');
      this.facebookWeb();
    }
  }
  facebookCordova() {
    this.fb.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log('Info Facebook: ' + JSON.stringify(success));
        }).catch((error) => {
            console.log('Erreur: ' + JSON.stringify(error));
        });
    }).catch((error) => { console.log(error); });
  }

  facebookWeb() {
    this.afAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        console.log('Info Facebook: ' + JSON.stringify(success));
        this.af.collection("users").doc("user").set({
          id: success.user.uid,
          displayName: success.user.displayName,
          photoUrl: success.user.photoURL,
          email: success.user.email,
          number: success.user.phoneNumber 
      })
      .then(()=> {
          console.log("Document successfully written!");
      })
      .catch((error)=> {
          console.error("Error writing document: ", error);
      });
      }).catch((error) => {
        console.log('Erreur: ' + JSON.stringify(error));
      });
  }

  loginGoogle(){
    firebase.auth().signInWithPopup(this.provider).then((result) =>{
      // This gives you a Google Access Token. You can use it to access the Google API.
       //const token = result.credential.providerId;
      // The signed-in user info.
      const user = result.user;
      console.log(user.email);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }

  allResto(){
    this.af.firestore.collection("restaurant").get().then(res=>{
      res.forEach(doc=>{
       console.log(doc.id," => ", doc.data());
      });
    });
   }

}
