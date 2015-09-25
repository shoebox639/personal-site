/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, Attribute, NgClass} from 'angular2/angular2';

import {RouterLink, Router} from 'angular2/router';

@Component({
  selector: '[nav-link]',
  properties: [
    'route'
  ]
})
@View({
  directives: [RouterLink, NgClass],
  template: `
    <a [router-link]="routeParam">
      <ng-content></ng-content>
    </a>
  `
})
export class NavLink {
  constructor(
    @Attribute('route') private route: string
  ) {
  }
  
  get routeParam() {
    return [`/${this.route}`];
  }
}
