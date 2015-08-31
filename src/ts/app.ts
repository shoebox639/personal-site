/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'header-text'
})
@View({
  template: '<h1>{{name}}</h1>'
})
class HeaderTextComponent {
  name: string;

  constructor() {
    this.name = 'Shu Song';
  }

  get time() {
    return new Date();
  }
}

bootstrap(HeaderTextComponent);
