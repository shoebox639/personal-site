/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';

@Component({
  selector: 'home-view'
})
@View({
  templateUrl: '/assets/html/pages/home.html'
})
export class HomeView {
  constructor(pageTitleService: PageTitleService) {
    pageTitleService.title = 'Shu Song';
    pageTitleService.subTitle = 'Building Software';
    pageTitleService.background = 'home';
  }
}

