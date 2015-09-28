/// <reference path="../../typings/tsd.d.ts" />

import {Component, Directive, View, Host} from 'angular2/angular2';

@Component({
  selector: 'dropdown',
})
@View({
  templateUrl: '/assets/dropdown/dropdown.html' 
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
