/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';

@Component({})
@View({
  templateUrl: '/assets/html/pages/contact.html'
})
export class ContactView {
  constructor(pageTitleService: PageTitleService) {
    pageTitleService.title = 'Contact';
    pageTitleService.subTitle = '';
    pageTitleService.background = 'contact';
  }
}
