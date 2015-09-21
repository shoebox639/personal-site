export class Job {
  constructor(
    public company: string,
    public position: string,
    public location: string,
    public period: string,
    public accomplishments: List<string>
  ){
  }
}

export var jobs: List<Job> = [
  new Job(
    'Yodle',
    'Lead Software Engineer',
    'New York, NY',
    'October 2010 - present',
    [
      `Implementing new front end architecture that easily shares web components and communicates with the backend using a REST API.`,
      `Instrumental in the creation of Centermark, a single page web application that gives Franchisors insight into their Franchisees' advertising engagement.`,
      `Implemented aggregation pipelines to speed up slow queries.`,
      `Built and maintained an Angular component library with self-documenting website.`,
      `Built a commission system and web application that calculated and tracked commissions for our sales reps in real time.`,
      `Trained new engineers on Test Driven Design.`,
      `Gave talks on front end programming best practices.`
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
    public skills: List<String>
  ) {
  }
}

export var skillCategories: List<SkillCategory> = [
  new SkillCategory(
    'Languages',
    ['Java', 'JavaScript', 'Scala', 'Ruby', 'HTML', 'CSS3', 'ES6', 'TypeScript']
  ),
  new SkillCategory(
    'Front End',
    ['Angular 1', 'RequireJs', 'jQuery', 'Express', 'UI Bootstrap', 'Rails', 'Angular 2']
  ),
  new SkillCategory(
    'Backend End',
    ['Node', 'CommonJs', 'Spring', 'Play Framework', 'Thrift', 'Hadoop', 'Scalding', 'Hibernate']
  ),
  new SkillCategory(
    'Database',
    ['Postgres', 'HBase', 'Oracle', 'MySQL', 'MongoDB']
  )
]
