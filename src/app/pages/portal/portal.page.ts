import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ControllerService } from 'src/app/services/system/controller.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.page.html',
  styleUrls: ['./portal.page.scss'],
})
export class PortalPage implements OnInit {

  backAction: any;

  constructor(
    private ctrlS: ControllerService,
    private plt: Platform
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.backAction = this.plt.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.backAction.unsubscribe();
    this.ctrlS.hideMenu();
  }

}
