import { OnDeactivate, OnActivate } from 'angular2/router';

export class Page implements OnDeactivate, OnActivate {
  routerOnDeactivate() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 300);
    });
  }

  routerOnActivate() {
  }
}
