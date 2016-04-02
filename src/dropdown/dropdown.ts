import {Component, Directive, Host} from 'angular2/core';

@Component({
  selector: 'dropdown',
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
