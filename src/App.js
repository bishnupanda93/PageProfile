import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const person ={
    name : 'Bishnu Panda',
    address: 'Mumbai, India',
    phone :'+91 6371744055',
    email:'pandabishnu525@gmail.com',
    linkedIn:'https://www.linkedin.com/in/bishnu-panda-309669113'
  }
  const summary = 'Highly enthosiastic and motivated QA engineer with 4.7 years of experience in building and maintaining Automated frameworks for both front-end applications and web services. Passionate about learning new technologies and tools.Proficient in both functional- manual testing and non-functional-performance testing and experience in Agile development method.';
  const skills=[
    'Functional Testing-: Web Services,	Web Applications, Mobile Applications,	DataBase Testing, Batch Jobs Testing',
    'Automation Testing-: UFT,	Selenium, Rest Assured, Protractor, Postman',
    'Performance Testing-: LoadRunner, Jmeter',
    'Tools & Technology-: JavaScript, AngularJs, JIRA, Soap UI, Postman, ALM, SQL Server Management Studio, Visual Studio Code,	Bitbucket, Fiddler, Git, SVN',
  ];
  const experience =[
    {
      role:"Automation Tester",
      organisation:"ABN Amro Bank",
      tenureStart:"June 2019",
      tenureEnd:"Present",
      experienceDetail:[
        'Built the Automated test suite for Client Application using Selenium IDE.',
	      'Updated the performance Test suite for Client Application.',
	      'Created the Automation framework for Java Services using Postman-Newman.',
	      'Built the Fron-End Automation and completed the framework usng Protractor.',
	      'Microsoft Azure Certified with fundamental level.',
	      'Learnt various Tools and Technologies along with the functional deliveries.',
	      'Worked in multiple Teams and able to provide support for QA assignments.'
      ]
  },
  {
    role:"Automation Tester",
    organisation:"WireCards NA",
    tenureStart:"June 2018",
    tenureEnd:"June 2019",
    experienceDetail:[
      'Built the end to end Framework for API automation using UFT.',
  	  'Performed Regression Testing for UI applications using UFT.',
	    'Performed Load Testing using Load Runner.'
    ]
  },
  {
    role:"Functional Tester",
    organisation:"Prepaid Cards",
    tenureStart:"June 2017",
    tenureEnd:"June 2018",
    experienceDetail:[
      'Build Excel based Macros using JavaScript for various Process Improvements.',
	    'Received few Appreciations/Awards from Customer and TCS for excellent deliveries and support.',
	    'Certified as Yellow belt in Lean methodology by providing value adds towards customer satisfaction and savings.',
	    'Certified as Green belt in Lean methodology by creating value adds for subsequent years.'
    ]
  },
  {
    role:"Functional Tester",
    organisation:"Citi Bank",
    tenureStart:"June 2016",
    tenureEnd:"June 2017",
    experienceDetail:[
      'Worked as a Functional tester for 1 and half year and able to get the Domain knowledge for various banking procedures and functions.',
      'ISTQB certified with fundmental level.',
      'Worked on Database verification for customer transactional data.',
    	'Worked on Batch jobs for customer payments.'
    ] 
  }
]
  return (
    <div className="container">
      <Header personDetails = {person}></Header>
      <Portfolio skills={skills} summary={summary} experience={experience}></Portfolio>
    </div>
  );
}

export default App;
