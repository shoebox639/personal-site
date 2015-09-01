/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'header-text'
})
@View({
  template: `
    <h1>{{text}}</h1>
    <h2>{{sub}}</h2>
  `
})
export class HeaderText {
  text: string;
  sub: string;

  constructor() {
    this.text = 'Shu Song';
    this.sub = 'Building Software'
  }
}

