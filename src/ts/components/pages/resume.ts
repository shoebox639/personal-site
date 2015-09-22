/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, NgFor} from 'angular2/angular2';

import {PageTitleService} from '../../services/page-title-service';
import {ResumeSection, ResumeSubsection} from '../resume-section';

import {jobs, skillCategories} from '../../data/resume-data';


@Component({
  selector: 'resume-print'
})
@View({
  template: `
    <a class="btn btn-default" (click)="print()">
      <span class="glyphicon glyphicon-print"></span>
      Print
    </a>
  `
})
export class ResumePrint {
  print() {
    window.print();
  }
}

@Component({})
@View({
  directives: [ResumeSection, ResumeSubsection, NgFor, ResumePrint],
  templateUrl: '/assets/html/pages/resume.html'
})
export class ResumeView {
  constructor(pageTitleService: PageTitleService) {
    pageTitleService.title = 'My Resume';
    pageTitleService.subTitle = ``;
    pageTitleService.background = 'resume';
  }

  get jobs() {
    return jobs;
  }
  
  get skillCategories() {
    return skillCategories;
  }
}
