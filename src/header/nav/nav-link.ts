/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, Attribute} from 'angular2/angular2';

import {RouterLink} from 'angular2/router';

@Component({
  selector: '[nav-link]',
  properties: [
    'route'
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
  constructor(@Attribute('route') private route: string) {
  }
  
  get routeParam() {
    return [`/${this.route}`];
  }
}
