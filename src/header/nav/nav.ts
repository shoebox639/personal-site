/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, Attribute} from 'angular2/angular2';

import {RouterLink} from 'angular2/router';

@Component({
  selector: 'nav',
  properties: [
    'type'
  ]
})
@View({
  directives: [RouterLink],
  template: `
    <a [router-link]="routeParam">
      <ng-content></ng-content>
    </a>
  `
})
export class NavLink {
  constructor(@Attribute('type') private type: string) {
  }
}
