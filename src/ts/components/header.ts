/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

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
  private pageTitleSerivce: PageTitleService;
  
  constructor(pageTitleService: PageTitleService) {
    this.pageTitleSerivce = pageTitleService;
  }
  
  get title() {
    return this.pageTitleSerivce.title;
  }
  
  get subTitle() {
    return this.pageTitleSerivce.subTitle;
  }
}
