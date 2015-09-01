/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {HeaderText} from 'header-text';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/assets/html/app.html',
  directives: [HeaderText]
})
class App {
  constructor() {
  }
}

bootstrap(App);
