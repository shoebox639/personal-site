/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, NgStyle} from 'angular2/angular2';
import {RouterLink, Router} from 'angular2/router';

import {PageTitleService} from '../services/page-title-service';

import {NavLink} from '../directives/nav-link';
import {Dropdown} from '../directives/dropdown';


@Component({
  selector: 'app-header'
})
@View({
  directives: [RouterLink, NavLink, Dropdown],
  templateUrl: '/assets/html/header.html',
  styles: [`
    .jumbotron {
      color: #ccc;
      background-position: center center;
      background-size: cover;
      height: 600px;
      -o-transition: background-image .5s ease-in-out;
      -ms-transition: background-image .5s ease-in-out;
      -moz-transition: background-image .5s ease-in-out;
      -webkit-transition: background-image .5s ease-in-out;

      transition: background-image .5s ease-in-out;
      -webkit-animation: fade-in 1s;
      -moz-animation: fade-in 1s;
      -o-animation: fade-in 1s;
      -ms-animation: fade-in 1s;
      animation: fade-in 1s;
    }
    .background-preload-0 {
      background: url('/assets/img/manhattan-skyline.jpg') no-repeat -9999px -9999px;
    }
    .background-preload-1 {
      background: url('/assets/img/lines-of-code.jpg') no-repeat -9999px -9999px;
    }
    .background-preload-2 {
      background: url('/assets/img/nyc-train.jpg') no-repeat -9999px -9999px;
    }
    .jumbotron.home {
      background-image: url('/assets/img/manhattan-skyline.jpg');
    }
    .jumbotron.resume {
      background-image: url('/assets/img/lines-of-code.jpg');
    }
    .jumbotron.contact {
      background-image: url('/assets/img/nyc-train.jpg');
    }

    .jumbotron header {
      margin-top: 150px;
    }
    @media(max-width: 768px) {
      .jumbotron {
        height: 400px;
      }
      .jumbotron header {
        margin-top: 100px;
      }
    }

    .jumbotron h1,
    .jumbotron h2 {
      font-weight: 300;
    }

    .dark-filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 600px;
      background-color: #000;
      opacity: 0.3;

    }

    header {
      position: relative;
    }

  `]
})
export class Header {
  constructor(private pageTitleService: PageTitleService) {
  }
  
  get title() {
    return this.pageTitleService.title;
  }
  
  get subTitle() {
    return this.pageTitleService.subTitle;
  }

  get background() {
    return this.pageTitleService.background;
  }
}
