/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap, bind, APP_COMPONENT} from 'angular2/angular2';
import {RouteRegistry, Pipeline, Router, RootRouter, Location, LocationStrategy, PathLocationStrategy} from 'angular2/router';

import {App} from './components/app';
import {PageTitleService} from './services/page-title-service'
import {NavService} from './services/nav-service'

let routerInjectables = [
  RouteRegistry, 
  Pipeline, 
  bind(LocationStrategy).toClass(PathLocationStrategy), 
  Location,
  bind(Router).toFactory((registry, pipeline, location, appRoot) => {
    return new RootRouter(registry, pipeline, location, appRoot);
  }, [RouteRegistry, Pipeline, Location, APP_COMPONENT])
];



bootstrap(App, [routerInjectables, PageTitleService, NavService]);
