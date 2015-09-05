/// <reference path="../../../typings/tsd.d.ts" />

import {Component, Directive, View, Host} from 'angular2/angular2';

@Component({
  selector: 'dropdown',
})
@View({
  template: `
    <div (^click)="toggle()">
      <ng-content select="[dropdown-button]"></ng-content>
    </div>
    <div [hidden]="!visible" (^click)="reset()">
      <ng-content select="[dropdown-menu]"></ng-content>
    </div>
  `
})
export class Dropdown {
  visible: boolean;
  
  constructor() {
  }
  
  toggle() {
    this.visible = !this.visible;
  }
  
  reset() {
    this.visible = false;
  }
}
