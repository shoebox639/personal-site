/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

import {NavLink} from '../directives/nav-link';
import {Dropdown} from '../directives/dropdown';

@Component({
  selector: 'app-header'
})
@View({
  directives: [RouterLink, NavLink, Dropdown],
  templateUrl: '/assets/html/header.html'
})
export class Header {
  constructor(private pageTitleService: PageTitleService, private router: Router) {
    console.log(router);
  }
  
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
