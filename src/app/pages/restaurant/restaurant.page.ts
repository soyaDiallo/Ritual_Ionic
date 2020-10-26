import { Component, OnInit, ViewChild, Input, Renderer2 } from '@angular/core';
import { IonSlides, IonSegment } from '@ionic/angular';
import { NativeTransitionOptions, NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @ViewChild('menuSlider', { static: true }) menuSlider: IonSlides;
  @ViewChild('menuSegment', { static: true }) menuSegment: IonSegment;

  lastX: any;
  @Input('image') header: any;

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    if (ev.detail.value == "menu1") {
      this.menuSlider.slideTo(0);
    } else if (ev.detail.value == "menu2") {
      this.menuSlider.slideTo(1);
    } else if (ev.detail.value == "menu3") {
      this.menuSlider.slideTo(2);
    } else if (ev.detail.value == "menu4") {
      this.menuSlider.slideTo(3);
    } else if (ev.detail.value == "menu5") {
      this.menuSlider.slideTo(4);
    }
  }

  slidesChanged() {
    this.menuSlider.getActiveIndex().then((index: number) => {
      if (index.valueOf() == 0) {
        this.menuSegment.value = "menu1";
      } else if (index.valueOf() == 1) {
        this.menuSegment.value = "menu2";
      } else if (index.valueOf() == 2) {
        this.menuSegment.value = "menu3";
      } else if (index.valueOf() == 3) {
        this.menuSegment.value = "menu4";
      } else if (index.valueOf() == 4) {
        this.menuSegment.value = "menu5";
      }
    });
  }

  slideToBack() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400
    };

    this.nativePageTransitions.slide(options);
  }

  logScrolling(event) {
    if (event.detail.scrollTop > Math.max(0, this.lastX)) {
      //  this.renderer.setStyle(this.header, 'margin-top', '-' + this.header.clientHeight + 'px');
      //  this.renderer.setStyle(this.header, 'transition', 'margin-top 600ms');
      console.log("Pass Hide");
    } else {
      //  this.renderer.setStyle(this.header, 'margin-top', '0px');
      //  this.renderer.setStyle(this.header, 'transition', 'margin-top 600ms');
      console.log("Pass Show");
    }
    this.lastX = event.detail.scrollTop;
  }

  scrollStart(header) {
    this.header = header.el;
  }

}
