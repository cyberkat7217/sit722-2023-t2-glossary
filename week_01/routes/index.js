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
{ 'id' : 11,
'Term' : 'Azure',
'Description' : 'Azure is Microsofts cloud computing platform, offering various services like virtual machines, web hosting, databases, storage, AI, and more. It allows users to build, deploy, and manage applications through Microsofts data centers. Some services include Azure App Service, Azure SQL Database, and Azure Cognitive Services. Its a comprehensive solution for creating, scaling, and managing a wide range of applications and resources in the cloud.',
'Reference' : 'SimpliLearn What is Microsoft Azure: How Does It Work and Services Link: https://www.simplilearn.com/tutorials/azure-tutorial/what-is-azure, Wikipedia on Azure Link: https://en.wikipedia.org/wiki/Microsoft_Azure'},
{ 'id' : 12,
'Term' : 'Continuous Integration',
'Description' : 'Continuous Integration (CI) is a software development practice where code changes are frequently integrated into a shared repository. Automated build and testing processes are triggered whenever code is added, allowing developers to identify and address issues early in the development cycle. CI aims to maintain code quality, enhance collaboration, and streamline the development process by ensuring that new code integrates smoothly with the existing codebase.',
'Reference' : 'What is Continuous Integration? – Amazon Web Services - definition & overview Link:https://aws.amazon.com/devops/continuous-integration/ '},
{ 'id' : 13,
'Term' : 'Continuous Delivery',
'Description' : 'Continuous delivery is an ongoing DevOps practice of building, testing, and delivering improvements to software code and user environments with the help of automated tools. The key outcome of the continuous delivery (CD) paradigm is code that is always in a deployable state.',
'Reference' : 'Continuous delivery - definition & overview - Sumo Logic Link: https://www.sumologic.com/glossary/continuous-delivery/#:~:text=Continuous%20delivery%20is%20an%20ongoing,always%20in%20a%20deployable%20state.'},
{ 'id' : 14,
'Term' : 'Continuous Deployment',
'Description' : 'Continuous deployment is a strategy in software development where code changes to an application are released automatically into the production environment. This automation is driven by a series of predefined tests. Once new updates pass those tests, the system pushes the updates directly to the softwares users.',
'Reference' : 'What is continuous deployment? - IBM Link: https://www.ibm.com/topics/continuous-deployment#:~:text=Continuous%20deployment%20is%20a%20strategy,directly%20to%20the%20softwares%20users.'},
{ 'id' : 15,
'Term' : 'PreProd',
'Description' : 'Release to staging, using auto-release where the release is automatically pushed or a triggered release when the requirements of the "ready state" are met.Release for approval and push to production.',
'Reference' : 'Preprod Done Right: the Definitive Guide - Enov8 Link: https://www.enov8.com/blog/preprod-done-right-the-definitive-guide/#:~:text=Preprod%20is%20a%20process%20by,applications%20before%20deployment%20to%20production.'},
{ 'id' : 16,
'Term' : 'Continuous monitoring',
'Description' : 'Continuous monitoring is an approach where an organization constantly monitors its IT systems and networks to detect security threats, performance issues, or non-compliance problems in an automated manner. ',
'Reference' : 'What Is Continuous Monitoring? - CrowdStrike Link: https://www.crowdstrike.com/cybersecurity-101/observability/continuous-monitoring/#:~:text=Continuous%20monitoring%20is%20an%20approach,time%20to%20address%20them%20quickly.'},
{ 'id' : 17,
'Term' : 'Infrastructure as Code (IaC)',
'Description' : 'Infrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes. With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations.',
'Reference' : 'What is Infrastructure as Code (IaC)? - Red Hat Link: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=Infrastructure%20as%20Code%20(IaC)%20is,to%20edit%20and%20distribute%20configurations.'},
{ 'id' : 18,
'Term' : 'Container',
'Description' : 'Simply put, a container is everything that you need to run an application packaged into its own little bundle of data. A container pulls in the application code, its libraries and dependencies, any configuration files, and additional system tools it is reliant on.',
'Reference' : 'What is a Container? - Docker Link: https://www.docker.com/resources/what-container/'},
{ 'id' : 19,
'Term' : 'Virtual Machine',
'Description' : 'A VM is a virtualized instance of a computer that can perform almost all of the same functions as a computer, including running applications and operating systems. Virtual machines run on a physical machine and access computing resources from software called a hypervisor.',
'Reference' : 'What is a Virtual Machine? | VMware Glossary Link: https://www.vmware.com/topics/glossary/content/virtual-machine.html#:~:text=A%20Virtual%20Machine%20(VM)%20is,a%20physical%20%E2%80%9Chost%E2%80%9D%20machine.'},
{ 'id' : 20,
'Term' : 'Docker',
'Description' : 'Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.',
'Reference' : 'What is Docker? - Amazon AWS Link: https://aws.amazon.com/docker/#:~:text=Docker%20is%20a%20software%20platform,tools%2C%20code%2C%20and%20runtime.'}

];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary' , sub: 'Welcome to my site showing Devops terms and their brief descriptions' , names: nameList});
});

module.exports = router;
