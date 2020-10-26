import { Component, OnInit, ViewChild, Input, Renderer2 } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  @ViewChild('awardSlider', { static: true }) awardSlider: IonSlides;
  @ViewChild('awardSegment', { static: true }) awardSegment: IonSegment;

  private listOfCurrentOrders = [
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
    },
    {
      img: "../../../assets/logo_cat_1.png",
      title: "Label Titre",
      desc: "Label Sous Titre",
      date: "2 Dec",
      price: "200 DHS"
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
    if (ev.detail.value == "encours") {
      this.awardSlider.slideTo(0);
    } else if (ev.detail.value == "programmees") {
      this.awardSlider.slideTo(1);
    } else if (ev.detail.value == "effectuees") {
      this.awardSlider.slideTo(2);
    } else if (ev.detail.value == "annulees") {
      this.awardSlider.slideTo(3);
    }
  }

  slidesChanged() {
    this.awardSlider.getActiveIndex().then((index: number) => {
      if (index.valueOf() == 0) {
        this.awardSegment.value = "encours";
      } else if (index.valueOf() == 1) {
        this.awardSegment.value = "programmees";
      } else if (index.valueOf() == 2) {
        this.awardSegment.value = "effectuees";
      } else if (index.valueOf() == 3) {
        this.awardSegment.value = "annulees";
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
