import {Component} from 'angular2/core';

import {Page} from '../page';
import {PageTitleService} from '../../services/page-title-service';

@Component({
  templateUrl: '/assets/app/pages/contact/contact.html',
  styleUrls: ['assets/app/pages/contact/contact.css']
})
export class ContactView extends Page {
  constructor(pageTitleService: PageTitleService) {
  super();
  pageTitleService.title = 'Contact';
  pageTitleService.subTitle = '';
  pageTitleService.background = 'contact';
  }
}
