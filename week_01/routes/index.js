var express = require('express');
var router = express.Router();

/* GET home page. */
const nameList = [
{ 'id' : 1,
'Term' : 'Waterfall Model',
'Description' : 'The Waterfall model is a traditional and linear software development methodology that follows a sequential approach with distinct phases. It emphasizes comprehensive documentation and formal planning but has drawbacks like rigidity to changes, longer development cycles, and limited adaptability.',
'Reference' : 'SDLC - Waterfall Model Link: https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm, Wikipedia on waterfall model Link: https://en.wikipedia.org/wiki/Waterfall_model'},
{ 'id' : 2,
'Term' : 'Deployment',
'Description' : 'Deployment is the process of making a software application available for use in a production environment. It involves installing the software on servers or devices where end-users can access and utilize it. The deployment phase marks the transition from development to the live environment and ensures the software is fully functional and ready for use.',
'Reference' : 'Software deployment - definition & overview Link:https://www.sumologic.com/glossary/software-deployment/ '},
{ 'id' : 3,
'Term' : 'Agile',
'Description' : 'Agile is a flexible software development methodology that emphasizes customer feedback, collaboration, and iterative development. Teams work in short iterations, delivering incremental software updates and prioritizing customer value. Continuous communication ensures adaptability and faster delivery.',
'Reference' : 'What is the Agile methodology? Link: https://www.atlassian.com/agile'},
{ 'id' : 4,
'Term' : 'blah',
'Description' : 'Unit testing is essential in software development, ensuring individual components work correctly, catching bugs early, and enhancing code reliability. It supports continuous integration, improves documentation, and boosts developer confidence.',
'Reference' : 'Unit Testing | Software Testing Link: https://www.geeksforgeeks.org/unit-testing-software-testing/'},
{ 'id' : 5,
'Term' : 'Ops',
'Description' : '"Ops" is the operations team managing software applications or IT systems, handling server administration, network management, deployment, and ensuring system stability and security. They collaborate with the development team, especially in DevOps methodologies, to ensure smooth operations.',
'Reference' : 'The “Ops” in DevOps Link: https://medium.com/@grazibonizi/the-ops-in-devops-392cdb6e137e'},
{ 'id' : 6,
'Term' : 'GitHub',
'Description' : 'GitHub is a web-based platform for hosting and managing software development projects using Git. It enables collaboration, version control, and code sharing among developers and teams.',
'Reference' : 'What Is GitHub? A Beginner’s Introduction to GitHub Link: https://kinsta.com/knowledgebase/what-is-github/'},
{ 'id' : 7,
'Term' : 'Repository',
'Description' : 'A repository is a central location for storing and managing software code and files. It enables version control, collaboration, and history tracking of changes, making it essential for software projects.',
'Reference' : 'Wikipedia Repository (version control) Link: https://en.wikipedia.org/wiki/Repository_(version_control)'},
{ 'id' : 8,
'Term' : 'Datacenter',
'Description' : 'A data center is a centralized facility used to house and manage computing resources, including servers, storage systems, and networking equipment. It plays a critical role in storing, processing, and distributing data and supporting digital services and cloud computing.',
'Reference' : 'What is a Data Center? Link: https://www.paloaltonetworks.com/cyberpedia/what-is-a-data-center'},
{ 'id' : 9,
'Term' : 'NodeJS',
'Description' : 'Node.js is an open-source server-side JavaScript runtime built on Chromes V8 engine. It enables running JavaScript for server-side applications offering scalability for web development and real-time applications.',
'Reference' : 'Node.js Introduction Link: https://www.w3schools.com/nodejs/nodejs_intro.asp'},
{ 'id' : 10,
'Term' : 'sprint',
'Description' : 'A sprint is a time-boxed iteration in Agile methodologies lasting two to four weeks. A cross-functional team collaborates to deliver a set of features, aiming for a potentially shippable product increment by the end of the sprint. Sprints encourage frequent feedback and continuous improvement in software development.',
'Reference' : 'What are sprints? Link: https://www.atlassian.com/agile/scrum/sprints'},

];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary' , sub: 'Welcome to my site showing Devops terms and their brief descriptions' , names: nameList});
});

module.exports = router;
