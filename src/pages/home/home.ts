/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {Page} from '../page';
import {PageTitleService} from '../../services/page-title-service';

@Component({})
@View({
  templateUrl: '/assets/pages/home/home.html'
})
export class HomeView extends Page {
  constructor(pageTitleService: PageTitleService) {
    super();
    pageTitleService.title = 'Shu Song';
    pageTitleService.subTitle = 'Building Software';
    pageTitleService.background = 'home';
  }
}

