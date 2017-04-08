import {Component} from 'angular2/core';

import {Page} from '../page';
import {PageTitleService} from '../../services/page-title-service';
import {ResumeSection, ResumeSubsection} from './resume-section';

import {jobs, skillCategories} from '../../data/resume-data';


@Component({
  directives: [ResumeSection, ResumeSubsection],
  templateUrl: '/assets/app/pages/resume/resume.html'
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
