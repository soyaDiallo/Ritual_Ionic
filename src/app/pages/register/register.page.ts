import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { ConsumerService } from 'src/app/services/database/consumer.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ControllerService } from 'src/app/services/system/controller.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private dataRegister: FormGroup;
  private showPassword: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authS: AuthenticationService,
    private consumerS: ConsumerService,
    private router: Router,
    private nativeStorage: NativeStorage,
    private ctrlS: ControllerService
  ) {
    this.dataRegister = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required])],
      password: ['', Validators.compose([Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{8,30}$'), Validators.required])]
    });
  }

  ngOnInit() {
  }

  signUp() {
    this.ctrlS.loadingWithMessage("Veuillez patienter...");
    this.authS.createUserWithEmailAndPassword(this.dataRegister.get("email").value, this.dataRegister.get("password").value).then(res => {
      this.consumerS.updateProfile(res.user, this.dataRegister.get("username").value).then(res => {
        this.nativeStorage.setItem("userEmail", this.dataRegister.get("email").value);
        this.router.navigateByUrl('/home');
      }, err => {
        this.ctrlS.toastWithMessage(err.message);
        this.ctrlS.hideLoadingWithMessage();
      });
    }, err => {
      this.ctrlS.toastWithMessage(err.message);
      this.ctrlS.hideLoadingWithMessage();
    });

    /*
    this.authS.signInWithEmailLink(this.dataRegister.get("email").value).then(res => {
      console.log("Show Email Box");
    }, err => {
      console.log("Error:", err.message);
    });
    */
  }

  ionViewWillLeave() {
    this.ctrlS.hideLoadingWithMessage();
  }

}
