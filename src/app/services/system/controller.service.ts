import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private menuController: MenuController
  ) { }

  async alertWithMessage(message: string, header: string = "Information") {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        "Okay"
      ]
    });

    await alert.present();
  }

  hideMenu() {
    this.menuController.close();
  }

  async loadingWithMessage(message: string = "Please wait while is loading...") {
    this.loadingController.create({
      message: message,
      spinner: 'crescent',
      mode: "ios",
      duration: 10000
    }).then(res => {
      res.present();
    });
  }

  hideLoadingWithMessage() {
    this.loadingController.dismiss();
  }

  async loadingWithMessageAutoHide(message: string = "Please wait while is loading...") {
    const loading = await this.loadingController.create({
      message: message,
      duration: 3000,
      spinner: 'crescent',
      mode: "ios"
    });
    await loading.present();
  }

  async toastWithMessage(message: string) {
    const toast = await this.toastController.create({
      animated: true,
      duration: 3000,
      keyboardClose: true,
      message: message,
      mode: 'ios',
      position: 'top',
      translucent: true
    });
    toast.present();
  }

  async toastWithMessageAndButton(message: string) {
    const toast = await this.toastController.create({
      animated: true,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ],
      duration: 3000,
      keyboardClose: true,
      message: message,
      mode: 'ios',
      position: 'top',
      translucent: true
    });
    toast.present();
  }

}
