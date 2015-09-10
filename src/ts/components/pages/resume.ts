/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';
import {NavService} from '../../services/nav-service';

@Component({
  selector: 'about-view'
})
@View({
  templateUrl: '/assets/html/pages/resume.html'
})
export class ResumeView {
  constructor(pageTitleService: PageTitleService, navService: NavService) {
    pageTitleService.title = 'My Resume';
    pageTitleService.subTitle = '';
    
    navService.currRoute = 'resume';
  }
}

