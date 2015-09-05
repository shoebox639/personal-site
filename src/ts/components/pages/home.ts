/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';
import {NavService} from '../../services/nav-service';

@Component({
  selector: 'home-view'
})
@View({
  templateUrl: '/assets/html/pages/home.html'
})
export class HomeView {
  constructor(pageTitleService: PageTitleService, navService: NavService) {
    pageTitleService.title = 'Shu Song';
    pageTitleService.subTitle = 'Building Software';
    
    navService.currRoute = 'home';
  }
}

