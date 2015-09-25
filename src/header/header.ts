/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, NgStyle} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

import {NavLink} from '../directives/nav-link';
import {Dropdown} from '../directives/dropdown';


@Component({
  selector: 'app-header'
})
@View({
  directives: [RouterLink, NavLink, Dropdown],
  templateUrl: '/assets/header/header.html',
  styleUrls: ['/assets/header/header.css']
})
export class Header {
  constructor(private pageTitleService: PageTitleService) {
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