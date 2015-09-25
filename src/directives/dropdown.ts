/// <reference path="../../typings/tsd.d.ts" />

import {Component, Directive, View, Host} from 'angular2/angular2';

@Component({
  selector: 'dropdown',
})
@View({
  template: `
    <div (click)="toggle()">
      <ng-content select="[dropdown-button]"></ng-content>
    </div>
    <div [hidden]="!menuVisible" (click)="reset()">
      <ng-content select="[dropdown-menu]"></ng-content>
    </div>
  `
})
export class Dropdown {
  menuVisible: boolean;
  private toggleInProgress: boolean;
  
  constructor() {
    var listener = (ev) => {
      if (!this.toggleInProgress) {
        this.reset();
      }
      this.toggleInProgress = false;
      return true;
    };
    document.querySelector('body').addEventListener("touchend", listener); 
  }
  
  toggle() {
    this.toggleInProgress = true;
    this.menuVisible = !this.menuVisible;
  }
  
  reset() {
    this.menuVisible = false;
  }
}
