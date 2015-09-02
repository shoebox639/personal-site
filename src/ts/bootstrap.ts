/// <reference path="../../typings/tsd.d.ts" />

import {bootstrap} from 'angular2/angular2';
import {routerInjectables} from 'angular2/router';

import {App} from './components/app';
import {PageTitleService} from './services/page-title-service'

bootstrap(App, [routerInjectables, PageTitleService]);
