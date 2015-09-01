/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'app-body'
})
@View({
  templateUrl: '/assets/html/body.html'
})
export class Body {
  constructor() {
  }
}

