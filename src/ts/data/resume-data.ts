export class Job {
  constructor(
    public company: string,
    public position: string,
    public location: string,
    public period: string,
    public accomplishments: string[]
  ){
  }
}

export var jobs: Job[] = [
  new Job(
    'Yodle',
    'Lead Software Engineer',
    'New York, NY',
    'June 2015 - present',
    [
      `Implementing new front end architecture that easily shares web components and communicates with the backend using a REST API.`,
      `Established front end programming best practices as part of front end guild.`,
    ]
  ),
  new Job(
    '',
    'Senior Software Engineer',
    '',
    'April 2014 - June 2015',
    [
      `Built and maintained an Angular component library with self-documenting website.`,
      `Trained new engineers on Test Driven Design.`,
      `Gave internal talks on Angular development.`
    ]
  ),
  new Job(
    '',
    'Software Engineer',
    '',
    'October 2010 - April 2014',
    [
      `Instrumental in the creation of Centermark, a single page web application that gives Franchisors insight into their Franchisees' advertising engagement.`,
      `Implemented aggregation pipelines to speed up slow queries.`,
      `Built a web application to calculate and track sales rep commissions in real time.`,
    ]
  ),
  new Job(
    'QualityHealth',
    'Software Engineer',
    'Jersey City, NJ',
    'June 2009 - October 2010',
    [
      `Created interface for making remote calls between main website on JBoss and affiliate partner portal running on Grails.`,
      `Integrated jQGrid as a tool to make interactive grid tools for organizing tracking and financial data.`,
      `Automated aspects of newsletter production pipeline.`,
      `Implemented consumer based session tests to analyze the impact on revenue from changes in registration flows.`
    ]
  )
];

export class SkillCategory {
  constructor(
    public name: string, 
    public skills: String[]
  ) {
  }
}

export var skillCategories: SkillCategory[] = [
  new SkillCategory(
    'Languages',
    ['Java', 'JavaScript', 'Scala', 'Ruby', 'HTML', 'CSS3', 'ES6', 'TypeScript']
  ),
  new SkillCategory(
    'Front End',
    ['Angular', 'RequireJs', 'jQuery', 'Express', 'Bootstrap', 'UI Bootstrap', 'Rails']
  ),
  new SkillCategory(
    'Backend End',
    ['Node', 'CommonJs', 'Spring', 'Play Framework', 'JSP', 'Gulp', 'SBT', 'Thrift', 'Hadoop', 'Scalding', 'Hibernate', 'Spring Boot', 'Spring MVC']
  ),
  new SkillCategory(
    'Testing',
    ['JUnit', 'Jasmine', 'Karma', 'Selenium', 'QUnit', 'Protractor']
  ),
  new SkillCategory(
    'Database',
    ['Postgres', 'HBase', 'Oracle', 'MySQL', 'MongoDB']
  )
]
