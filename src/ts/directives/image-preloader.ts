/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'img-preloader'
})
@View({
  template: `
    <img class="hidden" src="{{src}}" (load)="loadNext()"></img>
  `
})
export class ImagePreloader {
  src: string;

  constructor() {
    this.src = '/assets/img/manhattan-skyline.jpg';
  }

  loadNext() {
    this.src = '/assets/img/lines-of-code.jpg';
  }
}
