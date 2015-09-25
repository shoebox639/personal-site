/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'app-footer'
})
@View({
  templateUrl: '/assets/footer/footer.html',
  styleUrls: ['/assets/footer/footer.css']
})
export class Footer {
  constructor() {
  }
}
