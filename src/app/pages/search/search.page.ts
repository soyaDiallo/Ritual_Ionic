import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private slideOptsCategory = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
