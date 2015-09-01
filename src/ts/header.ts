/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app-header'
})
@View({
  templateUrl: '/assets/html/header.html'
})
export class Header {
  text: string;
  sub: string;

  constructor() {
    this.text = 'Shu Song';
    this.sub = 'Building Software'
  }
}

