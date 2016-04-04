import {Component} from 'angular2/core';

import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

import {Header} from '../header/header';
import {Footer} from '../footer/footer';

import {ResumeView} from '../pages/resume/resume';
import {ContactView} from '../pages/contact/contact';
import {HomeView} from '../pages/home/home';

@Component({
  selector: 'app',
  templateUrl: '/assets/app/app/app.html',
  providers: [PageTitleService],
  directives: [Header, Footer, RouterOutlet, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Home', component: HomeView },
  { path: '/resume', name: 'Resume', component: ResumeView },
  { path: '/contact', name: 'Contact', component: ContactView },
])
export class App {
  constructor(private router: Router) {
  }
}
