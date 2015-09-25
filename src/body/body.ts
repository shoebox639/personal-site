/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {RouterOutlet, RouteConfig} from 'angular2/router';

@Component({
  selector: 'app-body'
})
@View({
  directives: [RouterOutlet],
  templateUrl: '/assets/body/body.html'
})
export class Body {
  constructor() {
  }
}

