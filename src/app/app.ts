/// <reference path="../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';

import {Header} from '../header/header';
import {Body} from '../body/body';
import {Footer} from '../footer/footer';

import {ResumeView} from '../pages/resume/resume';
import {ContactView} from '../pages/contact/contact';
import {HomeView} from '../pages/home/home';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/assets/app/app.html',
  directives: [Header, Body, Footer]
})
@RouteConfig([
  { path: '/', as: 'home', component: HomeView },
  { path: '/resume', as: 'resume', component: ResumeView },
  { path: '/contact', as: 'contact', component: ContactView }
])
export class App {
  constructor(private router: Router) {
  }
}
