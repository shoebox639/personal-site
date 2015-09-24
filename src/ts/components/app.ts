/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig} from 'angular2/router';

import {Header} from './header';
import {Body} from './body';
import {Footer} from './footer';

import {ResumeView} from './pages/resume';
import {ContactView} from './pages/contact';
import {HomeView} from './pages/home';

@Component({
  selector: 'app'
})
@View({
  templateUrl: '/assets/html/app.html',
  directives: [Header, Body, Footer]
})
@RouteConfig([
  { path: '/',        as: 'home',    component: HomeView },
  { path: '/resume',  as: 'resume',  component: ResumeView },
  { path: '/contact', as: 'contact', component: ContactView }
])
export class App {
  constructor() {
  }
}
