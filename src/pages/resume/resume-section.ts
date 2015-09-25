/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'resume-section'
})
@View({
  template: `
    <div class="row resume-section">
      <div class="col-md-3 col-sm-3 resume-section-header">
        <h2>
          <ng-content select="resume-section-header"></ng-content>
        </h2>
      </div>
      <div class="col-md-9 col-sm-9 resume-section-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .resume-section-header {
        text-align: right;
      }
      .resume-section {
        margin-bottom: 30px;
      }
      @media(max-width: 768px) {
        .resume-section-header {
          text-align: left;
          padding-bottom: 5px;
          border-bottom: 1px solid #999;
        }
      }

      @media print {
        .resume-section-header {
          text-align: right;
          float: left;
          width: 20%;
          border: none;
        }
        .resume-section-content {
          float: left;
          width: 80%;
        }
        .resume-section {
          border-top: 1px solid #999;
          margin-bottom: 15px;
        }
      }
    `
  ]
})
export class ResumeSection {
  constructor() {
  }
}


@Component({
  selector: 'resume-subsection'
})
@View({
  template: `    
    <h3>
      <ng-content select="resume-subsection-header"></ng-content>
    </h3>
    <h5>
      <ng-content select="resume-subsection-subheader"></ng-content>
    </h5>
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
  `]
})
export class ResumeSubsection {
}
