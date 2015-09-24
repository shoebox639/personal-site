/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

import {Page} from './page';
import {PageTitleService} from '../../services/page-title-service';

@Component({})
@View({
  templateUrl: '/assets/html/pages/contact.html'
})
export class ContactView extends Page {
  constructor(pageTitleService: PageTitleService) {
    super();
    pageTitleService.title = 'Contact';
    pageTitleService.subTitle = '';
    pageTitleService.background = 'contact';
  }
}
