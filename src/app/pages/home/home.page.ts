import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ControllerService } from 'src/app/services/system/controller.service';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'Home'
    },
    {
      title: 'Recherche',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Commandes',
      url: '/orders',
      icon: 'newspaper'
    },
    {
      title: 'Récompences',
      url: '/awards',
      icon: 'wallet'
    },
    {
      title: 'Groupes',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Carnet d\'adresse',
      url: '/home',
      icon: 'documents'
    },
    {
      title: 'Paramètres utilisateur',
      url: '/settings',
      icon: 'person'
    }
  ];

  public displayName: string;
  public email: string;

  private slideOptsTendance = {
    initialSlide: 0,
    slidesPerView: 1.2,
    speed: 400
  };
  private slideOptsCategorie = {
    initialSlide: 0,
    slidesPerView: 5,
    speed: 400
  };

  backAction: any;

  lastX: any;
  @Input('header') header: any;

  private listOfRestaurant = [
    {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }, {
      img: "../../../assets/img01.png"
    }
  ];
  private listOfCategory = [
    {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }, {
      img: "../../../assets/logo_cat_2.png"
    }
  ];

  constructor(
    private afa: AngularFireAuth,
    private ctrlS: ControllerService,
    private plt: Platform,
    private renderer: Renderer2,
    private nativePageTransitions: NativePageTransitions
  ) { }

  ngOnInit() {
    this.afa.onAuthStateChanged(user => {
      if (user) {
        this.displayName = user.displayName;
        this.email = user.email;
      }
    });
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

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  logScrolling(event) {
    if (event.detail.scrollTop > Math.max(0, this.lastX)) {
      this.renderer.setStyle(this.header, 'margin-top', '-' + this.header.clientHeight + 'px');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 600ms');
    } else {
      this.renderer.setStyle(this.header, 'margin-top', '0px');
      this.renderer.setStyle(this.header, 'transition', 'margin-top 600ms');
    }
    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }

  slideToPannier() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400
    };

    this.nativePageTransitions.slide(options);
  }

  slideToRestaurant() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400
    };

    this.nativePageTransitions.slide(options);
  }


}
