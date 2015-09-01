/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Header} from 'header';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/assets/html/app.html',
  directives: [Header]
})
class App {
  constructor() {
  }
}

bootstrap(App);
