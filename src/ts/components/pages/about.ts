/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';

@Component({
  selector: 'about-view'
})
@View({
  templateUrl: '/assets/html/pages/about.html'
})
export class AboutView {
  constructor(pageTitleService: PageTitleService) {
    pageTitleService.title = 'A little about me';
    pageTitleService.subTitle = '';
  }
}

