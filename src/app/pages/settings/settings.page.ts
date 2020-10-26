import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public displayName: string;
  public email: string;

  constructor(
    private afa: AngularFireAuth,
    private authS: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      if (user) {
        this.displayName = user.displayName;
        this.email = user.email;
      }
    });
  }

  signOut() {
    this.authS.userLogOut();
    this.router.navigateByUrl('/portal');
  }

}
