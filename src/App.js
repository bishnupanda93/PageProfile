import React from 'react';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  const person ={
    name : 'Bishnu Panda',
    address: 'Mumbai, India',
    phone :'+91 6371744055',
    email:'pandabishnu525@gmail.com',
    linkedIn:'https://www.linkedin.com/in/priya-gupta-46549aab'
  }
  const summary = 'Highly creative, sassy and motivated front-end web developer with 4.8 years of experience in building and maintaining responsive websites. Passionate about building pixel perfect application, with focus on consistency and reusability of components. Proficient in modern libraries and frameworks and experience in Agile development method.';
  const skills=[
    'HTML5, CSS3, JavaScript ',
    'React, Redux, ES6, Jest',
    'Vue.js, Vuex',
    'AngularJs, Ionic, Protractor, Jasmine, Karma',
    'Sass',
    'jQuery',
    'webpack, Git, Fiddler, Bitbucket, Jira',
    'WebStorm, Visual Studio Code'
  ];
  const experience =[
    {
      role:"Functional Analiyst",
      organisation:"ABN AMRO Bank",
      tenureStart:"JAN 2019",
      tenureEnd:"PRESENT",
      experienceDetail:[
          "Developed React application for Employee Portal lite(CRM) wherein employee can search and view contracts of a bank customer.",
          "Build reusable UI components required as per user experience design and specification.",
          "Consumed RESTful API using axios and managed state application using Redux and managed routing using React Router.",
          "Wrote maintainable, scalable, responsive, and cross-browser front end development code",
          "Collaborated with user experience and business analyst for understanding requirements and found better viable solutions by involving with whole team.",
          "Prepared technical implementation and design documents for the requirements given."
      ]
  },
  {
    role:"Frontend Developer",
    organisation:"ABN AMRO Bank",
    tenureStart:"MAR 2017",
    tenureEnd:"JAN 2019",
    experienceDetail:[
      'Developed Angular Js widgets for Employee Portal Journey Application for searching, viewing contact and contract details, history of the conversation and processes initiated for a bank customer.',
      'Followed front-end standards as documented and developed new components required as per user experience design and specification.',
      'Wrote maintainable, scalable, responsive, and cross-browser front end development code.',
      'Also have written unit testing test cases in Jasmine and have written and performed functional end to end testing using protractor.'
    ]
  },
  {
    role:"Hybrid App Developer",
    organisation:"State Bank of India",
    tenureStart:"JUL 2016",
    tenureEnd:"MAR 2017",
    experienceDetail:[
      'Developed hybrid mobile application for Task management for iOS and Android platforms. Used languages HTML5, CSS3 and framework like Angular Js and Ionic and Cordova.',
      'Used Sass as CSS preprocessor for styling mobile app and developed responsive design to function across multiple devices.',
      'Resolved technical issues through debugging, research, and investigation.'
    ]
  },
  {
    role:"Junior Front End Developer",
    organisation:"Generali Group",
    tenureStart:"NOV 2015",
    tenureEnd:"JUN 2016",
    experienceDetail:[
      'Worked on enhancement and change requests in front end for Public Portal web application which showcased products and campaign.',
      'Fixed bugs and tested code in multiple browsers to ensure cross-browser compatibility.',
      'Also, developed prototype of mobile application using Hybrid App Technology using Ionic and Angular Js and as a vendor we were successful in winning the project deal.'
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
