/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Header} from 'header';
import {Body} from 'body';
import {Footer} from 'footer';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/assets/html/app.html',
  directives: [Header, Body, Footer]
})
class App {
  constructor() {
  }
}

bootstrap(App);
