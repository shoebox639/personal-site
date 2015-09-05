/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';
import {NavService} from '../../services/nav-service';

@Component({
  selector: 'about-view'
})
@View({
  templateUrl: '/assets/html/pages/about.html'
})
export class AboutView {
  constructor(pageTitleService: PageTitleService, navService: NavService) {
    pageTitleService.title = 'A little about me';
    pageTitleService.subTitle = '';
    
    navService.currRoute = 'about';
  }
}

