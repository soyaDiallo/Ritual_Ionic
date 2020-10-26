import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  private displayName: string;
  private email: string;

  private dataAccount: FormGroup;
  private showForm: boolean = false;

  constructor(
    private afa: AngularFireAuth,
    private formBuilder: FormBuilder
  ) {
    this.dataAccount = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required])]
    });
  }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      if (user) {
        this.displayName = user.displayName;
        this.email = user.email;

        this.dataAccount.get("username").setValue(this.displayName);
        this.dataAccount.get("email").setValue(this.email);
      }
    });
  }

  updateProfile() {
    console.log("Log");
  }

}
