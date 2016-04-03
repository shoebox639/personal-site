import {Component} from 'angular2/core';

import {Page} from '../page';
import {PageTitleService} from '../../services/page-title-service';
import {ResumeSection, ResumeSubsection} from './resume-section';

import {jobs, skillCategories} from '../../data/resume-data';


@Component({
  selector: 'resume-print',
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

@Component({
  directives: [ResumeSection, ResumeSubsection, ResumePrint],
  templateUrl: '/assets/pages/resume/resume.html'
})
export class ResumeView extends Page {
  constructor(private pageTitleService: PageTitleService) {
    super();
    pageTitleService.title = 'My Resume';
    pageTitleService.subTitle = '';
    pageTitleService.background = 'resume';
  }

  get jobs() {
    return jobs;
  }
  
  get skillCategories() {
    return skillCategories;
  }
}
