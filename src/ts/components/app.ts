/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {routerInjectables, RouteConfig} from 'angular2/router';

import {Header} from './header';
import {Body} from './body';
import {Footer} from './footer';
import {AboutView} from './pages/about';
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
  { path: '/about',   as: 'about',   component: AboutView },
  { path: '/resume',  as: 'resume',  component: Body },
  { path: '/contact', as: 'contact', component: Body }
])
export class App {
  constructor() {
  }
}
