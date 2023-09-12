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
'Reference' : 'What is Docker? - Amazon AWS Link: https://aws.amazon.com/docker/#:~:text=Docker%20is%20a%20software%20platform,tools%2C%20code%2C%20and%20runtime.'},
{ 'id' : 21,
'Term' : 'Microservices',
'Description' : 'Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.',
'Reference' : 'What are Microservices? | AWS Link: https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and,small%2C%20self%2Dcontained%20teams., Wikipedia Link: https://en.wikipedia.org/wiki/Microservices'},
{ 'id' : 22,
'Term' : 'Cloud-native Apps',
'Description' : 'A cloud-native application is a program that is designed for a cloud computing architecture. These applications are run and hosted in the cloud and are designed to capitalize on the inherent characteristics of a cloud computing software delivery model.',
'Reference' : 'What is a Cloud-Native Application and How Do You Build One? Link:https://www.techtarget.com/searchcloudcomputing/definition/cloud-native-application#:~:text=A%20cloud%2Dnative%20application%20is,cloud%20computing%20software%20delivery%20model.'},
{ 'id' : 23,
'Term' : 'Docker Compose',
'Description' : ' Docker Compose is a tool that helps you define and share multi-container applications. With Compose, you can create a YAML file to define the services and with a single command, you can spin everything up or tear it all down.',
'Reference' : 'Docker Compose overview Link: https://docs.docker.com/compose/'},
{ 'id' : 24,
'Term' : 'Bridge network driver',
'Description' : 'In terms of Docker, a bridge network uses a software bridge which allows containers connected to the same bridge network to communicate, while providing isolation from containers which are not connected to that bridge network.',
'Reference' : 'Bridge network driver - Docker Docs Link: https://docs.docker.com/network/drivers/bridge/#:~:text=In%20terms%20of%20Docker%2C%20a,connected%20to%20that%20bridge%20network.'},
{ 'id' : 25,
'Term' : 'container overlay network',
'Description' : 'The overlay network driver creates a distributed network among multiple Docker daemon hosts. This network sits on top of (overlays) the host-specific networks, allowing containers connected to it (including swarm service containers) to communicate securely when encryption is enabled.',
'Reference' : 'Overlay network driver | Docker Docs Link: https://docs.docker.com/network/drivers/overlay/#:~:text=The%20overlay%20network%20driver%20creates,securely%20when%20encryption%20is%20enabled.'},
{ 'id' : 26,
'Term' : 'Macvlan network driver',
'Description' : 'The macvlan network assigns a unique MAC address to each container, making it appear to be a physical device on your network, just like a traditional virtual machine. The Docker daemon then routes the traffic to containers on the basis of their MAC address.',
'Reference' : 'Macvlan network driver: Assign MAC address to Docker Link: https://4sysops.com/archives/macvlan-network-driver-assign-mac-address-to-docker-containers/#:~:text=The%20macvlan%20network%20assigns%20a,basis%20of%20their%20MAC%20address.'},
{ 'id' : 27,
'Term' : 'Synchronous protocol',
'Description' : 'HTTP is a synchronous protocol. The client sends a request and waits for a response from the service. Thats independent of the client code execution that could be synchronous (thread is blocked) or asynchronous (thread isnt blocked, and the response will reach a callback eventually). The important point here is that the protocol (HTTP/HTTPS) is synchronous and the client code can only continue its task when it receives the HTTP server response.',
'Reference' : 'Communication in a microservice architecture Link: https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture'},
{ 'id' : 28,
'Term' : 'Asynchronous protocol',
'Description' : 'Other protocols like AMQP (a protocol supported by many operating systems and cloud environments) use asynchronous messages. The client code or message sender usually doesnt wait for a response. It just sends the message as when sending a message to a RabbitMQ queue or any other message broker.',
'Reference' : 'Communication in a microservice architecture Link: https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/communication-in-microservice-architecture'},
{ 'id' : 29,
'Term' : 'Kubernetes',
'Description' : 'Kubernetes automates operational tasks of container management and includes built-in commands for deploying applications, rolling out changes to your applications, scaling your applications up and down to fit changing needs, monitoring your applications, and more—making it easier to manage applications.',
'Reference' : 'What Is Kubernetes? | Google Cloud Link: https://cloud.google.com/learn/what-is-kubernetes#:~:text=Kubernetes%20automates%20operational%20tasks%20of,it%20easier%20to%20manage%20applications.'},
{ 'id' : 30,
'Term' : 'kubelet',
'Description' : 'kubelet. An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod. The kubelet takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are running and healthy',
'Reference' : 'Kubernetes Components Link: https://kubernetes.io/docs/concepts/overview/components/#:~:text=kubelet,PodSpecs%20are%20running%20and%20healthy.'},
{ 'id' : 31,
'Term' : 'Pod',
'Description' : 'A Pod is the smallest deployable unit of computing that can be created and managed in Kubernetes, which is composed of on ore more containers with shared storage and network resources.',
'Reference' : 'What is a Pod? | Kubernetes Link: https://kubernetes.io/docs/concepts/workloads/pods/#:~:text=Pods%20are%20the%20smallest%20deployable,how%20to%20run%20the%20containers.'},
{ 'id' : 32,
'Term' : 'Control plane',
'Description' : 'The Control plane components provide the control and decision making for the execution of the Kubernetes Pods, including scheduling, support for responding to cluster events (e.g., faults), consistent highly-available key based storage storage and exposure to the Kubernetes service through an API. ',
'Reference' : 'What is the Kubernetes Control Plane? Link:https://www.armosec.io/glossary/kubernetes-control-plane/#:~:text=The%20Kubernetes%20control%20plane%20manages,state%20to%20the%20desired%20state.'},
{ 'id' : 33,
'Term' : 'kube-proxy',
'Description' : ' kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept. kube-proxy maintains network rules on nodes. These network rules allow network communication to your Pods from network sessions inside or outside ',
'Reference' : 'Kube-Proxy: What Is It and How It Works | Link: https://kodekloud.com/blog/kube-proxy/#'},
{ 'id' : 34,
'Term' : 'Terraform',
'Description' : 'Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs). Providers enable Terraform to work with virtually any platform or service with an accessible API',
'Reference' : 'What is Terraform? Link: https://developer.hashicorp.com/terraform/intro'},
{ 'id' : 35,
'Term' : 'Deployment Pipeline',
'Description' : 'A deployment pipeline is a system of automated processes designed to quickly and accurately move new code additions and updates from version control to production. In past development environments, manual steps were necessary when writing, building, and deploying code.',
'Reference' : 'What is a Deployment Pipeline? Link: https://www.pagerduty.com/resources/learn/what-is-a-deployment-pipeline/#:~:text=In%20software%20development%2C%20a%20deployment,%2C%20building%2C%20and%20deploying%20code.'},
{ 'id' : 36,
'Term' : 'Bitbucket',
'Description' : 'BitBucket is a cloud-based service that helps developers store and manage their code, as well as track and control the changes to their code. BitBucket provides a cloud-based Git repository hosting service. Its interface is user-friendly enough so even novice coders can take advantage of Git.',
'Reference' : 'Bitbucket | Git solution for teams using Jira Link: https://bitbucket.org/product'},
{ 'id' : 37,
'Term' : 'Forking',
'Description' : 'Instead of using a single server-side repository to act as the “central” codebase, forking gives every developer a server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one.',
'Reference' : 'HOW TO FORK A BITBUCKET REPOSITORY. Link: https://www.iorad.com/player/2102171/Bitbucket---How-to-fork-a-bitbucket-repository#trysteps-1'},
{ 'id' : 38,
'Term' : 'DaemonSet',
'Description' : 'A Daemonset is another controller that manages pods like Deployments, ReplicaSets, and StatefulSets. It was created for one particular purpose: ensuring that the pods it manages to run on all the cluster nodes. As soon as a node joins the cluster, the DaemonSet ensures that it has the necessary pods running on it.',
'Reference' : 'DaemonSet | Kubernetes Link: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/'},
{ 'id' : 39,
'Term' : 'ReplicaSet',
'Description' : 'A ReplicaSet (RS) is a Kubernetes object that ensures there is always a stable set of running pods for a specific workload. The ReplicaSet configuration defines a number of identical pods required, and if a pod is evicted or fails, creates more pods to compensate for the loss.',
'Reference' : 'ReplicaSet | Kubernetes? Link: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/'},
{ 'id' : 40,
'Term' : 'Mirror Pod',
'Description' : 'The kubelet automatically tries to create a mirror Pod on the Kubernetes API server for each static Pod. This means that the Pods running on a node are visible on the API server, but cannot be controlled from there.',
'Reference' : 'Mirror Pod | Kubernetes Link: https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/#:~:text=The%20kubelet%20automatically%20tries%20to,cannot%20be%20controlled%20from%20there.'}

];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary' , sub: 'Welcome to my site showing Devops terms and their brief descriptions' , names: nameList});
});

module.exports = router;
