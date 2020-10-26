import { Component, OnInit, ViewChild, Input, Renderer2 } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.page.html',
  styleUrls: ['./awards.page.scss'],
})
export class AwardsPage implements OnInit {

  @ViewChild('awardSlider', { static: true }) awardSlider: IonSlides;
  @ViewChild('awardSegment', { static: true }) awardSegment: IonSegment;

  private slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  private listOfPointsWin = [
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    },
    {
      img: "../../../assets/logo_gain.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "+200 Pts"
    }
  ];
  private listOfPointsLose = [
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_perte.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    }
  ];
  private listOfLastOrders = [
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 Dhs"
    }
  ];

  lastX: any;
  @Input('header') header: any;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  segmentChanged(ev: any) {
    if (ev.detail.value == "solde") {
      this.awardSlider.slideTo(0);
    } else if (ev.detail.value == "gagne") {
      this.awardSlider.slideTo(1);
    } else if (ev.detail.value == "utilise") {
      this.awardSlider.slideTo(2);
    }
  }

  slidesChanged() {
    this.awardSlider.getActiveIndex().then((index: number) => {
      if (index.valueOf() == 0) {
        this.awardSegment.value = "solde";
      } else if (index.valueOf() == 1) {
        this.awardSegment.value = "gagne";
      } else if (index.valueOf() == 2) {
        this.awardSegment.value = "utilise";
      }
    });
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

}
