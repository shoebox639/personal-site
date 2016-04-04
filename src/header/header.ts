import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

import {Dropdown} from '../dropdown/dropdown';

@Component({
  selector: 'app-header',
  directives: [Dropdown, ROUTER_DIRECTIVES],
  templateUrl: '/assets/app/header/header.html',
  styleUrls: ['assets/app/header/header.css'],
})
export class Header {
  constructor(private pageTitleService: PageTitleService) { }
  
  get title() {
    return this.pageTitleService.title;
  }
  
  get subTitle() {
    return this.pageTitleService.subTitle;
  }

  get background() {
    return this.pageTitleService.background;
  }
}
