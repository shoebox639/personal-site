/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, Attribute, NgClass} from 'angular2/angular2';

import {RouterLink} from 'angular2/router';

@Component({
  selector: '[nav-link]',
  properties: [
    'route'
  ]
})
@View({
  directives: [RouterLink, NgClass],
  template: `
    <a [router-link]="['/home']" [ng-class]="classMap">
      <ng-content></ng-content>
    </a>
  `
})
export class NavLink {
  route: string
  
  constructor(
    @Attribute('route') route: string
  ) {
    this.route = route;
    // console.log(currRouter);
  }
  
  get classMap() {
    return {
      active: true
    }
  }
}
