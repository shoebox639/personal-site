/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

@Component({
  selector: 'app-header'
})
@View({
  directives: [RouterLink],
  templateUrl: '/assets/html/header.html'
})

export class Header {
  pageTitleSerivce: PageTitleService;
  constructor(pageTitleService: PageTitleService) {
    this.pageTitleSerivce = pageTitleService;
  }
}
