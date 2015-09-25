/// <reference path="../../typings/tsd.d.ts" />

import { OnDeactivate, OnActivate } from 'angular2/router';

export class Page implements OnDeactivate, OnActivate {
  onDeactivate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('deactiving');
        resolve();
      }, 300);
    });
  }

  onActivate() {
  }
}
