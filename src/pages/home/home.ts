import {Component} from 'angular2/core';

import {Page} from '../page';
import {PageTitleService} from '../../services/page-title-service';

@Component({
  templateUrl: '/assets/app/pages/home/home.html',
  styleUrls: ['assets/app/pages/home/home.css']
})
export class HomeView extends Page {
  constructor(private pageTitleService: PageTitleService) {
    super();
    pageTitleService.title = 'Shu Song';
    pageTitleService.subTitle = 'Building Software';
    pageTitleService.background = 'home';
  }
}

