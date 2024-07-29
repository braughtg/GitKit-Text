var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface   The GitKit introduces students to the fundamental skills and concepts (including git \/ GitHub) used in collaborative Free and Open Source Software (FOSS) development. It introduces students to the forking workflow and guides them through its use. The GitKit provides classroom materials, hands-on assignments, project artifacts (repository, code, documentation, issues), and a development environment that support teaching these skills and concepts in the context of an authentic FOSS project.   "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "topic-instructor-guide",
  "level": "1",
  "url": "topic-instructor-guide.html",
  "type": "Section",
  "number": "1.1",
  "title": "Instructor Guide",
  "body": " Instructor Guide   This instructor guide contains everything you need to know about using GitKit in your class. gives a Quick Start guide that may be sufficient if you have used GitKit previously and just need the bare minimum of reminders. provides a more detailed guide for getting started.  For help with GitKit, you can chat with us on Discord.   As part of our NSF-funded project, we are gathering information on the use of GitKit. If you are currently using GitKit in a course, we hope that you will consider participating in a brief survey by clicking the link below:     Thank you!    Quick Start  This quick start guide provides a very brief outline of the steps necessary to use the GitKit in a course. It is intended to be sufficient for instructors who have used the GitKit previously and just need a reminder of the necessary steps. provides more details.   TODO: INSERT RUNESTONE URLs HERE. Adopt the GitKit with Linux text or the GitKit with VSCode text for your course.  You are currently viewing the GitKit with Linux text.    Click to Deploy the GitKit FarmData2 repository to use as the upstream.  One deploy of the GitKit FarmData2 repository can support up to 32 students. Perform as many deploys as necessary for your course. Be sure to give each deploy a distinct name.    Copy the URL(s) of the deployed GitKit FarmData2 upstream(s) and make it (them) available to your class.    Use or adapt the provided slides to introduce the concepts and terminology, and assign students hands-on exercises from the chapters as appropriate for your course:   Chapter 2: Community and Collaboration [ Slides | Instructor Notes | Exercises ]    Chapter 3: Working Locally and Upstreaming Changes [ Slides | Instructor Notes | Exercises ]    Chapter 4: Staying Synchronized [ Slides | Instructor Notes | Exercises ]    Chapter 5: Merge Conflicts [ Slides | Instructor Notes | Exercises ]       Review and merge student Pull Requests into the upstream just before or during the class that covers .    Merge the addRound2Conflicts branch into the upstream just before or during the class that covers .       Overview of the GitKit  The GitKit content is broken into 4 chapters (See ). Each chapter of the text contains the set of hands-on exercises to be completed by the students. These exercises are not intended to stand alone. They require some prior introduction to the concepts and terminology that they use. A separate set of slides are provided that instructors can use or adapt to introduce the necessary concepts and terminology before students complete the hands-on exercises.  In a nominal use of the GitKit:   The instructor introduces each chapter by using or adapting the provided slides in a 50-75 minute class period.    Students complete the hands-on activities contained in the chapters of this text as 2-3 hours of homework or during an assigned lab period.     TODO: Pointers with links to additional information in other sections...    GitKit Chapters  The content of the GitKit is broken into the chapters below. For each chapter the key topics and activities are outlined and links are given to the slides, the chapter of the text containing the hands-on exercises and instructor notes for the chapter.   Chapter 2: Community and Collaboration   [ Slides ]: Introduce Free and Open Source Software (FOSS) communities, and how they collaborate using Git, GitHub and the forking workflow.    [ Exercises ]: Provide hands-on practice with the issue tracker, and forking and cloning of a repository.    [ Instructor Notes ]       Chapter 3: Working Locally and Upstreaming Changes   [ Slides ]: Introduce feature branches, commits, and pull requests as part of the forking workflow.    [ Exercises ]: Provide practice with creating and switching branches, staging and committing changes, pushing branches to origin and submitting pull requests.    [ Instructor Notes ]       Chapter 4: Staying Synchronized   [ Slides ]: Introduce how merges into the upstream can result in a developer's origin and clone becoming out of synch, and explains how to re-synchronize.    [ Exercises ]: Provide practice with setting an upstream remote, pulling (non-conflicting) changes from upstream, and deleting feature branches. The exercises also provide repetition of practice with the skills from the previous chapters.    [ Instructor Notes ]       Chapter 5: Merge Conflicts   [ Slides ]: Introduce how merging of changes into the upstream can lead to merge conflicts, how they are found and represented, and how they can be resolved.    [ Exercises ]: Provide practice with understanding merge conflicts, merging main into a feature branch, using a graphical merge tool and updating a pull request.    [ Instructor Notes ]          Student Development Environments   The GitKit provides a cloud based development environment that students use to complete the hands-on GitKit activities. This development environment is called a KitClient . A KitClient is a pre-configured containerized development environment that provides all of the tools and configuration necessary to complete the activities. The KitClient also includes the Kit-tty Virtual Assistant (See and a set of automations that simulate project community (See ).  There are currently two KitClients that can be used with GitKit and the instructor may choose the KitClient to use based on the needs of their course and students.    Linux KitClient : shows the Linux KitClient where students complete the hands-on activities in a complete Linux virtual desktop environment.  The Linux KitClient development environment.   The Linux KitClient development environment window displaying the Linux desktop.        VSCode KitClient : shows the VSCode KitClient in which students complete the hands-on activities in the VSCode interface.  The VSCode development environment.   The VSCode development environment window showing the VS Code interface.      Both of these KitClients run remotely within GitPod Workspaces and students interact with them through a Web browser. To run a KitClient, students will need will need to have a free GitPod account, which they will created as a part of the activities.  There is a different version of this text for each of the KitClients. The texts provide an equivalent experience, but adapt content to the specifics (e.g. user interface elements) of the KitClient as necessary. The instructor will need to adopt the text for the KitClient that has been chosen for the course.  You are currently viewing the GitKit with Linux version of the text. TODO: Insert RUNESTONE URLs here. If you prefer you can switch to the GitKit with VSCode version of the text.    The Kit-tty Virtual Assistant  The Kit-tty (a play on Kit and TTY), pronounced kitty, is a virtual assistant built into the development environments (i.e. KitClients) that catches common student errors and provides hints on how to perform activity steps correctly. The Kit-tty has been designed to catch and correct student errors that were frequently observed in early uses of the GitKit. Many of the errors recognized by the Kit-tty are those that typically are not discovered until students progress several steps further into the activity, at which point they require more advanced git skills to undo.  For example, the Kit-tty intervenes when a student attempts to:   commit to the main branch (an action that should not happen in the forking workflow).    merge a feature branch into main (instead of vice versa).    set the upstream remote to the origin (instead of the upstream).    clone the upstream (rather than their fork).    clone one repository inside of another.       Community Automations  Community automations perform actions and comment on tickets in the issue tracker and on pull requests. These actions and comments are designed to simulate some common types of interaction with project maintainers and other FOSS community at appropriate points in the learning activities.  For example:   When claiming an issue by adding a comment to its ticket in the issue tracker. An automation notices this comment, assigns the issue to the student (if it hasn't already been assigned to someone else). The automation then also responds personally as a maintainer might: \"Great! I assigned you (@TheirUsername) to the issue. Have fun working on it!\"        The FarmData2 Project  The upstream repository deployed by the GitKit was captured from the FarmData2 project . FarmData2 aims to support farmers in the day-to-day operation and record keeping needs of their small organic diversified vegetable farms.  While FarmData2 focuses on farming operations, students completing the GitKit activities work only with documentation files in markdown. Thus, there is no farming knowledge required to compete the GitKit.  Current development work on FarmData2 is occurring in the FarmData2 Organization on GitHub.    Deploying the GitKit  To use the GitKit the instructor for the course must deploy one or more instances of it. Deploying an instance of the GitKit creates a repository that students use as the upstream repository for the hands-on activities.  The repository that is created contains the code, documentation and history from the FarmData2 project (see ) and has an issue tracker that is populated with the tickets that are used in the GitKit activities. This repository is also configured to interact with the KitClient to install the Kit-tty virtual assistant (see ) and to provide simulated community automations (see ).  Use the following steps to deploy an instance of the GitKit FarmData2 repository for use in your course:   Identify the GitHub space where you would like to deploy the GitKit FarmData2 repository. The GitHub space can be your GitHub account or a GitHub organization that you have created for your course and for which you have write permission.    Visit GitHub using this link to create a New personal access token (classic) with:   All \"repo\" permissions.    \"workflow\" permission.    \"read:org\" permission under \"admin:org\".       Be sure to copy your access token.    Click this link to Deploy the GitKit FarmData2 repository .    Respond to the deployer prompts that appear in the \"TERMINAL\" area at the bottom of the window. It will ask you for:   The name of the repository. We recommend \"GitKit-FarmData2\".    You GitHub username to deploy into your GitHub space, or the name of a GitHub organization to which you have write permission to deploy into that organization's GitHub space.    The personal access token that you created.       Wait for the deployer to complete. This typically takes several minutes because the deployer must create the issues in the issue tracker slowly to avoid being rate-limited by the GitHub API.    When the deployer completes it will generate output similar to the following that shows the URL of your deployed GitKit FarmData2 repository.   Your new repository is ready. Give the URL below to your students. https:\/\/github.com\/braughtg\/test-gitkit   Copy the URL of the repository and distribute it to your students using e-mail, LMS or whatever means is convenient for you.    Note that each deployed GitKit can support up to 32 students. If you have more than 32 students, you will need to repeat steps 4-7 to create additional deploys.  Each deployed repository must have a unique name. We recommend appending suffixes to \"GitKit-FarmData2\" for example \"GitKit-FarmData2-group1\", \"GitKit-FarmData2-group2\", etc.       Instructor Notes  TODO: Current Instructor Notes Section   Doing the GitKit Yourself  TODO: why and tips on how to!    Communities and Collaboration  TODO: Current content with \"todo first\"    Working Locally and Upstreaming Changes  TODO: Current content with \"todo first\"    Staying Synchronized with the Upstream  TODO: Current content with \"todo first\"    Handling Merge Conflicts  TODO: Current content with \"todo first\"     Contributing to GitKit  All of the work on the GitKit is being conducted under open licenses (GPL3, CC-BY-NC-SA) that welcome participation, contribution and derivative work. Active work on the GitKit is taking place in the Kits section of the HFOSSedu GitLab Organization .   "
},
{
  "id": "topic-quick-start-2",
  "level": "2",
  "url": "topic-instructor-guide.html#topic-quick-start-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitKit with Linux "
},
{
  "id": "topic-gitkit-development-environments-2-1",
  "level": "2",
  "url": "topic-instructor-guide.html#topic-gitkit-development-environments-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "KitClient "
},
{
  "id": "topic-gitkit-development-environments-2-2",
  "level": "2",
  "url": "topic-instructor-guide.html#topic-gitkit-development-environments-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Linux KitClient VSCode KitClient "
},
{
  "id": "topic-gitkit-development-environments-2-4",
  "level": "2",
  "url": "topic-instructor-guide.html#topic-gitkit-development-environments-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "GitKit with Linux "
},
{
  "id": "sec-foss-communities",
  "level": "1",
  "url": "sec-foss-communities.html",
  "type": "Section",
  "number": "2.1",
  "title": "FOSS Communities",
  "body": " FOSS Communities   Some introductory text here.    FOSS Community Principles  Some of the key principles that guide FOSS communities are shared values , collaboration , transparency , inclusivity , meritocracy and release early and often .  Consider each of the following statements about the operation of a FOSS community and choose the principle (or principles if multiple apply equally) with which it most closely aligns.   By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Review The Open Source Way     Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Review The Open Source Way    More here eventually...  A reference to the subsection block works:   A reference to a specific exercise:   A reference to a specific exercise in another section:     FOSS Community Roles   In class we also discussed some of the roles that tend to exist in FOSS communities. These included Users , Requestors , Contributors , Maintainers and Leaders .      Consider each of the actions described below. For each action, select the role of the individual (or individuals if multiple apply equally) that is most likely to be responsible for the action.    Choosing the license under which the project will be released.      Users  Requestors  Contributors  Maintainers  Leaders       More here eventually...  A reference to a specific exercise:    "
},
{
  "id": "topic-foss-community-principles-2",
  "level": "2",
  "url": "sec-foss-communities.html#topic-foss-community-principles-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shared values collaboration transparency inclusivity meritocracy release early and often "
},
{
  "id": "ex-foss-community-principles-q1",
  "level": "2",
  "url": "sec-foss-communities.html#ex-foss-community-principles-q1",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "",
  "body": " By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Review The Open Source Way   "
},
{
  "id": "ex-foss-community-principles-q2",
  "level": "2",
  "url": "sec-foss-communities.html#ex-foss-community-principles-q2",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": " Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Review The Open Source Way   "
},
{
  "id": "ch-cc_sec-fc_ssec-foss-community-roles-2-1",
  "level": "2",
  "url": "sec-foss-communities.html#ch-cc_sec-fc_ssec-foss-community-roles-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Users Requestors Contributors Maintainers Leaders "
},
{
  "id": "ex-foss-community-roles-q1",
  "level": "2",
  "url": "sec-foss-communities.html#ex-foss-community-roles-q1",
  "type": "Exercise",
  "number": "2.1.2.1",
  "title": "",
  "body": " Choosing the license under which the project will be released.      Users  Requestors  Contributors  Maintainers  Leaders     "
},
{
  "id": "ch-cc_sec-github-account",
  "level": "1",
  "url": "ch-cc_sec-github-account.html",
  "type": "Section",
  "number": "2.2",
  "title": "GitHub Account",
  "body": " GitHub Account  You will be using git and GitHub in many of the GitKit activities. In order to use GitHub it is necessary that you have an account.    If you do not have a GitHub account, or would like to have a separate account just for this course, you can create a GitHub account here: https:\/\/github.com\/signup    Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.       "
},
{
  "id": "ch-cc_sec-ga_ex-github-account-url",
  "level": "2",
  "url": "ch-cc_sec-github-account.html#ch-cc_sec-ga_ex-github-account-url",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.     "
},
{
  "id": "ch-cc_sec-the-issue-tracker",
  "level": "1",
  "url": "ch-cc_sec-the-issue-tracker.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Issue Tracker",
  "body": " The Issue Tracker    shows the FarmData2 issue tracker. As described in class, FOSS projects often use an issue tracker to maintain a list of bugs to be fixed, features to be added and other tasks to be completed. Thus, the issue tracker is a good place to go in order to find something to work on in a FOSS project.    The GitHub issue tracker displaying issues from the FarmData2 project.   The GitHub issue tracker displaying issues from the FarmData2 project.       Exploring the Issue Tracker     Visit the URL that your instructor provided for the FarmData2 upstream repsoitory that you will be using for your course. Click the \"Issues\" tab near the top of the page to go to the issue tracker. This will take you to a page similar to the one shown in .  Use the information in the issue tracker to answer the following questions.    Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"    Correct!      Seeding Report: Allows Invalid Inputs    Incorrect. Be sure you are looking at the correct issue.      Seeding Input: Duplicates appearing in Area Dropdown    Incorrect. Be sure you are looking at the correct issue.      Dickinson College Farm Link    Incorrect. Be sure you are looking at the correct issue.     Use the Issue Tracker and find issue #10.    Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation     Correct!       Round1     Correct!       Enhancement     Correct!       Typos     Incorrect. Be sure you are looking at the correct issue.       Bug     Incorrect. Be sure you are looking at the correct issue.       UI\/UX     Incorrect. Be sure you are looking at the correct issue.     Use the Issue Tracker and find issue #8.   More here eventually...     Claiming an Issue     Most projects will have a process by which contributors can claim an issue to work on or have an issue that they want to work on assigned to them.    Examine the issue tracker for the FarmData2 upstream that you are using for this activity.Some of the issues have already been assigned. How can you tell that a specific issue has been assigned to someone?     An avitar appears in the asignee column of the issue tracker.    Correct!      The issue title contains the word \"assigned\".      The issue no longer appears in the issue tracker.      The title of the issue appears in a different color.      A comment bubble appears to the right of the issue title.     Look at the column headers in the issue tracker.   More here eventually...    "
},
{
  "id": "ch-cc_sec-the-issue-tracker-2-1",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-the-issue-tracker-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "issue tracker "
},
{
  "id": "ch-cc_sec-it_fig-issue-tracker",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-it_fig-issue-tracker",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " The GitHub issue tracker displaying issues from the FarmData2 project.   The GitHub issue tracker displaying issues from the FarmData2 project.   "
},
{
  "id": "ch-cc_sec-it_exs-etit_ex_issue-title",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-it_exs-etit_ex_issue-title",
  "type": "Exercise",
  "number": "2.3.1.1",
  "title": "",
  "body": " Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"    Correct!      Seeding Report: Allows Invalid Inputs    Incorrect. Be sure you are looking at the correct issue.      Seeding Input: Duplicates appearing in Area Dropdown    Incorrect. Be sure you are looking at the correct issue.      Dickinson College Farm Link    Incorrect. Be sure you are looking at the correct issue.     Use the Issue Tracker and find issue #10.  "
},
{
  "id": "ch-cc_sec-it_ex_issue-tags",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-it_ex_issue-tags",
  "type": "Exercise",
  "number": "2.3.1.2",
  "title": "",
  "body": " Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation     Correct!       Round1     Correct!       Enhancement     Correct!       Typos     Incorrect. Be sure you are looking at the correct issue.       Bug     Incorrect. Be sure you are looking at the correct issue.       UI\/UX     Incorrect. Be sure you are looking at the correct issue.     Use the Issue Tracker and find issue #8.  "
},
{
  "id": "ch-cc_sec-it_exs-claiming-an-issue-2-1",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-it_exs-claiming-an-issue-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "claim assigned "
},
{
  "id": "ch-cc_sec-it_ex-assigned-issues",
  "level": "2",
  "url": "ch-cc_sec-the-issue-tracker.html#ch-cc_sec-it_ex-assigned-issues",
  "type": "Exercise",
  "number": "2.3.2.1",
  "title": "",
  "body": " Examine the issue tracker for the FarmData2 upstream that you are using for this activity.Some of the issues have already been assigned. How can you tell that a specific issue has been assigned to someone?     An avitar appears in the asignee column of the issue tracker.    Correct!      The issue title contains the word \"assigned\".      The issue no longer appears in the issue tracker.      The title of the issue appears in a different color.      A comment bubble appears to the right of the issue title.     Look at the column headers in the issue tracker.  "
},
{
  "id": "ch-cc_sec-basic-foss-workflow",
  "level": "1",
  "url": "ch-cc_sec-basic-foss-workflow.html",
  "type": "Section",
  "number": "2.4",
  "title": "Basic FOSS Workflow",
  "body": " Basic FOSS Workflow  Now that you have found an issue to work on, you will need to colloaborate with the project community to fix that issue. Collaboration in FOSS communities follows patterns of behavior known as workflows . shows a basic version of a FOSS workflow that is used by contributors working on FOSS projects.    The basic FOSS workflow.   The main project repo is forked into your GitHub space to create your remote copy. Your remote copy is then cloned into your local development environment to create your local copy. Changes to your local copy are pushed to your remote copy and a pull request is made to the main project.        GitHub (and other repository hosting services) use specific terminology to refer to the copies of the repository. Match the terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams in the class materials.     illustrates a basic workflow that is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropraite description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your chagnes into the main project reposoitory.    Review the diagrams in the class materials.    Drag the steps of the basic FOSS workflow into the order that they are likely to occur.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would need to use to fix a bug.   More stuff here eventually...   "
},
{
  "id": "ch-cc_sec-basic-foss-workflow-2",
  "level": "2",
  "url": "ch-cc_sec-basic-foss-workflow.html#ch-cc_sec-basic-foss-workflow-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "workflows "
},
{
  "id": "ch-cc_sec-bfw_fig-basic-foss-workflow",
  "level": "2",
  "url": "ch-cc_sec-basic-foss-workflow.html#ch-cc_sec-bfw_fig-basic-foss-workflow",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " The basic FOSS workflow.   The main project repo is forked into your GitHub space to create your remote copy. Your remote copy is then cloned into your local development environment to create your local copy. Changes to your local copy are pushed to your remote copy and a pull request is made to the main project.   "
},
{
  "id": "ch-cc_sec-bfw_ex-github-repository-terminology",
  "level": "2",
  "url": "ch-cc_sec-basic-foss-workflow.html#ch-cc_sec-bfw_ex-github-repository-terminology",
  "type": "Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " GitHub (and other repository hosting services) use specific terminology to refer to the copies of the repository. Match the terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams in the class materials.  "
},
{
  "id": "ch-cc_sec-bfw_ex-workflow-step-definitions",
  "level": "2",
  "url": "ch-cc_sec-basic-foss-workflow.html#ch-cc_sec-bfw_ex-workflow-step-definitions",
  "type": "Exercise",
  "number": "2.4.2",
  "title": "",
  "body": "  illustrates a basic workflow that is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropraite description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your chagnes into the main project reposoitory.    Review the diagrams in the class materials.  "
},
{
  "id": "ch-cc_sec-bfw_ex-workflow-step-order",
  "level": "2",
  "url": "ch-cc_sec-basic-foss-workflow.html#ch-cc_sec-bfw_ex-workflow-step-order",
  "type": "Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Drag the steps of the basic FOSS workflow into the order that they are likely to occur.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would need to use to fix a bug.  "
},
{
  "id": "ch-cc_sec-forking-the-upstream",
  "level": "1",
  "url": "ch-cc_sec-forking-the-upstream.html",
  "type": "Section",
  "number": "2.5",
  "title": "Forking the Upstream Repository",
  "body": " Forking the Upstream Repository  In you saw how FOSS communities can use a basic workflow to collaborate. Now its time to get some hands-on experience with that workflow. illustrates first step in the workflow - forking the main project repository.  In this section you will complete this step by forking the main project repository into your own GitHub space.  Note that when working on the GitKit you will not be interacting with the main FarmData2 repository. Instead, you will be interacting with a copy of FarmData2 that was created just for these activities. You will treat this copy as if it is the “Main Project Repo” or the upstream. This will allow you to practice interacting with an upstream for learning purposes without affecting the main FarmData2 repository.    Forking the main project repository.   The main project repo is forked into your GitHub space to create your remote copy.      Creating your Fork  Using your web browser visit the URL that your instructor gave you to use as the upstream repository for these activities. Once on that page, complete the following exercises.   Copy the upstream URL from your browswer and paste it here.         Thank you.      Double check the upstream URL that you were given by your instructor.      Double check the upstream URL that you were given by your instructor.       Complete the following steps using the upstream repository from    Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button is toward the upper right hand corner of the window.   Click the “Fork” button to create your own fork of the upstream repository. Make sure that you create the fork in the GitHub account that you listed in .    Copy the full URL of your fork of the upstream from your browswer's address bar and paste it here.         Thank you.      Be sure to give the full URL similar to https:\/\/github.com\/MyUserName\/myfork ).       "
},
{
  "id": "ch-cc_sec-ftu_fig-basic-workflow-fork",
  "level": "2",
  "url": "ch-cc_sec-forking-the-upstream.html#ch-cc_sec-ftu_fig-basic-workflow-fork",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " Forking the main project repository.   The main project repo is forked into your GitHub space to create your remote copy.   "
},
{
  "id": "ch-cc_sec-ftu_ex-upstream-url",
  "level": "2",
  "url": "ch-cc_sec-forking-the-upstream.html#ch-cc_sec-ftu_ex-upstream-url",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": " Copy the upstream URL from your browswer and paste it here.         Thank you.      Double check the upstream URL that you were given by your instructor.      Double check the upstream URL that you were given by your instructor.     "
},
{
  "id": "ch-cc_sec-ftu_ex-create-your-fork",
  "level": "2",
  "url": "ch-cc_sec-forking-the-upstream.html#ch-cc_sec-ftu_ex-create-your-fork",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": " Complete the following steps using the upstream repository from    Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button is toward the upper right hand corner of the window.   Click the “Fork” button to create your own fork of the upstream repository. Make sure that you create the fork in the GitHub account that you listed in .  "
},
{
  "id": "ch-cc_sec-ftu_ex-fork-url",
  "level": "2",
  "url": "ch-cc_sec-forking-the-upstream.html#ch-cc_sec-ftu_ex-fork-url",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": " Copy the full URL of your fork of the upstream from your browswer's address bar and paste it here.         Thank you.      Be sure to give the full URL similar to https:\/\/github.com\/MyUserName\/myfork ).     "
},
{
  "id": "ch-cc_sec-development-environment",
  "level": "1",
  "url": "ch-cc_sec-development-environment.html",
  "type": "Section",
  "number": "2.6",
  "title": "Setting up the Local Development Environment",
  "body": " Setting up the Local Development Environment  Text of section.  "
},
{
  "id": "ch-cc_sec-cloning-your-origin",
  "level": "1",
  "url": "ch-cc_sec-cloning-your-origin.html",
  "type": "Section",
  "number": "2.7",
  "title": "Cloning Your Origin",
  "body": " Cloning Your Origin  Text of section.  "
},
{
  "id": "ch-cc_sec-review-and-reflection",
  "level": "1",
  "url": "ch-cc_sec-review-and-reflection.html",
  "type": "Section",
  "number": "2.8",
  "title": "Review and Reflection",
  "body": " Review and Reflection  Text of section.     "
},
{
  "id": "ch-cc_sec-rar_exs-likert-test",
  "level": "2",
  "url": "ch-cc_sec-review-and-reflection.html#ch-cc_sec-rar_exs-likert-test",
  "type": "Exercise",
  "number": "2.8.1",
  "title": "",
  "body": ""
},
{
  "id": "ch-cc_sec-extra-practice",
  "level": "1",
  "url": "ch-cc_sec-extra-practice.html",
  "type": "Section",
  "number": "2.9",
  "title": "Extra Practice",
  "body": " Extra Practice  Text of section.  "
},
{
  "id": "topic-foss-communities",
  "level": "1",
  "url": "topic-foss-communities.html",
  "type": "Section",
  "number": "3.1",
  "title": "FOSS Communities",
  "body": " FOSS Communities   During class time you will have learned about the principles that guide FOSS Communities and the roles that are performed by FOSS community members. The exercises in this section ask about those principles and roles.    FOSS Community Principles   Some of the key principles that guide FOSS communities are shared values , collaboration , transparency , inclusivity , meritocracy and release early and often . If you would like you can review a discussion of some of these principles at The Open Source Way       Consider each of the following statements about the operation of a FOSS community and choose the principle (or principles if multiple apply equally) with which it most closely aligns.   By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The mission and goals of the community are more important than individual agendas.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The best ideas should win, regardless of where they come from.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Incorporating new changes and features quickly generates feedback and leads to rapid improvement.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Community members enhance and extend what others contribute in unanticipated ways.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decision makers continually seek diverse perspectives.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      All community members have access to the information necessary to do their best work.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often         FOSS Community Roles   There are a number of roles that tend to exist in FOSS communities. Some of these included Users , Requestors , Contributors , Maintainers and Leaders . Not all communities will have all of these rolls and often community members will take on multiple roles simultaneously or move between roles over time.      Consider each of the actions described below. For each action, select the role (or roles) of the individual(s) that would most likely be responsible for the action.   Choosing the license under which the project will be released.      Users  Requestors  Contributors    Maintainers  Leaders      Using the software in a new, unanticipated or creative way.      Users  Requestors  Contributors    Maintainers  Leaders      Asking that a useful new feature be added to the software.      Users  Requestors  Contributors    Maintainers  Leaders      Discovering a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Providing a code patch that fixes a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Submitting an improved set of installation instructions.      Users  Requestors  Contributors    Maintainers  Leaders      Documenting a bug in the issue tracker so others can fix it.      Users  Requestors  Contributors    Maintainers  Leaders      Defining the goals for the next year of work on the project.      Users  Requestors  Contributors    Maintainers  Leaders      Incorporating a contributed bug fix into the main branch.      Users  Requestors  Contributors    Maintainers  Leaders      Redesigning a software module in the system.      Users  Requestors  Contributors    Maintainers  Leaders        "
},
{
  "id": "topic-foss-communities-3-2-1",
  "level": "2",
  "url": "topic-foss-communities.html#topic-foss-communities-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shared values collaboration transparency inclusivity meritocracy release early and often "
},
{
  "id": "ex-community-principles",
  "level": "2",
  "url": "topic-foss-communities.html#ex-community-principles",
  "type": "Exercise",
  "number": "3.1.1.1",
  "title": "",
  "body": " Consider each of the following statements about the operation of a FOSS community and choose the principle (or principles if multiple apply equally) with which it most closely aligns.   By building on each other's work the community can solve problems that no one could solve alone.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decisions and the rationale for them are available to the community.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The mission and goals of the community are more important than individual agendas.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      The best ideas should win, regardless of where they come from.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Incorporating new changes and features quickly generates feedback and leads to rapid improvement.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Community members enhance and extend what others contribute in unanticipated ways.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      Decision makers continually seek diverse perspectives.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often      All community members have access to the information necessary to do their best work.      shared values  collaboration  transparency    inclusivity  meritocracy  release early and often     "
},
{
  "id": "topic-foss-communities-4-2-1",
  "level": "2",
  "url": "topic-foss-communities.html#topic-foss-communities-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Users Requestors Contributors Maintainers Leaders "
},
{
  "id": "ex-community-roles",
  "level": "2",
  "url": "topic-foss-communities.html#ex-community-roles",
  "type": "Exercise",
  "number": "3.1.2.1",
  "title": "",
  "body": " Consider each of the actions described below. For each action, select the role (or roles) of the individual(s) that would most likely be responsible for the action.   Choosing the license under which the project will be released.      Users  Requestors  Contributors    Maintainers  Leaders      Using the software in a new, unanticipated or creative way.      Users  Requestors  Contributors    Maintainers  Leaders      Asking that a useful new feature be added to the software.      Users  Requestors  Contributors    Maintainers  Leaders      Discovering a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Providing a code patch that fixes a bug in the software.      Users  Requestors  Contributors    Maintainers  Leaders      Submitting an improved set of installation instructions.      Users  Requestors  Contributors    Maintainers  Leaders      Documenting a bug in the issue tracker so others can fix it.      Users  Requestors  Contributors    Maintainers  Leaders      Defining the goals for the next year of work on the project.      Users  Requestors  Contributors    Maintainers  Leaders      Incorporating a contributed bug fix into the main branch.      Users  Requestors  Contributors    Maintainers  Leaders      Redesigning a software module in the system.      Users  Requestors  Contributors    Maintainers  Leaders     "
},
{
  "id": "topic-github-account",
  "level": "1",
  "url": "topic-github-account.html",
  "type": "Section",
  "number": "3.2",
  "title": "GitHub Account",
  "body": " GitHub Account   You will be using GitHub in many of the exercises in this text. In order to use GitHub it is necessary that you have an account.      If you do not have a GitHub account, or would like to have a separate account just for this course, you can create a GitHub account here: https:\/\/github.com\/signup .  If you already have a GitHub account that you would like to use for this class you can skip to .    Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.       "
},
{
  "id": "ex-create-github-account",
  "level": "2",
  "url": "topic-github-account.html#ex-create-github-account",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " If you do not have a GitHub account, or would like to have a separate account just for this course, you can create a GitHub account here: https:\/\/github.com\/signup .  If you already have a GitHub account that you would like to use for this class you can skip to .  "
},
{
  "id": "ex-github-account-url",
  "level": "2",
  "url": "topic-github-account.html#ex-github-account-url",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Give the full URL to your GitHub profile, for example https:\/\/github.com\/yourUsername          Thank you.      Please give the full URL using the format indicated in the question.     "
},
{
  "id": "topic-the-issue-tracker",
  "level": "1",
  "url": "topic-the-issue-tracker.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Issue Tracker",
  "body": " The Issue Tracker   FOSS projects often use an issue tracker to maintain a list of bugs to be fixed, features to be added and other tasks to be completed. Thus, the issue tracker is a good place to go in order to find something to work on in a FOSS project. The exercises in this section will guide you through interaction with the GitKit FarmData2 issue tracker as shown in . By the end of the section you will have found an issue to work on.    The GitKit FarmData2 issue tracker in GitHub.   The GitHub issue tracker displaying issues from the GitKit FarmData2 repository.       Exploring the Issue Tracker     The tasks in this exercise will help you to find the issue tracker for the GitKit FarmData2 repository that you will be using.   Visit the URL that your instructor provided for the GitKit FarmData2 repository that you will be using as the upstream repository for your course.   Click the \"Issues\" tab near the top of the page to go to the issue tracker. This will take you to a page similar to the one shown in .    Use the issue tracker in the GitKit FarmData2 repository to complete the following tasks.   Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"      Seeding Report: Allows Invalid Inputs      Seeding Input: Duplicates appearing in Area Dropdown      Dickinson College Farm Link    Be sure you are looking at issue #10.  Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation        Round1        Enhancement        Typos        Bug        UI\/UX     Be sure you are looking at issue #8.  Which file in the repo would you need to modify in order to fix the typo described in issue #11?    ONBOARDING.md    INSTALL.md    CONTRIBUTING.md    LICENSE.md   Be sure you are looking at issue #11.  Which of the following indicate an order by which the issues can be sorted?    Newest    Oldest    Recently updated    Most commented    Most difficult    Highest priority   Find the \"Sort\" drop-down in the issue tracker and see what \"Sort by\" options there are.  Pick one of the sort orders that can be used with issues and briefly explain why it might be useful to sort the issues in that order.  Think about why it might bue useful for a requestor, contributor or maintainer to find the types of issues that would be at the top of the sorted list.     Claiming an Issue   Because projects often have many people working asynchronously many will have a process by which contributors can claim an issue that they are interested in working on and have that issue assigned to them in the issue tracker.  The following exercises will guide you through the process of claiming an issue to work on in the GitKit FarmData2 issue tracker.      Examine the GitKit FarmData2 issue tracker. How can you tell which issue have already been assigned?    The avatar of the assigned user appears to the right of the issue title.    The issue no longer appears in the issue tracker.    The username of assigned user appears next to the issue title.    The issue is moved to a separate list of assigned issues.    The issue tracker does not show any indication that an issue has been assigned.   Look for some lines for issues that look different than the others and hover your mouse over the different parts.  In the GitKit FarmData2 issue tracker, contributors interested in working on an issue can request that it be assigned to them by commenting on the issue with the exact message:   I would like to work on this please!   The first person who comments on an unclaimed issue with this message will receive a response from the project maintainers. This messages will indicate that the issue has been assigned to them and the issue tracker will update to show this as you saw in .   Use the GitKit FarmData2 issue tracker to complete the following tasks.   Choose an unassigned issue with a \"Round 1\" tag.  See for information about identifying assigned and unassigned issues.  Comment on the issue that you chose using the message above to claim it.  Click on the issue title to open the issue and use the \"Add a comment\" box at the bottom of the page.  Reload the issue tracker and check that you received a response and that the issue has been assigned to you.   If you did not receive a response, wait a few minutes and reload the issue tracker page again. Sometimes it takes a few minutes for your comment to be noticed and the issue to be assigned. If you still do not receive a response check that you typed the message correctly.  If you received a response telling you that you were not assigned the issue, someone else slipped a comment in just ahead of you and was assigned the issue. If this happens, just try again.    Give the full URL to the issue that you have been assigned, for example https:\/\/github.com\/my-class\/GitKit-FarmData2\/issues\/2          Thank you.      Please give the full URL using the format indicated in the question.       It is worth noting that different projects will have different processes for claiming and assigning issues, and some projects may not assign issues at all. What are some advantages and disadvantages of assigning issues to specific individuals?  Think about this from both the individual developer's perspective and from the overall project's perspective.    "
},
{
  "id": "fig-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#fig-issue-tracker",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": " The GitKit FarmData2 issue tracker in GitHub.   The GitHub issue tracker displaying issues from the GitKit FarmData2 repository.   "
},
{
  "id": "ex-find-the-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-find-the-issue-tracker",
  "type": "Exercise",
  "number": "3.3.1.1",
  "title": "",
  "body": " The tasks in this exercise will help you to find the issue tracker for the GitKit FarmData2 repository that you will be using.   Visit the URL that your instructor provided for the GitKit FarmData2 repository that you will be using as the upstream repository for your course.   Click the \"Issues\" tab near the top of the page to go to the issue tracker. This will take you to a page similar to the one shown in .  "
},
{
  "id": "ex-explore-the-issue-tracker",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-explore-the-issue-tracker",
  "type": "Exercise",
  "number": "3.3.1.2",
  "title": "",
  "body": " Use the issue tracker in the GitKit FarmData2 repository to complete the following tasks.   Every issue has a number and a title. What is the title of issue #10?     Add Missing \"that\"      Seeding Report: Allows Invalid Inputs      Seeding Input: Duplicates appearing in Area Dropdown      Dickinson College Farm Link    Be sure you are looking at issue #10.  Each issue can have tags that can be used to sort and categorize issues. Select all of the tags that are associated with issue #8?      Documentation        Round1        Enhancement        Typos        Bug        UI\/UX     Be sure you are looking at issue #8.  Which file in the repo would you need to modify in order to fix the typo described in issue #11?    ONBOARDING.md    INSTALL.md    CONTRIBUTING.md    LICENSE.md   Be sure you are looking at issue #11.  Which of the following indicate an order by which the issues can be sorted?    Newest    Oldest    Recently updated    Most commented    Most difficult    Highest priority   Find the \"Sort\" drop-down in the issue tracker and see what \"Sort by\" options there are.  Pick one of the sort orders that can be used with issues and briefly explain why it might be useful to sort the issues in that order.  Think about why it might bue useful for a requestor, contributor or maintainer to find the types of issues that would be at the top of the sorted list. "
},
{
  "id": "topic-the-issue-tracker-4-2-1",
  "level": "2",
  "url": "topic-the-issue-tracker.html#topic-the-issue-tracker-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "claim assigned "
},
{
  "id": "ex-identifying-assigned-issues",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-identifying-assigned-issues",
  "type": "Exercise",
  "number": "3.3.2.1",
  "title": "",
  "body": " Examine the GitKit FarmData2 issue tracker. How can you tell which issue have already been assigned?    The avatar of the assigned user appears to the right of the issue title.    The issue no longer appears in the issue tracker.    The username of assigned user appears next to the issue title.    The issue is moved to a separate list of assigned issues.    The issue tracker does not show any indication that an issue has been assigned.   Look for some lines for issues that look different than the others and hover your mouse over the different parts. "
},
{
  "id": "ex-claim-an-issue",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-claim-an-issue",
  "type": "Exercise",
  "number": "3.3.2.2",
  "title": "",
  "body": " Use the GitKit FarmData2 issue tracker to complete the following tasks.   Choose an unassigned issue with a \"Round 1\" tag.  See for information about identifying assigned and unassigned issues.  Comment on the issue that you chose using the message above to claim it.  Click on the issue title to open the issue and use the \"Add a comment\" box at the bottom of the page.  Reload the issue tracker and check that you received a response and that the issue has been assigned to you.   If you did not receive a response, wait a few minutes and reload the issue tracker page again. Sometimes it takes a few minutes for your comment to be noticed and the issue to be assigned. If you still do not receive a response check that you typed the message correctly.  If you received a response telling you that you were not assigned the issue, someone else slipped a comment in just ahead of you and was assigned the issue. If this happens, just try again.  "
},
{
  "id": "ex-round1-issue-url",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-round1-issue-url",
  "type": "Exercise",
  "number": "3.3.2.3",
  "title": "",
  "body": " Give the full URL to the issue that you have been assigned, for example https:\/\/github.com\/my-class\/GitKit-FarmData2\/issues\/2          Thank you.      Please give the full URL using the format indicated in the question.     "
},
{
  "id": "ex-why-not-assign-issues",
  "level": "2",
  "url": "topic-the-issue-tracker.html#ex-why-not-assign-issues",
  "type": "Exercise",
  "number": "3.3.2.4",
  "title": "",
  "body": " It is worth noting that different projects will have different processes for claiming and assigning issues, and some projects may not assign issues at all. What are some advantages and disadvantages of assigning issues to specific individuals?  Think about this from both the individual developer's perspective and from the overall project's perspective. "
},
{
  "id": "topic-basic-foss-workflow",
  "level": "1",
  "url": "topic-basic-foss-workflow.html",
  "type": "Section",
  "number": "3.4",
  "title": "Basic FOSS Workflow Concepts",
  "body": " Basic FOSS Workflow Concepts   Now that you have found an issue to work on, you will need to collaborate with the project community to fix that issue. Collaboration in FOSS communities follows patterns of behavior known as workflows . shows a basic version of one FOSS workflow that is used by contributors working on FOSS projects.    A basic FOSS workflow.   Forking the main project repo creates your remote copy in your GitHub spacey. Cloning your remote copy creates your local copy in your local development environment. Changes that you make to your local copy can be contributed to the main project by pushing them to your remote copy and creating a pull request.        The exercises in this section will help to familiarize you with the terminology and the process of this basic FOSS workflow.   GitHub uses specific terminology to refer to the copies of the repository. Match the GitHub terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams of the basic FOSS workflow from the in the class materials.     illustrates a basic FOSS workflow similar to what is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropriate description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your changes into the main project repository.    Review the diagrams of the basic FOSS workflow from the in the class materials.    Drag the steps of the basic FOSS workflow into the order that they are likely to occur when working on a project.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would go through when starting to work on a project, fixing a bug, and contributing your changes back to the main project.    "
},
{
  "id": "topic-basic-foss-workflow-2-1",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#topic-basic-foss-workflow-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "workflows "
},
{
  "id": "fig-basic-foss-workflow",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#fig-basic-foss-workflow",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " A basic FOSS workflow.   Forking the main project repo creates your remote copy in your GitHub spacey. Cloning your remote copy creates your local copy in your local development environment. Changes that you make to your local copy can be contributed to the main project by pushing them to your remote copy and creating a pull request.   "
},
{
  "id": "ex-github-repository-terminology",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-github-repository-terminology",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " GitHub uses specific terminology to refer to the copies of the repository. Match the GitHub terminology on the left with the repository in to which it refers on the right.    Upstream  Main project repository    Origin  Your Remote Copy    Local Clone  Local Copy of Your Remote Copy    Review the diagrams of the basic FOSS workflow from the in the class materials.  "
},
{
  "id": "ex-workflow-step-definitions",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-workflow-step-definitions",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "  illustrates a basic FOSS workflow similar to what is used in many FOSS projects. This workflow has the following 5 steps: Fork , Clone , Edit , Push , and Pull Request . Match each term on the left with the appropriate description on the right.    Fork  Create a copy of the main project repository in your GitHub space.    Clone  Create a copy of your remote copy of the repository into your local development environment.    Edit  Make changes to your local copy of the repository (e.g. to fix a bug).    Push  Copy your changes into your remote copy of the repository.    Pull Request  Ask that the project maintainers incorporate your changes into the main project repository.    Review the diagrams of the basic FOSS workflow from the in the class materials.  "
},
{
  "id": "ex-workflow-step-order",
  "level": "2",
  "url": "topic-basic-foss-workflow.html#ex-workflow-step-order",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": " Drag the steps of the basic FOSS workflow into the order that they are likely to occur when working on a project.    Fork    Clone    Edit    Push    Pull Request    Imagine the process you would go through when starting to work on a project, fixing a bug, and contributing your changes back to the main project.  "
},
{
  "id": "topic-forking-the-upstream",
  "level": "1",
  "url": "topic-forking-the-upstream.html",
  "type": "Section",
  "number": "3.5",
  "title": "Forking the Upstream Repository",
  "body": " Forking the Upstream Repository   In you saw how FOSS communities can use a basic workflow to collaborate. In this section you will begin to gain hands-on experience with that workflow. illustrates first step in the workflow. In this step you will fork the main project repository, which creates a copy of it into your own GitHub space.    Forking the main project repository.   Creating a fork of the main project repo creates a copy of it in your own GitHub space. This copy is your remote copy.     Note that when working on the GitKit you will not actually be interacting with the main FarmData2 repository. Instead, you will be interacting with a copy of the FarmData2 repository that was created just for these activities. That said, you will be treating this copy exactly as if it is the “Main Project Repo” or the upstream repository. This allows you, your classmates and many other students to practice interacting with an upstream project for learning purposes without affecting the main FarmData2 repository.      Your instructor will have provided you with the URL of the GitKit FarmData2 repository that you will be using as the main project repo (i.e. the upstream) for the exercises in this text.  Give the full URL to the GitKit FarmData2 repository that you will be using as the upstream, for example: https:\/\/github.com\/yourClass\/theRepoName          Thank you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Please give the full URL using the format indicated in the question.     Check the course materials from your instructor. It should provide the URL of the GitKit FarmData2 repository that was created for your course.   Visit the upstream repository from in your browser and then complete the following tasks to create your fork.   Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button will be toward the upper right hand corner of the browser window.   Click the “Fork” button to create your own fork of the upstream repository. Be sure to pick the GitHub username you used in in the \"Choose an owner\" box so that your fork will be created in your GitHub space.    Give the full URL of your fork of the upstream, for example: https:\/\/github.com\/yourGitHub\/theRepoName          Thank you.      Looks like you might be giving the URL of the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Please give the full URL using the format indicated in the question.     The URL you give here should contain your GitHub username. Be sure you are looking the copy of the GitKit FarmData2 repository that is in your GitHub space.   Notice that in there is an dashed orange arrow pointing from your remote copy (i.e. your origin) to the main project repo (i.e. the upstream). This arrow is indicating that your fork knows where the upstream project repository is located.   Visit your origin repository on GitHub. There is some text and a link on that page that corresponds to the orange dashed arrow in . Copy and paste that text and link here.  This text and link will be near the repository name in the upper left corner of the window.  Which step of the basic FOSS workflow would require that your origin repository know the location of the upstream repository?     Pull request      Fork      Clone      Edit      Push    Think about which step of the basic FOSS workflow needs to send information back to the main project.  Explain in a few sentences why your origin repository keeps track of the location of the upstream repository from which it was forked.  Be sure to state which operation in the basic FOSS workflow uses this information and the function performed by that operation.   When you forked the upstream repository, GitHub made a copy of that repository into your GitHub space.  Did it also make a copy of the issue tracker and its issues into your GitHub space? What reasons can you think of for why the designers of GitHub decided that the issue tracker should not be copied into the fork?    "
},
{
  "id": "topic-forking-the-upstream-2-1",
  "level": "2",
  "url": "topic-forking-the-upstream.html#topic-forking-the-upstream-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fork "
},
{
  "id": "fig-basic-workflow-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#fig-basic-workflow-fork",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": " Forking the main project repository.   Creating a fork of the main project repo creates a copy of it in your own GitHub space. This copy is your remote copy.   "
},
{
  "id": "ex-upstream-url",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-upstream-url",
  "type": "Exercise",
  "number": "3.5.1",
  "title": "",
  "body": " Your instructor will have provided you with the URL of the GitKit FarmData2 repository that you will be using as the main project repo (i.e. the upstream) for the exercises in this text.  Give the full URL to the GitKit FarmData2 repository that you will be using as the upstream, for example: https:\/\/github.com\/yourClass\/theRepoName          Thank you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to use the URL that your instructor has given you.      Please give the full URL using the format indicated in the question.     Check the course materials from your instructor. It should provide the URL of the GitKit FarmData2 repository that was created for your course. "
},
{
  "id": "ex-create-your-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-create-your-fork",
  "type": "Exercise",
  "number": "3.5.2",
  "title": "",
  "body": " Visit the upstream repository from in your browser and then complete the following tasks to create your fork.   Find the \"Fork\" button on the upstream repository page.  The fork button.     The fork button will be toward the upper right hand corner of the browser window.   Click the “Fork” button to create your own fork of the upstream repository. Be sure to pick the GitHub username you used in in the \"Choose an owner\" box so that your fork will be created in your GitHub space.  "
},
{
  "id": "ex-fork-url",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-fork-url",
  "type": "Exercise",
  "number": "3.5.3",
  "title": "",
  "body": " Give the full URL of your fork of the upstream, for example: https:\/\/github.com\/yourGitHub\/theRepoName          Thank you.      Looks like you might be giving the URL of the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Looks like you might be trying to use the real FarmData2 upstream. Be sure to give the URL of the fork you created in your GitHub space.      Please give the full URL using the format indicated in the question.     The URL you give here should contain your GitHub username. Be sure you are looking the copy of the GitKit FarmData2 repository that is in your GitHub space. "
},
{
  "id": "ex-upstream-ref-from-origin",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-upstream-ref-from-origin",
  "type": "Exercise",
  "number": "3.5.4",
  "title": "",
  "body": " Notice that in there is an dashed orange arrow pointing from your remote copy (i.e. your origin) to the main project repo (i.e. the upstream). This arrow is indicating that your fork knows where the upstream project repository is located.   Visit your origin repository on GitHub. There is some text and a link on that page that corresponds to the orange dashed arrow in . Copy and paste that text and link here.  This text and link will be near the repository name in the upper left corner of the window.  Which step of the basic FOSS workflow would require that your origin repository know the location of the upstream repository?     Pull request      Fork      Clone      Edit      Push    Think about which step of the basic FOSS workflow needs to send information back to the main project.  Explain in a few sentences why your origin repository keeps track of the location of the upstream repository from which it was forked.  Be sure to state which operation in the basic FOSS workflow uses this information and the function performed by that operation. "
},
{
  "id": "ex-no-issue-tracker-in-fork",
  "level": "2",
  "url": "topic-forking-the-upstream.html#ex-no-issue-tracker-in-fork",
  "type": "Exercise",
  "number": "3.5.5",
  "title": "",
  "body": " When you forked the upstream repository, GitHub made a copy of that repository into your GitHub space.  Did it also make a copy of the issue tracker and its issues into your GitHub space? What reasons can you think of for why the designers of GitHub decided that the issue tracker should not be copied into the fork?  "
},
{
  "id": "topic-development-environment",
  "level": "1",
  "url": "topic-development-environment.html",
  "type": "Section",
  "number": "3.6",
  "title": "Your Development Environment",
  "body": " Your Development Environment   You now have been assigned an issue to work on and yuu have created a fork of the upstream GitKit FarmData2 repository into your GitHub space.  To work on your issue you will need to setup your development environment . Your development environment is where you will create your clone of the repository, where you will edit files, and where you will use `git` commands to add your changes to to your clone and push those changes to your origin .  Many FOSS contributors will setup the development environment on their personal machines. Because student machines vary greatly the GitKit provides a browser based development environment, called a KitClient . This development environment runs in the cloud and you will access it using your web browser. This development environment includes standard development tools but also has a few features designed specifically to help you stay on track when completing the GitKit's hands-on exercises.    Starting the Development Environment   In this section you will learn how to start, configure, stop, and restart your development environment.      Your development environment will run in the cloud using a service called GitPod. Visit and login using the “Continue with GitHub” button and providing your GitHub username and password.     The following tasks will guide you through the process of starting and configuring your development environment.   Click this link to Launch KitClient in GitPod.   Choose \"Terminal\" as the \"Editor - Browser\" and \"Standard\" as the machine \"Class\" as shown here:  Creating the local development environment in GitPod.     Click the \"Continue\" button and wait for a few minutes until output that is similar to that shown here to appear:   ********************************************************************************* ********************************************************************************* Connect to the KitClient with your browser at: https:\/\/6901-hfossedu-kitclientlinux-kkguybiovbj.ws-us115.gitpod.io ********************************************************************************* *********************************************************************************    Click the link in your output that is similar to the one that is shown above.   Click the \"Connect\" button that appears in your browser.  After clicking the \"Connect\" button your development environment should open in the browser. It will appear similar to the window shown in .    The development environment.   The development environment window displaying a Linux desktop.       There are a few additional things that you can to to make working in your development environment more convenient.   Use the following steps to make the development environment fill and resize with your browser window.   Open the \"noVNC Menu\" by clicking the little tab at the left edge of the development environment window. shows the \"noVNC Menu\" opened.  Click \"Gear Icon\" to open the \"noVNC Settings\". shows the \"noVNC Settings\" open.  Set the \"Scaling Mode\" to \"Remote Resizing\".    To simplify pasting answers into this text, it is recommended that you open the text using the Firefox browser within the local development environment.  Copy and paste within the development environment can be done via an application's \"Edit\" menu, the \"right click\" menu, or keyboard shortcuts. This tutorial on Copy and Paste on Linux may be helpful if you are not a Linux user.  Copy and paste between your host machine and the development environment can be done, but it requires that you paste the content into the \"Clipboard\" on the \"noVNC Menu\".       Configuring the Git Client   Your development environment includes a Git client . The Git client is the tool that you will use to interact with Git repositories, such as the GitKit FarmData2 repository.  There are lots of different Git clients. Some are graphical and some use a text interface. These exercises, introduce you to Git using its text-based command line interface (CLI) . This is the most general way to interact with Git and will provide a conceptual foundation for using any other Git client that you might encounter.       You will interact with Git using its command line interface via a Terminal . Use the following steps to open a Terminal.   Click the \"Terminal\" icon at the bottom of the development environment window to open a new Terminal.   Enter your name at the prompt and press enter. This will customize the Terminal prompt for you.    You can learn about the git command by running it without any additional arguments.  Enter the command git into the Terminal.   Give a git command that will cause , git to display its version.    Use the output from to determine what flag to pass to git .   What version of the git command line client is installed in your development environment?    Use the command that you identified in to determine the git version.    Recall from class that Git repositories maintain a complete history of all changes, including who made each change. To do this, Git needs to know a little bit of information about you.  Git identifies the author of each change using two pieces of information: A name and an e-mail. For name, you might decide to your full name, or a nickname, or your GitHub username. Just keep in mind that whatever name you use will be associated with all of the changes you make. For e-mail, you can again use any valid e-mail associated with you.  The tasks in this exercise will guide you through the process of configuring the Git client in your development environment.   Use the following command to set the name that Git will associate with your changes:   git config --global user.name \"<name>\"   Replace \"<name>\" with the name you wish to use and be sure not to include the < and >.   Use the following command to set the e-mail that Git will associate with your changes:   git config --global user.email \"<e-mail>\"   Replace \"<e-mail>\" with the name you wish to use and be sure not to include the < and >.   Use the following command to display Git's global configuration including the two new settings you just added:   git config --global --list   Give the output of this command as your answer for this task.      Adjusting some GitPod Settings   There are a few GitPod settings that you can change that will make working with your development environment more convenient.      Use the following steps to adjust your GitPod settings.   Open your GitPod workspaces in a browser by visiting .   Choose \"Rename\" from the \"⋮\" (three vertical dots) menu to the right of the KitClient workspace and rename the workspace to be \"GitKit Dev Env\" or something else that you will remember easily.   Click the \"Pushpin\" icon, or choose \"Pin\" from the \"⋮\" (three vertical dots) menu to the right of the \"GitKit Dev Env\" workspace.  This will Pin your GitKit workspace making it easier to find, and will also prevent it from becoming inactive or being deleted if you don't use it for a few days.   Open your GitPod preferences in a browser by visiting .   Set your “Timeout” to 10 minutes. This will stop your development environment if you are away from it for more than 5 minutes. This will help to ensure that your free GitPod credits are not accidentally used up if you forget to stop your development environment.  If your development environment times out and stops you can restart it using the steps in .      Stopping your Development Environment   At some point you will complete this assignment or want to take a break and do other things. When you do so, you should stop your development environment.      You can stop your development environment using the following steps.   Open your GitPod workspaces in a browser by visiting    Choose \"Stop\" from the \"⋮\" (three vertical dots) menu to the right of the \"GitKit Dev Env\" workspace.      Re-starting your Development Environment   When you already have a GitKit development environment and want to continue working on the GitKit exercises, you will need to restart it.      Restart your development environment using the following steps.   Open your GitPod workspaces in a browser by visiting    Click the name of your \"GitKit Dev Env\" workspace or choose \"Open\" from the \"⋮\" (three vertical dots) menu to the right of its name.   Wait for the text similar to that in to appear and click the link.     "
},
{
  "id": "topic-dev-env-intro-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-dev-env-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "issue fork upstream "
},
{
  "id": "topic-dev-env-intro-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-dev-env-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "development environment clone push origin "
},
{
  "id": "topic-dev-env-intro-3",
  "level": "2",
  "url": "topic-development-environment.html#topic-dev-env-intro-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "KitClient "
},
{
  "id": "topic-development-environment-3-3-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-development-environment-3-3-2",
  "type": "Exercise",
  "number": "3.6.1.1",
  "title": "",
  "body": " Your development environment will run in the cloud using a service called GitPod. Visit and login using the “Continue with GitHub” button and providing your GitHub username and password.  "
},
{
  "id": "ex-create-kit-client",
  "level": "2",
  "url": "topic-development-environment.html#ex-create-kit-client",
  "type": "Exercise",
  "number": "3.6.1.2",
  "title": "",
  "body": " The following tasks will guide you through the process of starting and configuring your development environment.   Click this link to Launch KitClient in GitPod.   Choose \"Terminal\" as the \"Editor - Browser\" and \"Standard\" as the machine \"Class\" as shown here:  Creating the local development environment in GitPod.     Click the \"Continue\" button and wait for a few minutes until output that is similar to that shown here to appear:   ********************************************************************************* ********************************************************************************* Connect to the KitClient with your browser at: https:\/\/6901-hfossedu-kitclientlinux-kkguybiovbj.ws-us115.gitpod.io ********************************************************************************* *********************************************************************************    Click the link in your output that is similar to the one that is shown above.   Click the \"Connect\" button that appears in your browser.  After clicking the \"Connect\" button your development environment should open in the browser. It will appear similar to the window shown in .    The development environment.   The development environment window displaying a Linux desktop.     "
},
{
  "id": "ex-configure-kit-client-linux",
  "level": "2",
  "url": "topic-development-environment.html#ex-configure-kit-client-linux",
  "type": "Exercise",
  "number": "3.6.1.3",
  "title": "",
  "body": " There are a few additional things that you can to to make working in your development environment more convenient.   Use the following steps to make the development environment fill and resize with your browser window.   Open the \"noVNC Menu\" by clicking the little tab at the left edge of the development environment window. shows the \"noVNC Menu\" opened.  Click \"Gear Icon\" to open the \"noVNC Settings\". shows the \"noVNC Settings\" open.  Set the \"Scaling Mode\" to \"Remote Resizing\".    To simplify pasting answers into this text, it is recommended that you open the text using the Firefox browser within the local development environment.  Copy and paste within the development environment can be done via an application's \"Edit\" menu, the \"right click\" menu, or keyboard shortcuts. This tutorial on Copy and Paste on Linux may be helpful if you are not a Linux user.  Copy and paste between your host machine and the development environment can be done, but it requires that you paste the content into the \"Clipboard\" on the \"noVNC Menu\".  "
},
{
  "id": "topic-development-environment-4-2-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-development-environment-4-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git client "
},
{
  "id": "topic-development-environment-4-2-2",
  "level": "2",
  "url": "topic-development-environment.html#topic-development-environment-4-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "command line interface (CLI) "
},
{
  "id": "ex-open-terminal-linux",
  "level": "2",
  "url": "topic-development-environment.html#ex-open-terminal-linux",
  "type": "Exercise",
  "number": "3.6.2.1",
  "title": "",
  "body": " You will interact with Git using its command line interface via a Terminal . Use the following steps to open a Terminal.   Click the \"Terminal\" icon at the bottom of the development environment window to open a new Terminal.   Enter your name at the prompt and press enter. This will customize the Terminal prompt for you.  "
},
{
  "id": "ex-git-version",
  "level": "2",
  "url": "topic-development-environment.html#ex-git-version",
  "type": "Exercise",
  "number": "3.6.2.2",
  "title": "",
  "body": "You can learn about the git command by running it without any additional arguments.  Enter the command git into the Terminal.   Give a git command that will cause , git to display its version.    Use the output from to determine what flag to pass to git .   What version of the git command line client is installed in your development environment?    Use the command that you identified in to determine the git version.  "
},
{
  "id": "ex-configure-git",
  "level": "2",
  "url": "topic-development-environment.html#ex-configure-git",
  "type": "Exercise",
  "number": "3.6.2.3",
  "title": "",
  "body": " Recall from class that Git repositories maintain a complete history of all changes, including who made each change. To do this, Git needs to know a little bit of information about you.  Git identifies the author of each change using two pieces of information: A name and an e-mail. For name, you might decide to your full name, or a nickname, or your GitHub username. Just keep in mind that whatever name you use will be associated with all of the changes you make. For e-mail, you can again use any valid e-mail associated with you.  The tasks in this exercise will guide you through the process of configuring the Git client in your development environment.   Use the following command to set the name that Git will associate with your changes:   git config --global user.name \"<name>\"   Replace \"<name>\" with the name you wish to use and be sure not to include the < and >.   Use the following command to set the e-mail that Git will associate with your changes:   git config --global user.email \"<e-mail>\"   Replace \"<e-mail>\" with the name you wish to use and be sure not to include the < and >.   Use the following command to display Git's global configuration including the two new settings you just added:   git config --global --list   Give the output of this command as your answer for this task.  "
},
{
  "id": "ex-gitpod-settings",
  "level": "2",
  "url": "topic-development-environment.html#ex-gitpod-settings",
  "type": "Exercise",
  "number": "3.6.3.1",
  "title": "",
  "body": " Use the following steps to adjust your GitPod settings.   Open your GitPod workspaces in a browser by visiting .   Choose \"Rename\" from the \"⋮\" (three vertical dots) menu to the right of the KitClient workspace and rename the workspace to be \"GitKit Dev Env\" or something else that you will remember easily.   Click the \"Pushpin\" icon, or choose \"Pin\" from the \"⋮\" (three vertical dots) menu to the right of the \"GitKit Dev Env\" workspace.  This will Pin your GitKit workspace making it easier to find, and will also prevent it from becoming inactive or being deleted if you don't use it for a few days.   Open your GitPod preferences in a browser by visiting .   Set your “Timeout” to 10 minutes. This will stop your development environment if you are away from it for more than 5 minutes. This will help to ensure that your free GitPod credits are not accidentally used up if you forget to stop your development environment.  If your development environment times out and stops you can restart it using the steps in .  "
},
{
  "id": "ex-stopping-dev-env",
  "level": "2",
  "url": "topic-development-environment.html#ex-stopping-dev-env",
  "type": "Exercise",
  "number": "3.6.4.1",
  "title": "",
  "body": " You can stop your development environment using the following steps.   Open your GitPod workspaces in a browser by visiting    Choose \"Stop\" from the \"⋮\" (three vertical dots) menu to the right of the \"GitKit Dev Env\" workspace.  "
},
{
  "id": "topic-restarting-dev-env-2-1",
  "level": "2",
  "url": "topic-development-environment.html#topic-restarting-dev-env-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restart "
},
{
  "id": "ex-restarting-dev-env",
  "level": "2",
  "url": "topic-development-environment.html#ex-restarting-dev-env",
  "type": "Exercise",
  "number": "3.6.5.1",
  "title": "",
  "body": " Restart your development environment using the following steps.   Open your GitPod workspaces in a browser by visiting    Click the name of your \"GitKit Dev Env\" workspace or choose \"Open\" from the \"⋮\" (three vertical dots) menu to the right of its name.   Wait for the text similar to that in to appear and click the link.  "
},
{
  "id": "topic-cloning-your-origin",
  "level": "1",
  "url": "topic-cloning-your-origin.html",
  "type": "Section",
  "number": "3.7",
  "title": "Cloning Your Origin",
  "body": " Cloning Your Origin   The next step in the basic FOSS workflow is to ensure that you have a clone your origin repository in your development environment as shown in . Having a clone of your origin in your development environment will allow you to edit the files to fix the issue that you have been assigned and add those changes to the repository.    Cloning your origin repository from your GitHub space to your development environment.   Creating a clone of your origin repository creates a copy of it in your development environment. This copy is your local copy.         In order to clone a repository into your development environment you will need the clone URL for that repository. The steps in this exercise will help you find the clone URL for your origin repository.  Visit the GitHub page for your origin repository.   You can find the URl of your origin (i.e. your fork of the GitKit FarmData2 upstream) in your answer to .   Find and click the green \"Code\" button.  The green \"Code\" button in GitHub.     Open the \"Local\" and \"HTTPS\" tabs as shown here:  The GitHub dialog showing the clone URL.  The URL in the \"Clone using the web URL\" box is the clone URL that you will need to clone your origin repository.    Copy and paste the clone URL that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .     Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git .   Now that you have the clone URL for your origin repository, use the tasks in this exercise to clone your origin into your development environment.   Use the following command in the Terminal to clone your origin repository into your development environment:   git clone <clone URL>   Be sure to replace <clone URL> with the clone URL you found in .  Copy and paste the output from your command in as your answer here. Examine the output in . Into which directory in your development environment was your GitKit FarmData2 origin cloned?  Look for a line in the output that begins with \"Cloning into\".   Use the ls command to confirm that the directory you identified in now exists.  If it it does not, check the output in for error messages and try again.    The the output in should contain a message from the Kit-tty . What is the Kit-tty ?   The \"Kit-tty\" introduces itself using the line \"😺💻 Meow, Kit-tty here!\" Read the description of the \"Kit-tty\" that follows this line.   Be sure to keep your eyes open for messages from the Kit-tty as you work on the GitKit exercises. The Kit-tty will help you to stay on track and may save you a lot of time by preventing you from going down an incorrect path.   Use the final line of output in that begins with \"IMPORTANT\" to complete this exercise.   What does the \"IMPORTANT\" line ask you to do?     Close the terminal and open a new one.      Take the Kit-tty for a walk.    I'm sure the Kit-tty would like that, but its not the correct answer.      Use the git clone command.      Delete some unnecessary files.     If you haven't already, close the Terminal you are currently using and open a new one.  There is a technical reason for having to close your current Terminal and open a new. But the details for why this is necessary are unimportant.    In this exercise you will briefly explore the GitKit FarmData2 repository that you have cloned into your development environment.   Use the cd command in the Terminal to change into the directory containing your clone of the GitKit FarmData2 repository.   See for the name of the directory.   Use the ls -a command to display the names of all of the files and directories in your clone of the GitKit FarmData2 repository.  Compare these files and directories to those in your origin repository on GitHub. Are there any differences? If so describe them here.      In this exercise you will see that your clone keeps track of the location of your origin repository. It does this using a piece of information called a remote , which Git uses to store the URLs of remote repositories in the cloud (e.g. on GitHub).   Use the following command to ask Git to display a list of the remote repositories (i.e. those on GitHub) that it knows about:   git remote -v   Copy and paste the output of the git remote -v command here.   Examine the output in . How can you tell from that output that your clone knows about your origin?     The \"origin\" lines have a URL with your GitHub username in them.      There are lines that say \"origin\".      The \"origin\" lines have a URL that points to GitHub.      It is not possible to tell from the output.    Look closely at the \"origin\" URLs.  How is the origin remote that you see in the output of the command represented in ?     The orange dotted arrow from the clone to the origin repository.      The orange dotted arrow from the origin to the upstream repository.      The orange dotted arrow from the clone to the upstream repository.      The blue \"Clone\" arrow from the origin to the cloned repository.      The origin remote is not represented in the figure.    Which arrow would represent the clone knowing the location of the origin?  Which step of the basic FOSS workflow requires that your clone know the location of your origin repository?     Pull request      Fork      Clone      Edit      Push    Think about which step of the basic FOSS workflow will need to send information from the clone back to the origin.   "
},
{
  "id": "topic-cloning-your-origin-2-1",
  "level": "2",
  "url": "topic-cloning-your-origin.html#topic-cloning-your-origin-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clone origin "
},
{
  "id": "fig-basic-workflow-clone",
  "level": "2",
  "url": "topic-cloning-your-origin.html#fig-basic-workflow-clone",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": " Cloning your origin repository from your GitHub space to your development environment.   Creating a clone of your origin repository creates a copy of it in your development environment. This copy is your local copy.   "
},
{
  "id": "ex-find-clone-url-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-find-clone-url-linux",
  "type": "Exercise",
  "number": "3.7.1",
  "title": "",
  "body": "In order to clone a repository into your development environment you will need the clone URL for that repository. The steps in this exercise will help you find the clone URL for your origin repository.  Visit the GitHub page for your origin repository.   You can find the URl of your origin (i.e. your fork of the GitKit FarmData2 upstream) in your answer to .   Find and click the green \"Code\" button.  The green \"Code\" button in GitHub.     Open the \"Local\" and \"HTTPS\" tabs as shown here:  The GitHub dialog showing the clone URL.  The URL in the \"Clone using the web URL\" box is the clone URL that you will need to clone your origin repository.  "
},
{
  "id": "ex-clone-url-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-url-linux",
  "type": "Exercise",
  "number": "3.7.2",
  "title": "",
  "body": " Copy and paste the clone URL that you will use to clone your origin as your answer to this exercise.         Thank you.      It looks like you might be trying to use the upstream repository instead of your origin.      It looks like you might be trying to use the upstream repository instead of your origin.      The clone URL should have the format https:\/\/github.com\/yourGitHubUsername\/theRepoName.git .     Be sure you are using your GitHub origin repository (see ). This clone URL should contain your GitHub username and end in .git . "
},
{
  "id": "ex-clone-origin-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-clone-origin-linux",
  "type": "Exercise",
  "number": "3.7.3",
  "title": "",
  "body": " Now that you have the clone URL for your origin repository, use the tasks in this exercise to clone your origin into your development environment.   Use the following command in the Terminal to clone your origin repository into your development environment:   git clone <clone URL>   Be sure to replace <clone URL> with the clone URL you found in .  Copy and paste the output from your command in as your answer here. Examine the output in . Into which directory in your development environment was your GitKit FarmData2 origin cloned?  Look for a line in the output that begins with \"Cloning into\".   Use the ls command to confirm that the directory you identified in now exists.  If it it does not, check the output in for error messages and try again.  "
},
{
  "id": "ex-kit-tty-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-kit-tty-linux",
  "type": "Exercise",
  "number": "3.7.4",
  "title": "",
  "body": " The the output in should contain a message from the Kit-tty . What is the Kit-tty ?   The \"Kit-tty\" introduces itself using the line \"😺💻 Meow, Kit-tty here!\" Read the description of the \"Kit-tty\" that follows this line.  "
},
{
  "id": "ex-close-terminal-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-close-terminal-linux",
  "type": "Exercise",
  "number": "3.7.5",
  "title": "",
  "body": " Use the final line of output in that begins with \"IMPORTANT\" to complete this exercise.   What does the \"IMPORTANT\" line ask you to do?     Close the terminal and open a new one.      Take the Kit-tty for a walk.    I'm sure the Kit-tty would like that, but its not the correct answer.      Use the git clone command.      Delete some unnecessary files.     If you haven't already, close the Terminal you are currently using and open a new one.  There is a technical reason for having to close your current Terminal and open a new. But the details for why this is necessary are unimportant.  "
},
{
  "id": "ex-explore-clone-linux",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-explore-clone-linux",
  "type": "Exercise",
  "number": "3.7.6",
  "title": "",
  "body": " In this exercise you will briefly explore the GitKit FarmData2 repository that you have cloned into your development environment.   Use the cd command in the Terminal to change into the directory containing your clone of the GitKit FarmData2 repository.   See for the name of the directory.   Use the ls -a command to display the names of all of the files and directories in your clone of the GitKit FarmData2 repository.  Compare these files and directories to those in your origin repository on GitHub. Are there any differences? If so describe them here.  "
},
{
  "id": "ex-check-remotes",
  "level": "2",
  "url": "topic-cloning-your-origin.html#ex-check-remotes",
  "type": "Exercise",
  "number": "3.7.7",
  "title": "",
  "body": " In this exercise you will see that your clone keeps track of the location of your origin repository. It does this using a piece of information called a remote , which Git uses to store the URLs of remote repositories in the cloud (e.g. on GitHub).   Use the following command to ask Git to display a list of the remote repositories (i.e. those on GitHub) that it knows about:   git remote -v   Copy and paste the output of the git remote -v command here.   Examine the output in . How can you tell from that output that your clone knows about your origin?     The \"origin\" lines have a URL with your GitHub username in them.      There are lines that say \"origin\".      The \"origin\" lines have a URL that points to GitHub.      It is not possible to tell from the output.    Look closely at the \"origin\" URLs.  How is the origin remote that you see in the output of the command represented in ?     The orange dotted arrow from the clone to the origin repository.      The orange dotted arrow from the origin to the upstream repository.      The orange dotted arrow from the clone to the upstream repository.      The blue \"Clone\" arrow from the origin to the cloned repository.      The origin remote is not represented in the figure.    Which arrow would represent the clone knowing the location of the origin?  Which step of the basic FOSS workflow requires that your clone know the location of your origin repository?     Pull request      Fork      Clone      Edit      Push    Think about which step of the basic FOSS workflow will need to send information from the clone back to the origin. "
},
{
  "id": "topic-extra-practice-communities",
  "level": "1",
  "url": "topic-extra-practice-communities.html",
  "type": "Section",
  "number": "3.8",
  "title": "Extra Practice",
  "body": " Extra Practice   There are literally millions of FOSS projects with repositories on GitHub that you can fork and clone and contribute to. The exercises in this section will provide you with a little extra practice forking and cloning repositories.  Choose one of the projects in or search GitHub for one that sounds interesting to you and then complete the exercises below.    Some FOSS Projects that can be used for extra practice with forking and cloning repositories.      Project  Community Mission     OpenMRS    Aims to \"Improve healthcare delivery in resource-constrained environments by coordinating a global community that creates and sustains a robust, scalable, user-driven and open-source medical record platform.\"      Fineract    Aims to provide \"a reliable, robust, and affordable core banking solution for financial institutions offering services to the world’s 3 billion underbanked and unbanked.\"      Sahana Eden    Aims to provide an \"Open Source Humanitarian Platform which can be used to provide solutions for Disaster Management, Development, and Environmental Management sectors.\"      Oppia    Aims to provide \"A free, online learning platform to make quality education accessible for all.\"           Fork the repository for the project into your GitHub space. Give the full URL of your fork.         Thank you.      Please give the full URL of your fork on GitHub.     Review for information on how to fork a repository on GitHub.    Clone your origin (i.e. your fork) for the project you selected into your development environment.  Copy and paste the Git commands that you used and their output here.  Review for information about how to clone your origin repository.    Use the Git command that displays the remotes that your local repository knows about.  Copy and paste the Git commands that you used and their output here.  Review for information about how to display the remotes.   "
},
{
  "id": "table-foss-projects",
  "level": "2",
  "url": "topic-extra-practice-communities.html#table-foss-projects",
  "type": "Table",
  "number": "3.8.1",
  "title": "Some FOSS Projects that can be used for extra practice with forking and cloning repositories.",
  "body": " Some FOSS Projects that can be used for extra practice with forking and cloning repositories.      Project  Community Mission     OpenMRS    Aims to \"Improve healthcare delivery in resource-constrained environments by coordinating a global community that creates and sustains a robust, scalable, user-driven and open-source medical record platform.\"      Fineract    Aims to provide \"a reliable, robust, and affordable core banking solution for financial institutions offering services to the world’s 3 billion underbanked and unbanked.\"      Sahana Eden    Aims to provide an \"Open Source Humanitarian Platform which can be used to provide solutions for Disaster Management, Development, and Environmental Management sectors.\"      Oppia    Aims to provide \"A free, online learning platform to make quality education accessible for all.\"     "
},
{
  "id": "ex-extra-practice-fork",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-fork",
  "type": "Exercise",
  "number": "3.8.1",
  "title": "",
  "body": " Fork the repository for the project into your GitHub space. Give the full URL of your fork.         Thank you.      Please give the full URL of your fork on GitHub.     Review for information on how to fork a repository on GitHub. "
},
{
  "id": "ex-extra-practice-clone-linux",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-clone-linux",
  "type": "Exercise",
  "number": "3.8.2",
  "title": "",
  "body": " Clone your origin (i.e. your fork) for the project you selected into your development environment.  Copy and paste the Git commands that you used and their output here.  Review for information about how to clone your origin repository. "
},
{
  "id": "ex-extra-practice-remotes",
  "level": "2",
  "url": "topic-extra-practice-communities.html#ex-extra-practice-remotes",
  "type": "Exercise",
  "number": "3.8.3",
  "title": "",
  "body": " Use the Git command that displays the remotes that your local repository knows about.  Copy and paste the Git commands that you used and their output here.  Review for information about how to display the remotes. "
},
{
  "id": "topic-git-commands-summary-communities",
  "level": "1",
  "url": "topic-git-commands-summary-communities.html",
  "type": "Section",
  "number": "3.9",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. To help speed that process, this section provides a chance to collect and review the Git commands that were used in this chapter.      Match the tasks on the right with the appropriate git command listed on the left.     git config   Display Git settings.     git remote -v   List your remote repos.     git clone <clone URL>   Create a copy of the origin repository in your development environment.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-communities",
  "level": "2",
  "url": "topic-git-commands-summary-communities.html#ex-git-commands-summary-communities",
  "type": "Exercise",
  "number": "3.9.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git config   Display Git settings.     git remote -v   List your remote repos.     git clone <clone URL>   Create a copy of the origin repository in your development environment.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-gitkit-feedback-communities",
  "level": "1",
  "url": "topic-gitkit-feedback-communities.html",
  "type": "Section",
  "number": "3.10",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve and scope this chapter for future semesters please consider providing the following feedback.       Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours       Please comment on any particular challenges you faced in completing this chapter.    "
},
{
  "id": "ex-gitkit-feedback-time-communities",
  "level": "2",
  "url": "topic-gitkit-feedback-communities.html#ex-gitkit-feedback-time-communities",
  "type": "Exercise",
  "number": "3.10.1",
  "title": "",
  "body": "  Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours     "
},
{
  "id": "ex-gitkit-feedback-challenge-communities",
  "level": "2",
  "url": "topic-gitkit-feedback-communities.html#ex-gitkit-feedback-challenge-communities",
  "type": "Exercise",
  "number": "3.10.2",
  "title": "",
  "body": " Please comment on any particular challenges you faced in completing this chapter.  "
},
{
  "id": "topic-exploring-your-local-repository",
  "level": "1",
  "url": "topic-exploring-your-local-repository.html",
  "type": "Section",
  "number": "4.1",
  "title": "Exploring Your Local Repository",
  "body": " Exploring Your Local Repository   Like the last exercise, you will be working within the KitClient for this exercise.    Current State:    shows where you should be based upon the exercises in the previous chapter. You will have forked the upstream FarmData2 repository into your own GitHub account. You will then have cloned your fork into a local repository on your computer. Your local files at this point are a copy that reflects the current state of the upstream main branch.  Let’s explore this state just a little before making the changes that address the issue that you have claimed.    Fork, Clone and Local Files.   Cloud image of fork, clone, and local files.       Restart your KitClient based on the instructions in .  The git log command provides a way to see information about the history of the project. It will display information about the most recent commits that have been made to the repository. By default, git log displays information about the 10 most recent commits. You can append a -2 (or -5) to show only the most recent 2 (or 5) commits.   Ensure that you are in your cloned repo (i.e. the GitKit-FarmData2 directory is your working directory). Then use the git log command to display the information about the 3 most recent commits. (If you don't see more than two recent commits, press \"return\" or \"spacebar\" to see more; when you are done, press \"q\" to quit.)  A line that begins with \"commit\" appears at the start of the information about each commit. That line also contains a long string of numbers and letters. That string is called the SHA (secure hashing algorithm) hash. It is a string of digits (0-9) and letters (a-f) known as a hexadecimal number and it provides a unique identifier for the commit. Following the SHA hash is information about the author, the date the commit was made and the commit message that was used to describe the changes.  Use the output from the git log command to answer the following questions about the project history:   What is the SHA of the most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   What is the date of the most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   Who is the author of the third most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   What is the purpose of the fourth most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint    "
},
{
  "id": "topic-exploring-your-local-repository-3",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#topic-exploring-your-local-repository-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Current State: "
},
{
  "id": "fig-fork-and-clone-local",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#fig-fork-and-clone-local",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " Fork, Clone and Local Files.   Cloud image of fork, clone, and local files.   "
},
{
  "id": "ex-restarting-kitclient",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-restarting-kitclient",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "Restart your KitClient based on the instructions in . "
},
{
  "id": "ex-understanding-project-history",
  "level": "2",
  "url": "topic-exploring-your-local-repository.html#ex-understanding-project-history",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " Ensure that you are in your cloned repo (i.e. the GitKit-FarmData2 directory is your working directory). Then use the git log command to display the information about the 3 most recent commits. (If you don't see more than two recent commits, press \"return\" or \"spacebar\" to see more; when you are done, press \"q\" to quit.)  A line that begins with \"commit\" appears at the start of the information about each commit. That line also contains a long string of numbers and letters. That string is called the SHA (secure hashing algorithm) hash. It is a string of digits (0-9) and letters (a-f) known as a hexadecimal number and it provides a unique identifier for the commit. Following the SHA hash is information about the author, the date the commit was made and the commit message that was used to describe the changes.  Use the output from the git log command to answer the following questions about the project history:   What is the SHA of the most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   What is the date of the most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   Who is the author of the third most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint   What is the purpose of the fourth most recent commit?     Choice 1    Feedback for choice 1      Choice 2    Feedback for choice 2      Choice 3    Feedback for choice 3      Choice 4    Feedback for choice 4     Some hint   Another hint  "
},
{
  "id": "topic-creating-a-feature-branch",
  "level": "1",
  "url": "topic-creating-a-feature-branch.html",
  "type": "Section",
  "number": "4.2",
  "title": "Creating a Feature Branch",
  "body": " Creating a Feature Branch   When you set out to make changes to the project you will do so by working on a feature branch. illustrates the process of creating a feature branch. The exercises in this section will walk you through the process of creating a feature branch on which you will fix the issue that you claimed in .     Create feature branch.   Cloud image of origin, upstream, and local branches.        The git status command provides the current status of your local repository. Use the git status command to see the current status of your local GitKit-FarmData2 repository.   What part of the output tells you which branch is currently active in your repository?    Your output should contain the text “Your branch is up to date with 'origin\/main'.” What do you think it means that your branch is “up to date”?    Your output should contain the text “nothing to commit, working tree clean.” What do you think it means that you have “nothing to commit.” Hint: when would you have something to commit? This is the opposite of that!     The git branch <name> command creates a new branch with the given name . When creating a branch, you should give it a short but descriptive name (e.g. FixTypoInReadme ). Note: name may not have spaces, so you can use - (dashes) or CammelCaseText to divide words in your branch names.    Create a new feature branch with a descriptive name that you will use to fix the issue that you claimed. Remember not to include the < > when writing your own command. Type the command you entered below.     Use the git status command again now. Does creating a new branch with the git branch command make your new branch the active branch?    git branch [name] only creates the branch.   How can you tell from the output in (b) if it switched you to the new branch?     "
},
{
  "id": "fig-create-feature-branch",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#fig-create-feature-branch",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": " Create feature branch.   Cloud image of origin, upstream, and local branches.   "
},
{
  "id": "ex-git-status-command",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#ex-git-status-command",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": " The git status command provides the current status of your local repository. Use the git status command to see the current status of your local GitKit-FarmData2 repository.   What part of the output tells you which branch is currently active in your repository?    Your output should contain the text “Your branch is up to date with 'origin\/main'.” What do you think it means that your branch is “up to date”?    Your output should contain the text “nothing to commit, working tree clean.” What do you think it means that you have “nothing to commit.” Hint: when would you have something to commit? This is the opposite of that!   "
},
{
  "id": "ex-creating-a-branch",
  "level": "2",
  "url": "topic-creating-a-feature-branch.html#ex-creating-a-branch",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": " The git branch <name> command creates a new branch with the given name . When creating a branch, you should give it a short but descriptive name (e.g. FixTypoInReadme ). Note: name may not have spaces, so you can use - (dashes) or CammelCaseText to divide words in your branch names.    Create a new feature branch with a descriptive name that you will use to fix the issue that you claimed. Remember not to include the < > when writing your own command. Type the command you entered below.     Use the git status command again now. Does creating a new branch with the git branch command make your new branch the active branch?    git branch [name] only creates the branch.   How can you tell from the output in (b) if it switched you to the new branch?   "
},
{
  "id": "topic-switching-branches",
  "level": "1",
  "url": "topic-switching-branches.html",
  "type": "Section",
  "number": "4.3",
  "title": "Switching Branches",
  "body": " Switching Branches   In the previous section you learned how to create a branch. In this section you will learn more about why branching is important and how to switch between existing branches.      As you saw in the previous section, the git branch command creates a branch (among other uses), but it does not change your active branch. The git switch <name> command switches (i.e. changes) the active branch.   What command that will change your active branch to the new feature branch that you created in the previous section?    Use the git status command again now. What part of the output confirms that your feature branch is now the active branch?    Placeholder for additional exercises on switching branches.     "
},
{
  "id": "ex-switching-branches",
  "level": "2",
  "url": "topic-switching-branches.html#ex-switching-branches",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": " As you saw in the previous section, the git branch command creates a branch (among other uses), but it does not change your active branch. The git switch <name> command switches (i.e. changes) the active branch.   What command that will change your active branch to the new feature branch that you created in the previous section?    Use the git status command again now. What part of the output confirms that your feature branch is now the active branch?    Placeholder for additional exercises on switching branches.   "
},
{
  "id": "topic-editing-local-files",
  "level": "1",
  "url": "topic-editing-local-files.html",
  "type": "Section",
  "number": "4.4",
  "title": "Editing Local Files",
  "body": " Editing Local Files   In the last two sections you created a feature branch and switched to that branch. In this section you will edit your local files to fix the issue that you claimed in the issue tracker.      In order to make the changes to the appropriate local file, you will need to review the issue that you claimed.   Provide a link to the issue that you claimed in the issue tracker.    In which file will you be making changes to address your issue? Hint: Look at the text of your issue in the issue tracker.    Use a text editor to modify the file you identified in (b) so that the issue you claimed has been fixed. Be sure to save your changes.    illustrates the current situation where your Local Files have been modified. In the Local Files in your feature branch were drawn in green. This reflected that they were, at that time, an exact copy of the last commit on the main branch, which was also drawn in green. Here Local Files are drawn in blue to indicate that they have been changed as compared to the final commit in the main branch, which is still green.    Editing Local Files on a Feature Branch.   Editing local files on a feature branch.      The git status command can now be used to check that your changes have been made. Run the git status command now.   What two things does the output tell you about the file that you edited? If you see the message “nothing to commit, working tree clean,” it means that your edits in the previous exercise were not saved. NOTE: may want to change this so that it asks which files are staged, untracked, etc. Go back and save your edits and then issue the git status command again before describing the two things that the output tells you.     The git diff command provides another way to examine or confirm the changes you have been making. Note diff is just short for difference , and is called this because it is used to show differences. By default the git diff command will show you any changes that have been made to your local files as compared to the version in the most recent commit in the active branch. Run the git diff command now.   How is the change that you made indicated in the output from git diff ?     "
},
{
  "id": "ex-locate-claimed -issue",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-locate-claimed -issue",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": " In order to make the changes to the appropriate local file, you will need to review the issue that you claimed.   Provide a link to the issue that you claimed in the issue tracker.    In which file will you be making changes to address your issue? Hint: Look at the text of your issue in the issue tracker.    Use a text editor to modify the file you identified in (b) so that the issue you claimed has been fixed. Be sure to save your changes.  "
},
{
  "id": "fig-edit-local-files-on-feature-branch",
  "level": "2",
  "url": "topic-editing-local-files.html#fig-edit-local-files-on-feature-branch",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " Editing Local Files on a Feature Branch.   Editing local files on a feature branch.   "
},
{
  "id": "ex-verify-changes",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-verify-changes",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": " The git status command can now be used to check that your changes have been made. Run the git status command now.   What two things does the output tell you about the file that you edited? If you see the message “nothing to commit, working tree clean,” it means that your edits in the previous exercise were not saved. NOTE: may want to change this so that it asks which files are staged, untracked, etc. Go back and save your edits and then issue the git status command again before describing the two things that the output tells you.   "
},
{
  "id": "ex-verify-changes-with-diff",
  "level": "2",
  "url": "topic-editing-local-files.html#ex-verify-changes-with-diff",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": " The git diff command provides another way to examine or confirm the changes you have been making. Note diff is just short for difference , and is called this because it is used to show differences. By default the git diff command will show you any changes that have been made to your local files as compared to the version in the most recent commit in the active branch. Run the git diff command now.   How is the change that you made indicated in the output from git diff ?   "
},
{
  "id": "topic-staging-changes",
  "level": "1",
  "url": "topic-staging-changes.html",
  "type": "Section",
  "number": "4.5",
  "title": "Staging Changes",
  "body": " Staging Changes   As you saw in the previous section, you now have modifications to your local files that have not been staged. NOTE: need a new image for staging only. The process of staging changes (i.e. adding the files to the stage) is illustrated in . Recall from that the blue dot in Local Files represents the changes you made. In , those changes are staged and will be made into a commit that is added to your feature branch in the next section.     Staging Changes and Committing.   Staging Changes and Committing.        The exercises in this section will walk you through staging the changes you made to your Local Files .    The git stage <file> command adds the indicated file to the stage, preparing it to become a part of the next commit. Use the git stage <file> command now to stage the file that you edited.   Provide the command you entered.    Note that git also has a git add command that is equivalent to git stage . So, you can add files to the stage using either git stage or git add . These activities will use git stage because it seems more descriptive of what is happening. However, you are likely to see git add used in other resources, so it is worth knowing that they are equivalent. Provide the git add command that would be equivalent to your answer in (a).    Now run the git status command again. Compare your output in (a) to the output in . What two changes have occurred that reflect that your changes have been staged? NOTE: like previous question, may want to change this so that it asks which files are staged, untracked, etc. Then ask a question like \"How do you know that your changes have been staged?\"      "
},
{
  "id": "topic-staging-changes-2-1",
  "level": "2",
  "url": "topic-staging-changes.html#topic-staging-changes-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "NOTE: need a new image for staging only. "
},
{
  "id": "fig-staging-changes-and-committing",
  "level": "2",
  "url": "topic-staging-changes.html#fig-staging-changes-and-committing",
  "type": "Figure",
  "number": "4.5.1",
  "title": "",
  "body": " Staging Changes and Committing.   Staging Changes and Committing.   "
},
{
  "id": "ex-staging-changes",
  "level": "2",
  "url": "topic-staging-changes.html#ex-staging-changes",
  "type": "Exercise",
  "number": "4.5.1",
  "title": "",
  "body": " The git stage <file> command adds the indicated file to the stage, preparing it to become a part of the next commit. Use the git stage <file> command now to stage the file that you edited.   Provide the command you entered.    Note that git also has a git add command that is equivalent to git stage . So, you can add files to the stage using either git stage or git add . These activities will use git stage because it seems more descriptive of what is happening. However, you are likely to see git add used in other resources, so it is worth knowing that they are equivalent. Provide the git add command that would be equivalent to your answer in (a).    Now run the git status command again. Compare your output in (a) to the output in . What two changes have occurred that reflect that your changes have been staged? NOTE: like previous question, may want to change this so that it asks which files are staged, untracked, etc. Then ask a question like \"How do you know that your changes have been staged?\"    "
},
{
  "id": "topic-committing-to-your-local-repository",
  "level": "1",
  "url": "topic-committing-to-your-local-repository.html",
  "type": "Section",
  "number": "4.6",
  "title": "Committing to Your Local Repository",
  "body": " Committing to Your Local Repository   In this section you will do the work necessary to commit the changes made to your Local Files to your local repository. NOTE: need reference to new image for commit only.       As you saw earlier when looking at the output of git log , each commit has a commit message that briefly describes the changes that are contained in the commit. These messages should be concise but meaningful without requiring the reader to refer to the ticket in the issue tracker. A future reader of the git log output should be able to obtain an idea of the changes you have made and why you made them by reading your commit messages.  For each of the following issues, order the given commit messages from best (listed first) to worst (listed last).   Issue: The documentation says “bug” instead of “bugs” where plural is needed.    Pluralize bug (i.e. bugs) for clarity    Fix issue #123    Fix typo    Issue: The harvesting log should be able to track insect presence.    Add tracking for insects in harvesting logs    Insect tracking added    Extend harvest logs     The git commit -m \"<message>\" command commits all of the staged files to the currently active branch with the specified commit message. Use the git commit command to commit your staged changes to your local repository with a meaningful commit message.   Provide the command you entered.    Now use the git status command again. Compare your output to the output in . What two changes have occurred that reflect that your changes have been staged? NOTE: like previous question, may want to change this so that it asks which files are staged, untracked, etc. Then ask a question like \"How do you know your changes have been committed?     Use the git log command to show the 3 most recent commits to your branch. How is this output different from what you observed in Question #1? Briefly explain why? Note: Question #1 is now a multiple choice question. Maybe there should be multiple choice questions here that are similar (showing that the new commit appears in the log).     Switch to your main branch. What command did you use?    Does the output of a git log command now show the information about the commit you made? Briefly explain why or why not?     "
},
{
  "id": "topic-committing-to-your-local-repository-2-1",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#topic-committing-to-your-local-repository-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "NOTE: need reference to new image for commit only. "
},
{
  "id": "ex-meaningful-commit-messages",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-meaningful-commit-messages",
  "type": "Exercise",
  "number": "4.6.1",
  "title": "",
  "body": " As you saw earlier when looking at the output of git log , each commit has a commit message that briefly describes the changes that are contained in the commit. These messages should be concise but meaningful without requiring the reader to refer to the ticket in the issue tracker. A future reader of the git log output should be able to obtain an idea of the changes you have made and why you made them by reading your commit messages.  For each of the following issues, order the given commit messages from best (listed first) to worst (listed last).   Issue: The documentation says “bug” instead of “bugs” where plural is needed.    Pluralize bug (i.e. bugs) for clarity    Fix issue #123    Fix typo    Issue: The harvesting log should be able to track insect presence.    Add tracking for insects in harvesting logs    Insect tracking added    Extend harvest logs   "
},
{
  "id": "ex-committing-changes",
  "level": "2",
  "url": "topic-committing-to-your-local-repository.html#ex-committing-changes",
  "type": "Exercise",
  "number": "4.6.2",
  "title": "",
  "body": " The git commit -m \"<message>\" command commits all of the staged files to the currently active branch with the specified commit message. Use the git commit command to commit your staged changes to your local repository with a meaningful commit message.   Provide the command you entered.    Now use the git status command again. Compare your output to the output in . What two changes have occurred that reflect that your changes have been staged? NOTE: like previous question, may want to change this so that it asks which files are staged, untracked, etc. Then ask a question like \"How do you know your changes have been committed?     Use the git log command to show the 3 most recent commits to your branch. How is this output different from what you observed in Question #1? Briefly explain why? Note: Question #1 is now a multiple choice question. Maybe there should be multiple choice questions here that are similar (showing that the new commit appears in the log).     Switch to your main branch. What command did you use?    Does the output of a git log command now show the information about the commit you made? Briefly explain why or why not?   "
},
{
  "id": "topic-pushing-a-branch-to-your-origin",
  "level": "1",
  "url": "topic-pushing-a-branch-to-your-origin.html",
  "type": "Section",
  "number": "4.7",
  "title": "Pushing a Branch to Your Origin",
  "body": " Pushing a Branch to Your Origin   You have made the changes necessary to address the issue you were assigned, and you are now ready to upstream those changes. In order to do that, the first step is to get the changes you have made into GitHub so that the upstream maintainers can be told about them.     As shown in , this is done by pushing your feature branch to your origin repository. More generally, pushing a branch, copies it from a local repo to a remote repo.    Push Feature Branch to Origin.   Cloud image of the feature branch to be merged into your origin repository.      The git branch -l (lower case L, not one) command lists all of the branches that exist in your local repository. What branches are in your local repository?     branch name      branch name      branch name      branch name      branch name     HINT HERE    Use your browser to look at your origin repository on GitHub.   What branches appear in your origin repository on GitHub?     branch name      branch name      branch name      branch name      branch name     HINT HERE   Why is there a difference between the branches in your origin repo and your local repo?    Getting a Personal Access Token:   Before you will be able to push your feature branch to GitHub you will have to get a Personal Access Token (PAT) from GitHub. A PAT is like a password but has some security benefits. In particular, you can have multiple different PATs. Each one can have different limits on what can be done with it and each one can be revoked individually without affecting the others.  When interacting with GitHub using the git CLI (e.g. when pushing a branch), GitHub requires that you use a PAT for authentication instead of your password.   Follow GitHub's instructions for creating a (classic) personal access token: Creating a Personal Access Token (classic) .  When doing so be sure to:   Choose “repo” for the “scopes and permissions.”    Be sure to copy and paste your PAT somewhere safe – maybe e-mail it to yourself. You will not be able to retrieve it again after you leave the page.     Note: Typing or even copy and pasting your PAT every time it is needed can be a hassle. To help, the git CLI provides what is known as the credential helper . The git CLI in the KitClient has configured the credential helper so that your PAT will be stored when you enter it the first time. It will then be used automatically for future commands. If you are curious, you can learn more about the credential helper here: Storing Git Credentials with Git Credential Helper .    Pushing your Feature Branch:    The git push <remote repo name> <branch> command will push the specified branch of your local repo to the specified remote repo (i.e. on GitHub).  Use a command that will push your feature branch from your local repo to your origin repo on GitHub.  Note: You can use the name of the remote repo, so you do not need to use the full URL. You will also need to paste your PAT as the password when it is requested.    The output from should not contain any error messages. The last few lines should also give you some indication that that your push was successful. Visit your origin repository on GitHub and check that the branch was pushed.    "
},
{
  "id": "fig-pushing-feature-branch",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#fig-pushing-feature-branch",
  "type": "Figure",
  "number": "4.7.1",
  "title": "",
  "body": " Push Feature Branch to Origin.   Cloud image of the feature branch to be merged into your origin repository.   "
},
{
  "id": "ex-list-branches",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-list-branches",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": " The git branch -l (lower case L, not one) command lists all of the branches that exist in your local repository. What branches are in your local repository?     branch name      branch name      branch name      branch name      branch name     HINT HERE  "
},
{
  "id": "ex-branch-diff",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-branch-diff",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "",
  "body": " Use your browser to look at your origin repository on GitHub.   What branches appear in your origin repository on GitHub?     branch name      branch name      branch name      branch name      branch name     HINT HERE   Why is there a difference between the branches in your origin repo and your local repo?  "
},
{
  "id": "topic-pushing-a-branch-to-your-origin-3-6",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#topic-pushing-a-branch-to-your-origin-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Getting a Personal Access Token: "
},
{
  "id": "topic-pushing-a-branch-to-your-origin-3-7",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#topic-pushing-a-branch-to-your-origin-3-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Personal Access Token (PAT) "
},
{
  "id": "ex-getting-pat",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-getting-pat",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "",
  "body": " Follow GitHub's instructions for creating a (classic) personal access token: Creating a Personal Access Token (classic) .  When doing so be sure to:   Choose “repo” for the “scopes and permissions.”    Be sure to copy and paste your PAT somewhere safe – maybe e-mail it to yourself. You will not be able to retrieve it again after you leave the page.     Note: Typing or even copy and pasting your PAT every time it is needed can be a hassle. To help, the git CLI provides what is known as the credential helper . The git CLI in the KitClient has configured the credential helper so that your PAT will be stored when you enter it the first time. It will then be used automatically for future commands. If you are curious, you can learn more about the credential helper here: Storing Git Credentials with Git Credential Helper .  "
},
{
  "id": "topic-pushing-a-branch-to-your-origin-3-10",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#topic-pushing-a-branch-to-your-origin-3-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pushing your Feature Branch: "
},
{
  "id": "ex-push-branch-linux",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-push-branch-linux",
  "type": "Exercise",
  "number": "4.7.4",
  "title": "",
  "body": " The git push <remote repo name> <branch> command will push the specified branch of your local repo to the specified remote repo (i.e. on GitHub).  Use a command that will push your feature branch from your local repo to your origin repo on GitHub.  Note: You can use the name of the remote repo, so you do not need to use the full URL. You will also need to paste your PAT as the password when it is requested.  "
},
{
  "id": "ex-push-error-linux",
  "level": "2",
  "url": "topic-pushing-a-branch-to-your-origin.html#ex-push-error-linux",
  "type": "Exercise",
  "number": "4.7.5",
  "title": "",
  "body": " The output from should not contain any error messages. The last few lines should also give you some indication that that your push was successful. Visit your origin repository on GitHub and check that the branch was pushed.  "
},
{
  "id": "topic-creating-a-pull-request",
  "level": "1",
  "url": "topic-creating-a-pull-request.html",
  "type": "Section",
  "number": "4.8",
  "title": "Creating a Pull Request",
  "body": " Creating a Pull Request   A pull request is the mechanism by which you ask the maintainers of a project to consider merging your changes into the upstream main branch.     As shown in , a pull request is made from your origin repository, which must contain your feature branch, to the upstream repository. In the last section, you pushed your feature branch to your origin repository, so you are now ready to make a pull request.    Making a Pull Request.   Cloud image of the state of the repository when making a pull request.      There are a number of different ways to make a pull request in GitHub. In general, they are all equivalent and it won’t matter which one you use. The following steps will walk you through one of those ways.   When you first push a feature branch GitHub assumes that you are likely to make a pull request for it. To make this easy it will automatically display a big green “Compare & pull request” button at the top of the page for your origin repo.    GitHub compare and pull request button image.    Click that button. You will use the page that appears to create your pull request.   A gray bar similar to the one shown below should appear at the top of the page.    Image of the GitHub bar showing the repository and branch for the pull request.    This bar specifies the repositories and branches that are involved in the pull request. That is, they indicate which branch you are requesting to be pulled from which repository and to which branch in which repository you would like it to be merged.  Note that the specific information that you see in your browser will be different than what is shown above.  The questions in this exercise will help you to better understand what this information means.   Copy the URLs from the gray bar into the textboxes below.   Base Repository   Head Repository   The terms “Base Repository” and “Head Repository” in are generic labels that GitHub uses for the two repositories that are involved in the pull request. Often, and in our case, these two repos will be your origin repository and the project's upstream repository. Examine the URL's from and match the right hand column with either head repository or base repository to indicate which term refers to your origin and which refers to the upstream.     head repository  your origin repository     base repository  the upstream    HINT HERE   The information in the gray bar also indicates the branches involved in the pull request. It uses the generic labels of base and compare for these branches. Match the right hand column with either base branch or compare branch to indicate which is “pulled from” or “merged onto”.     base branch  merged into     compare branch  pulled from    HINT HERE    To finish making your pull request (PR) you will need to add some additional details. Complete the following steps in your browser to create your PR. You do not need to give individual answers for each step here. The details you provide will become a part of your pull request and your instructor will see them on GitHub.   Give your PR a descriptive title – a similar idea to using meaningful commit messages.   Replace the <add description> in the body of the PR with a longer description of your changes.   If a PR fixes an issue, which yours does, then you should include a line in the body of the PR that says exactly: Fixes #123 or exactly: Closes #123 .  When a PR with one of these lines is merged into the project the listed ticket from the issue tracker (e.g. 123 in this example) will be closed automatically. Including these lines is very helpful to the project maintainers because then they do not have to remember to go close the associated ticket each time they merge a pull request.  Add a line to the body of the PR that will close the issue that you fixed.  The #123 part of the line should automatically become a link to the ticket. If it does not, check to be sure you have entered the information exactly as shown above.   Check that status of your PR and confirm that it can be merged automatically.   Click the green button to create the Pull Request.    GitHub create pull request button image.      Go to the upstream repository on GitHub and open the “Pull Requests” tab:    GitHub pull requests tab image.    Find your Pull Request and give a link to it here.    On your pull request page there will be “Files Changed” tab:    GitHub pull requests tab image.    Open that tab. At the bottom of that page will be a diff that shows the changes that you have made. This diff shows both the upstream version of the code and your version of the code. It also indicates the changes you have made. The project maintainers will often use this diff to see the details of what you have changed.  Briefly describe how the diff indicates the changes that you made.    "
},
{
  "id": "topic-creating-a-pull-request-2-1",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#topic-creating-a-pull-request-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pull request "
},
{
  "id": "fig-pull-request",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#fig-pull-request",
  "type": "Figure",
  "number": "4.8.1",
  "title": "",
  "body": " Making a Pull Request.   Cloud image of the state of the repository when making a pull request.   "
},
{
  "id": "ex-pull-request",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request",
  "type": "Exercise",
  "number": "4.8.1",
  "title": "",
  "body": " There are a number of different ways to make a pull request in GitHub. In general, they are all equivalent and it won’t matter which one you use. The following steps will walk you through one of those ways.   When you first push a feature branch GitHub assumes that you are likely to make a pull request for it. To make this easy it will automatically display a big green “Compare & pull request” button at the top of the page for your origin repo.    GitHub compare and pull request button image.    Click that button. You will use the page that appears to create your pull request.   A gray bar similar to the one shown below should appear at the top of the page.    Image of the GitHub bar showing the repository and branch for the pull request.    This bar specifies the repositories and branches that are involved in the pull request. That is, they indicate which branch you are requesting to be pulled from which repository and to which branch in which repository you would like it to be merged.  Note that the specific information that you see in your browser will be different than what is shown above.  The questions in this exercise will help you to better understand what this information means.   Copy the URLs from the gray bar into the textboxes below.   Base Repository   Head Repository   The terms “Base Repository” and “Head Repository” in are generic labels that GitHub uses for the two repositories that are involved in the pull request. Often, and in our case, these two repos will be your origin repository and the project's upstream repository. Examine the URL's from and match the right hand column with either head repository or base repository to indicate which term refers to your origin and which refers to the upstream.     head repository  your origin repository     base repository  the upstream    HINT HERE   The information in the gray bar also indicates the branches involved in the pull request. It uses the generic labels of base and compare for these branches. Match the right hand column with either base branch or compare branch to indicate which is “pulled from” or “merged onto”.     base branch  merged into     compare branch  pulled from    HINT HERE  "
},
{
  "id": "ex-pull-request-finish",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-finish",
  "type": "Exercise",
  "number": "4.8.2",
  "title": "",
  "body": " To finish making your pull request (PR) you will need to add some additional details. Complete the following steps in your browser to create your PR. You do not need to give individual answers for each step here. The details you provide will become a part of your pull request and your instructor will see them on GitHub.   Give your PR a descriptive title – a similar idea to using meaningful commit messages.   Replace the <add description> in the body of the PR with a longer description of your changes.   If a PR fixes an issue, which yours does, then you should include a line in the body of the PR that says exactly: Fixes #123 or exactly: Closes #123 .  When a PR with one of these lines is merged into the project the listed ticket from the issue tracker (e.g. 123 in this example) will be closed automatically. Including these lines is very helpful to the project maintainers because then they do not have to remember to go close the associated ticket each time they merge a pull request.  Add a line to the body of the PR that will close the issue that you fixed.  The #123 part of the line should automatically become a link to the ticket. If it does not, check to be sure you have entered the information exactly as shown above.   Check that status of your PR and confirm that it can be merged automatically.   Click the green button to create the Pull Request.    GitHub create pull request button image.    "
},
{
  "id": "ex-pull-request-find",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-find",
  "type": "Exercise",
  "number": "4.8.3",
  "title": "",
  "body": " Go to the upstream repository on GitHub and open the “Pull Requests” tab:    GitHub pull requests tab image.    Find your Pull Request and give a link to it here.  "
},
{
  "id": "ex-pull-request-files",
  "level": "2",
  "url": "topic-creating-a-pull-request.html#ex-pull-request-files",
  "type": "Exercise",
  "number": "4.8.4",
  "title": "",
  "body": " On your pull request page there will be “Files Changed” tab:    GitHub pull requests tab image.    Open that tab. At the bottom of that page will be a diff that shows the changes that you have made. This diff shows both the upstream version of the code and your version of the code. It also indicates the changes you have made. The project maintainers will often use this diff to see the details of what you have changed.  Briefly describe how the diff indicates the changes that you made.  "
},
{
  "id": "topic-git-command-summary-upstreaming",
  "level": "1",
  "url": "topic-git-command-summary-upstreaming.html",
  "type": "Section",
  "number": "4.9",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. Until that happens it is often useful to have a short concise cheat sheet of the command for accomplishing each task.      Match the tasks on the right with the appropriate git command listed on the left.     git log  Display recent commits made to the active branch.     git branch <branch>  Create a new feature branch.     git switch <branch>  Change the active branch     git status  Check the current state of your local repo.     git status <file name>  Display the changes that you made to a file.     git add <file name>  Stage changed files to be committed to the repo.     git add .  Another way to stage changed files for a commit.     git commit -m \"message\"  Commit staged files with a message.     git push -d <remote repo name> <branch>  Push a feature branch to your origin.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-upstreaming",
  "level": "2",
  "url": "topic-git-command-summary-upstreaming.html#ex-git-commands-summary-upstreaming",
  "type": "Exercise",
  "number": "4.9.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git log  Display recent commits made to the active branch.     git branch <branch>  Create a new feature branch.     git switch <branch>  Change the active branch     git status  Check the current state of your local repo.     git status <file name>  Display the changes that you made to a file.     git add <file name>  Stage changed files to be committed to the repo.     git add .  Another way to stage changed files for a commit.     git commit -m \"message\"  Commit staged files with a message.     git push -d <remote repo name> <branch>  Push a feature branch to your origin.    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-gitkit-feedback-upstreaming",
  "level": "1",
  "url": "topic-gitkit-feedback-upstreaming.html",
  "type": "Section",
  "number": "4.10",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve and scope this chapter for future semesters please consider providing the following feedback.      For each of the following statements, rate your agreement or disagreement. Refer to the chapter as needed.    When looking at the figures I understand what the dots\/circles represent.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       When looking at the figures it is clear which repositories are on GitHub and which are local to my machine.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The text descriptions provided with the figures helped me understand the state of the repositories depicted in the figures.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The questions I answered helped me pause and think about what the commands I was typing did.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Examples of the git commands in addition to the syntax would help me understand what I should be typing.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       There were too many questions in this activity.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       I am looking forward to doing the next activity in the GitKit.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Rate how each of the following words describes how you felt while completing the sections in this chapter.     bored       Not at all      Somewhat      Quite a bit        confident       Not at all      Somewhat      Quite a bit        confused       Not at all      Somewhat      Quite a bit        engaged       Not at all      Somewhat      Quite a bit        frustrated       Not at all      Somewhat      Quite a bit        interested       Not at all      Somewhat      Quite a bit        lost       Not at all      Somewhat      Quite a bit        overwhelmed       Not at all      Somewhat      Quite a bit        Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours       Please comment on any particular challenges you faced in completing this chapter.    "
},
{
  "id": "ex-gitkit-feedback-upstreaming",
  "level": "2",
  "url": "topic-gitkit-feedback-upstreaming.html#ex-gitkit-feedback-upstreaming",
  "type": "Exercise",
  "number": "4.10.1",
  "title": "",
  "body": " For each of the following statements, rate your agreement or disagreement. Refer to the chapter as needed.    When looking at the figures I understand what the dots\/circles represent.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       When looking at the figures it is clear which repositories are on GitHub and which are local to my machine.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The text descriptions provided with the figures helped me understand the state of the repositories depicted in the figures.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The questions I answered helped me pause and think about what the commands I was typing did.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Examples of the git commands in addition to the syntax would help me understand what I should be typing.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       There were too many questions in this activity.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       I am looking forward to doing the next activity in the GitKit.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree     "
},
{
  "id": "ex-gitkit-feedback-words-upstreaming",
  "level": "2",
  "url": "topic-gitkit-feedback-upstreaming.html#ex-gitkit-feedback-words-upstreaming",
  "type": "Exercise",
  "number": "4.10.2",
  "title": "",
  "body": " Rate how each of the following words describes how you felt while completing the sections in this chapter.     bored       Not at all      Somewhat      Quite a bit        confident       Not at all      Somewhat      Quite a bit        confused       Not at all      Somewhat      Quite a bit        engaged       Not at all      Somewhat      Quite a bit        frustrated       Not at all      Somewhat      Quite a bit        interested       Not at all      Somewhat      Quite a bit        lost       Not at all      Somewhat      Quite a bit        overwhelmed       Not at all      Somewhat      Quite a bit     "
},
{
  "id": "ex-gitkit-feedback-time-upstreaming",
  "level": "2",
  "url": "topic-gitkit-feedback-upstreaming.html#ex-gitkit-feedback-time-upstreaming",
  "type": "Exercise",
  "number": "4.10.3",
  "title": "",
  "body": "  Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours     "
},
{
  "id": "ex-gitkit-feedback-challenge-upstreaming",
  "level": "2",
  "url": "topic-gitkit-feedback-upstreaming.html#ex-gitkit-feedback-challenge-upstreaming",
  "type": "Exercise",
  "number": "4.10.4",
  "title": "",
  "body": " Please comment on any particular challenges you faced in completing this chapter.  "
},
{
  "id": "topic-understanding-changes-to-the-upstream-repository",
  "level": "1",
  "url": "topic-understanding-changes-to-the-upstream-repository.html",
  "type": "Section",
  "number": "5.1",
  "title": "Understanding Changes to the Upstream Repository",
  "body": " Understanding Changes to the Upstream Repository   If the upstream maintainers decide that the changes in your PR are good for the project, they will merge them into the upstream main branch. That way they become a part of the main project, and everyone can benefit from your work. In class your instructor played the role of an upstream maintainer and demonstrated how the changes contained in pull requests are merged.      illustrates the state after several commits have been merged into upstream main .    Changes Merged into Upstream.   Cloud image of the changes merged into upstream.      Answer the following questions using    Which commits (give the colors) were merged into the upstream main since the contributor created the feature branch that is shown?     Red      Yellow      Green      Blue      Pink      Lime Green     Look at which commits are new in upstream that are not part of the local repository's main or feature branch.   Which of the commits did the managers merge from the contributor's pull request?     Red    Red was in main prior to the contributor creating the feature branch.      Yellow    Yellow was in main prior to the contributor creating the feature branch.      Green    Green was in main prior to the contributor creating the feature branch.      Blue    Blue was part of the contributor's feature branch.      Pink    Pink was part of another contributor's pull request.      Lime Green    Lime green was part of another contributor's pull request.     Look at which commits are in the local repository's feature branch.   Briefly explain how the pink commit could have gotten into the upstream main .   GitHub will inform you when the active branch in your origin repo is out of synch with the upstream.  Use your browser to visit your origin repo on GitHub and ensure that the main branch is selected. Find the part of the page that indicates that your main branch is behind (i.e. not the same as, or out of synch with) the upstream main .  If you do not see a message that your main branch is behind the upstream main branch go to of this chapter and follow the instructions there. Once you complete , return to .  Briefly explain what has happened that caused your origin’s main branch to get behind the upstream main .    "
},
{
  "id": "fig-changes-merged-into-upstream",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#fig-changes-merged-into-upstream",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": " Changes Merged into Upstream.   Cloud image of the changes merged into upstream.   "
},
{
  "id": "ex-merged-commits",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#ex-merged-commits",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": " Answer the following questions using    Which commits (give the colors) were merged into the upstream main since the contributor created the feature branch that is shown?     Red      Yellow      Green      Blue      Pink      Lime Green     Look at which commits are new in upstream that are not part of the local repository's main or feature branch.   Which of the commits did the managers merge from the contributor's pull request?     Red    Red was in main prior to the contributor creating the feature branch.      Yellow    Yellow was in main prior to the contributor creating the feature branch.      Green    Green was in main prior to the contributor creating the feature branch.      Blue    Blue was part of the contributor's feature branch.      Pink    Pink was part of another contributor's pull request.      Lime Green    Lime green was part of another contributor's pull request.     Look at which commits are in the local repository's feature branch.   Briefly explain how the pink commit could have gotten into the upstream main .  "
},
{
  "id": "ex-origin-main-behind-main",
  "level": "2",
  "url": "topic-understanding-changes-to-the-upstream-repository.html#ex-origin-main-behind-main",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "GitHub will inform you when the active branch in your origin repo is out of synch with the upstream.  Use your browser to visit your origin repo on GitHub and ensure that the main branch is selected. Find the part of the page that indicates that your main branch is behind (i.e. not the same as, or out of synch with) the upstream main .  If you do not see a message that your main branch is behind the upstream main branch go to of this chapter and follow the instructions there. Once you complete , return to .  Briefly explain what has happened that caused your origin’s main branch to get behind the upstream main .  "
},
{
  "id": "topic-overview-of-synchronizing-with-the-upstream-repository",
  "level": "1",
  "url": "topic-overview-of-synchronizing-with-the-upstream-repository.html",
  "type": "Section",
  "number": "5.2",
  "title": "Overview of Synchronizing with the Upstream Repository",
  "body": " Overview of Synchronizing with the Upstream Repository  As changes from pull requests (yours and others) are merged into upstream main , the main branches in your local and origin repos will get out of synch with the upstream .  Now, recall that upstream main should be the starting point for all new work. So, before you can work on something new, you’ll want to make your main branches look like the upstream main (i.e. you will synchronize them with the upstream). This is a two-step process. You will pull the upstream main into your local repository and then you will push it to your origin. shows how pulling main from the upstream and then pushing it to your origin synchs the main branches.    Synch with Upstream.   Cloud image of how upstream and the local repository are out of synch.     "
},
{
  "id": "fig-synching-with-upstream",
  "level": "2",
  "url": "topic-overview-of-synchronizing-with-the-upstream-repository.html#fig-synching-with-upstream",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Synch with Upstream.   Cloud image of how upstream and the local repository are out of synch.   "
},
{
  "id": "topic-verifying-the-upstream-remote",
  "level": "1",
  "url": "topic-verifying-the-upstream-remote.html",
  "type": "Section",
  "number": "5.3",
  "title": "Creating and Verifying the Upstream Remote",
  "body": " Creating and Verifying the Upstream Remote  In order to pull changes from the upstream you will need to tell your local repository where the upstream is. In earlier figures, dotted orange lines were used to indicate that your local repository knew about the origin and that the origin knew about the upstream. But there was no orange dotted line from your local repository to the upstream. That is because, by default, your local repository isn’t aware of the upstream.  Like the last activity, you will be working within the KitClient for this activity.    Restart your KitClient based on the instructions in   In order to pull from the upstream you will first need to make your local repository aware of the upstream. This is done by setting a remote for it. This exercise will walk you through that process.  The git remote -v command lists the names and URLs of all of the remote repositories (or just remotes for short) that your local repo knows about. Run this command in the directory that contains your local repository.   How is the origin remote indicated in represented in ?      CHOICE        CHOICE        CHOICE        CHOICE      ADD HINT HERE   To create a new remote that tells your local repo about the upstream you will need the URL of the upstream repo. Use your browser to navigate to the upstream FarmData2 repo that you are using for this course and give its URL here. Hint: You can find the upstream using the link from your origin repo in GitHub. Once you find the upstream, you can get the URL by using the “Code” button in the upstream repo, it ends in .git .   The git remote command can also be used to add a new remote to your local repo. The format for this command is:   git remote add <remote repo name> <remote repo URL>   Use the above command to create a remote named upstream that points to the FarmData2 upstream repository that you are using for this exercise.   Use the git remote -v command to confirm that the new upstream remote has been added.   The upstream remote provides your local repo with the information it needs to find the upstream repo. In git this information is represented using a URL. How is this information represented in ?      CHOICE        CHOICE        CHOICE        CHOICE      ADD HINT HERE   Note that you will only need to set the upstream remote once for a repository. Once the upstream remote is set you will be able to pull from the upstream repo as often as is necessary.   "
},
{
  "id": "ex-restarting-kitclient-for-synching",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-restarting-kitclient-for-synching",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "Restart your KitClient based on the instructions in  "
},
{
  "id": "ex-setting-upstream",
  "level": "2",
  "url": "topic-verifying-the-upstream-remote.html#ex-setting-upstream",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "In order to pull from the upstream you will first need to make your local repository aware of the upstream. This is done by setting a remote for it. This exercise will walk you through that process.  The git remote -v command lists the names and URLs of all of the remote repositories (or just remotes for short) that your local repo knows about. Run this command in the directory that contains your local repository.   How is the origin remote indicated in represented in ?      CHOICE        CHOICE        CHOICE        CHOICE      ADD HINT HERE   To create a new remote that tells your local repo about the upstream you will need the URL of the upstream repo. Use your browser to navigate to the upstream FarmData2 repo that you are using for this course and give its URL here. Hint: You can find the upstream using the link from your origin repo in GitHub. Once you find the upstream, you can get the URL by using the “Code” button in the upstream repo, it ends in .git .   The git remote command can also be used to add a new remote to your local repo. The format for this command is:   git remote add <remote repo name> <remote repo URL>   Use the above command to create a remote named upstream that points to the FarmData2 upstream repository that you are using for this exercise.   Use the git remote -v command to confirm that the new upstream remote has been added.   The upstream remote provides your local repo with the information it needs to find the upstream repo. In git this information is represented using a URL. How is this information represented in ?      CHOICE        CHOICE        CHOICE        CHOICE      ADD HINT HERE  "
},
{
  "id": "topic-pulling-the-upstream-main-branch",
  "level": "1",
  "url": "topic-pulling-the-upstream-main-branch.html",
  "type": "Section",
  "number": "5.4",
  "title": "Pulling the Upstream <code class=\"code-inline tex2jax_ignore\">main<\/code> Branch",
  "body": " Pulling the Upstream main Branch    The next step is to pull the changes to the main branch from the upstream repo to your local repo. This section walks you through that process.  To pull the changes from the upstream main branch into your local repo you first need to ensure that main is the active branch in your local repo. Make sure that main is the active branch in your local repo. What command(s) did you use?      git        git        git        git        git      ADD HINT HERE   The command   git pull --ff-only <remote repo name> <branch>   will pull any new commits from the specified branch in the remote repo and add them onto the end of the active branch of your local repo. Use the git pull command above to pull and add the commits from the main branch of the upstream repo to your main branch.   Examine the output from . It should not contain any error messages. If it does, return to and try again. Which file(s) were changed by your git pull command?     File 1      File 2      File 3      File 4      File 5     ADD HINT HERE    "
},
{
  "id": "ex-active-branch",
  "level": "2",
  "url": "topic-pulling-the-upstream-main-branch.html#ex-active-branch",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "The next step is to pull the changes to the main branch from the upstream repo to your local repo. This section walks you through that process.  To pull the changes from the upstream main branch into your local repo you first need to ensure that main is the active branch in your local repo. Make sure that main is the active branch in your local repo. What command(s) did you use?      git        git        git        git        git      ADD HINT HERE   The command   git pull --ff-only <remote repo name> <branch>   will pull any new commits from the specified branch in the remote repo and add them onto the end of the active branch of your local repo. Use the git pull command above to pull and add the commits from the main branch of the upstream repo to your main branch.   Examine the output from . It should not contain any error messages. If it does, return to and try again. Which file(s) were changed by your git pull command?     File 1      File 2      File 3      File 4      File 5     ADD HINT HERE  "
},
{
  "id": "topic-pushing-main-to-your-origin",
  "level": "1",
  "url": "topic-pushing-main-to-your-origin.html",
  "type": "Section",
  "number": "5.5",
  "title": "Pushing <code class=\"code-inline tex2jax_ignore\">main<\/code> to Your Origin",
  "body": " Pushing main to Your Origin     Your local main branch is now in synch with the upstream main branch. What’s left is to also synch the main branch in your origin repo.   Recall that you previously used the   git push <remote repo name> <branch>   command to push your feature branch from your local repo to your origin repo. Use the git push command to push the main branch of your local repo to your remote origin repo.   Examine the output from . You should see a lot of information about deltas and objects. Those are terms related to the inner workings of git that we will not worry about. If you don’t see this information about deltas and objects but see an error message instead, revisit and try again.  The last two lines of the output in part a should contain some recognizable information. What do you think that these lines are telling you?     option      option      option      option     ADD HINT HERE    As with most things related to Git and GitHub, there are a number of different ways to synchronize. For example, you can also fetch the changes from the upstream main to your origin and then pull them from there to your local repository. If you are curious, you can check out this GitHub link: Syncing a fork     "
},
{
  "id": "ex-synching-main-to-origin",
  "level": "2",
  "url": "topic-pushing-main-to-your-origin.html#ex-synching-main-to-origin",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": " Your local main branch is now in synch with the upstream main branch. What’s left is to also synch the main branch in your origin repo.   Recall that you previously used the   git push <remote repo name> <branch>   command to push your feature branch from your local repo to your origin repo. Use the git push command to push the main branch of your local repo to your remote origin repo.   Examine the output from . You should see a lot of information about deltas and objects. Those are terms related to the inner workings of git that we will not worry about. If you don’t see this information about deltas and objects but see an error message instead, revisit and try again.  The last two lines of the output in part a should contain some recognizable information. What do you think that these lines are telling you?     option      option      option      option     ADD HINT HERE  "
},
{
  "id": "topic-deleting-a-feature-branch",
  "level": "1",
  "url": "topic-deleting-a-feature-branch.html",
  "type": "Section",
  "number": "5.6",
  "title": "Deleting a Feature Branch",
  "body": " Deleting a Feature Branch   Once your changes have been merged into the upstream main , and you have synchronized, there is no need for you to retain your feature branch. There is no harm in keeping it. But most developers will delete them to avoid having their repos become cluttered with old feature branches.    Deleting Feature Branches.   Cloud image of the feature branch.      shows the state that will result after deleting the feature branch from your local and origin repositories.      The first step is to delete the feature branch from your local repository. This exercise will walk you through that process.   It is not possible to delete the active branch. So, if you have not already, switch from your feature branch to the main branch. Then give a command that lists all of the branches in your local repository.  Which command did you type to list the local repositories?      git switch        git pull        git commit        git branch      ADD HINT HERE   The command git branch -D <branch> will delete a branch from your local repository. Use the this command to delete your feature branch.   How can you check if your branch was deleted? Be sure to check that it was deleted. If not return to and try again.    In the previous exercise you deleted your feature branch from your local repository.   Does this feature branch still exist in your origin repo on GitHub?     Yes      No     ADD HINT HERE   Explain how you know whether the feature branch exists in your origin repo on GitHub?   You can delete your feature branch from your origin repo using the git CLI. The command   git push -d <remote repo name> <branch>   will delete the specified branch from the specified remote repository. Use this command to delete your feature branch from your origin repo.   Use your browser as you did in to confirm that your feature branch is deleted from your origin repo on GitHub. If it has not been deleted, revisit and try again.    "
},
{
  "id": "fig-deleting-feature-branch",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#fig-deleting-feature-branch",
  "type": "Figure",
  "number": "5.6.1",
  "title": "",
  "body": " Deleting Feature Branches.   Cloud image of the feature branch.   "
},
{
  "id": "ex-deleting-feature-branch",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch",
  "type": "Exercise",
  "number": "5.6.1",
  "title": "",
  "body": " The first step is to delete the feature branch from your local repository. This exercise will walk you through that process.   It is not possible to delete the active branch. So, if you have not already, switch from your feature branch to the main branch. Then give a command that lists all of the branches in your local repository.  Which command did you type to list the local repositories?      git switch        git pull        git commit        git branch      ADD HINT HERE   The command git branch -D <branch> will delete a branch from your local repository. Use the this command to delete your feature branch.   How can you check if your branch was deleted? Be sure to check that it was deleted. If not return to and try again.  "
},
{
  "id": "ex-deleting-feature-branch-on-github",
  "level": "2",
  "url": "topic-deleting-a-feature-branch.html#ex-deleting-feature-branch-on-github",
  "type": "Exercise",
  "number": "5.6.2",
  "title": "",
  "body": " In the previous exercise you deleted your feature branch from your local repository.   Does this feature branch still exist in your origin repo on GitHub?     Yes      No     ADD HINT HERE   Explain how you know whether the feature branch exists in your origin repo on GitHub?   You can delete your feature branch from your origin repo using the git CLI. The command   git push -d <remote repo name> <branch>   will delete the specified branch from the specified remote repository. Use this command to delete your feature branch from your origin repo.   Use your browser as you did in to confirm that your feature branch is deleted from your origin repo on GitHub. If it has not been deleted, revisit and try again.  "
},
{
  "id": "topic-git-command-summary-synching",
  "level": "1",
  "url": "topic-git-command-summary-synching.html",
  "type": "Section",
  "number": "5.7",
  "title": "Git Command Summary",
  "body": " Git Command Summary   It will take a while for this process and all of the commands to become a natural part of the way you work. Until that happens it is often useful to have a short concise cheat sheet of the command for accomplishing each task.      Match the tasks on the right with the appropriate git command listed on the left.     git remote -v  List your remote repos     git remote add <remote repo name> <remote repo URL>  Add a new remote repo     git pull --ff-only <remote repo name> <branch>  Synch a branch of your origin repo with your local repo     git push <remote repo name> <branch>  Synch a branch of your local repo with the upstream     git branch -D <branch>  Delete a feature branch from your local repo     git push -d <remote repo name> <branch>  Delete a feature branch from your origin    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.    "
},
{
  "id": "ex-git-commands-summary-synching",
  "level": "2",
  "url": "topic-git-command-summary-synching.html#ex-git-commands-summary-synching",
  "type": "Exercise",
  "number": "5.7.1",
  "title": "",
  "body": " Match the tasks on the right with the appropriate git command listed on the left.     git remote -v  List your remote repos     git remote add <remote repo name> <remote repo URL>  Add a new remote repo     git pull --ff-only <remote repo name> <branch>  Synch a branch of your origin repo with your local repo     git push <remote repo name> <branch>  Synch a branch of your local repo with the upstream     git branch -D <branch>  Delete a feature branch from your local repo     git push -d <remote repo name> <branch>  Delete a feature branch from your origin    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.  "
},
{
  "id": "topic-lets-do-it-again",
  "level": "1",
  "url": "topic-lets-do-it-again.html",
  "type": "Section",
  "number": "5.8",
  "title": "Let’s Do it Again",
  "body": " Let's Do it Again   You’ve learned a lot about Git and GitHub. But, to become proficient with these tools takes a lot of repetition and practice. This section asks you to go through the process of finding an issue, fixing it and creating a pull request again. This is good practice but what you will be asked to do has also been carefully planned to set us up for the next chapter too!      Claiming Another Issue   The issue tracker in the upstream FarmData2 repository being used for these tasks.   Use the label dropdown in the issue tracker to filter for issues labeled with the “Round2” tag. How many issues are tagged with this label?     option      option      option      option     ADD HINT HERE   Clearly there are not enough “Round2” issues for everyone to have their own as was the case with the “Round1” issues. So, this time there will be multiple people working on the same issue.  Pick one of the “Round2” issues to work on and make a comment on it to indicate your interest in working on it. Note it is not necessary that the issue be assigned to you this time. Try to spread out across the issues so that multiple people have commented that they are working on each one. Give the Issue # and title that you chose.     Fixing the Issue and Upstreaming Your Changes   Now you will go through the process of fixing the issue and making a pull request. You will use the same process that you used for your “Round1” issue earlier. That process had a number of steps. They are listed below in a jumbled-up order, determine the proper order.    Create a new feature branch    Switch to the feature branch    Edit the local files   Stage your changes    Commit changes to the feature branch    Push the feature branch to your origin    Make a pull request to the upstream    HINT HERE.    Use the process that you outlined in to fix your “Round2” issue and create a pull request to the upstream for your changes.  Be sure to:   Use a descriptive name for your branch.    Use a meaningful message when committing your changes to the feature branch.    Provide a useful title and description when creating your pull request.    Include a “Closes” or “Fixes” line in your pull request description so that the associated issue number will be closed automatically if your pull request is merged.      Which of the following Git commands did you use for the steps indicated below. The command references that you created in may also come in handy here.     git branch <branch>  Create feature branch     git switch <branch>  Switch to feature branch     git add .  Add changes to stage     git commit -m \"message\"  Commit changes     git push  Push feature branch    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.   Which of the following would be good names for a feature branch for issue x that does...?     option      option      option      option      option     ADD HINT HERE   Which of the following would be a good commit message for issue x?     option      option      option      option      option     ADD HINT HERE    Give the following information about your pull request. Hint: You can revisit the prior sections to refresh your memory on the terms Base Repository , Head Repository , Base Branch and Compare Branch .   The number of your PR   Full URL of your PR   Base Repository URL   Head Repository URL   Base Branch   Compare Branch   The line number of the README.md file that you changed. Hint: use the diff you saw in the prior chapter.    Because there were a limited number of “Round2” issues, other students will have been simultaneously making changes to fix the same lines in the same files. Describe in a few sentences how this might create a problem in the future.     "
},
{
  "id": "ex-claim-issue",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-claim-issue",
  "type": "Exercise",
  "number": "5.8.1",
  "title": "",
  "body": " The issue tracker in the upstream FarmData2 repository being used for these tasks.   Use the label dropdown in the issue tracker to filter for issues labeled with the “Round2” tag. How many issues are tagged with this label?     option      option      option      option     ADD HINT HERE   Clearly there are not enough “Round2” issues for everyone to have their own as was the case with the “Round1” issues. So, this time there will be multiple people working on the same issue.  Pick one of the “Round2” issues to work on and make a comment on it to indicate your interest in working on it. Note it is not necessary that the issue be assigned to you this time. Try to spread out across the issues so that multiple people have commented that they are working on each one. Give the Issue # and title that you chose.  "
},
{
  "id": "ex-fixing-issue-ordering",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-fixing-issue-ordering",
  "type": "Exercise",
  "number": "5.8.2",
  "title": "",
  "body": " Now you will go through the process of fixing the issue and making a pull request. You will use the same process that you used for your “Round1” issue earlier. That process had a number of steps. They are listed below in a jumbled-up order, determine the proper order.    Create a new feature branch    Switch to the feature branch    Edit the local files   Stage your changes    Commit changes to the feature branch    Push the feature branch to your origin    Make a pull request to the upstream    HINT HERE.  "
},
{
  "id": "ex-fixing-issue-process",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-fixing-issue-process",
  "type": "Exercise",
  "number": "5.8.3",
  "title": "",
  "body": " Use the process that you outlined in to fix your “Round2” issue and create a pull request to the upstream for your changes.  Be sure to:   Use a descriptive name for your branch.    Use a meaningful message when committing your changes to the feature branch.    Provide a useful title and description when creating your pull request.    Include a “Closes” or “Fixes” line in your pull request description so that the associated issue number will be closed automatically if your pull request is merged.      Which of the following Git commands did you use for the steps indicated below. The command references that you created in may also come in handy here.     git branch <branch>  Create feature branch     git switch <branch>  Switch to feature branch     git add .  Add changes to stage     git commit -m \"message\"  Commit changes     git push  Push feature branch    Note that the tasks listed are in approximately the same order as they appear in the sections of this chapter.   Which of the following would be good names for a feature branch for issue x that does...?     option      option      option      option      option     ADD HINT HERE   Which of the following would be a good commit message for issue x?     option      option      option      option      option     ADD HINT HERE  "
},
{
  "id": "ex-pull-request-info",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-info",
  "type": "Exercise",
  "number": "5.8.4",
  "title": "",
  "body": " Give the following information about your pull request. Hint: You can revisit the prior sections to refresh your memory on the terms Base Repository , Head Repository , Base Branch and Compare Branch .   The number of your PR   Full URL of your PR   Base Repository URL   Head Repository URL   Base Branch   Compare Branch   The line number of the README.md file that you changed. Hint: use the diff you saw in the prior chapter.  "
},
{
  "id": "ex-pull-request-problem",
  "level": "2",
  "url": "topic-lets-do-it-again.html#ex-pull-request-problem",
  "type": "Exercise",
  "number": "5.8.5",
  "title": "",
  "body": " Because there were a limited number of “Round2” issues, other students will have been simultaneously making changes to fix the same lines in the same files. Describe in a few sentences how this might create a problem in the future.  "
},
{
  "id": "topic-gitkit-feedback-synching",
  "level": "1",
  "url": "topic-gitkit-feedback-synching.html",
  "type": "Section",
  "number": "5.9",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   To help us improve and scope this chapter for future semesters please consider providing the following feedback.      For each of the following statements, rate your agreement or disagreement. Refer to the chapter as needed.    The figures helped me understand the relationship between my local repository, the origin repository and the upstream repository.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The text descriptions provided with the figures helped me understand the state of the repositories depicted in the figure.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The questions I answered helped me pause and think about what the commands I was typing did.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Examples of the git commands in addition to the syntax would help me understand what I should be typing.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       There were too many questions in this activity.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       I am looking forward to doing the next chapter in the GitKit.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Rate how each of the following words describes how you felt while completing the sections in this chapter.     bored       Not at all      Somewhat      Quite a bit        confident       Not at all      Somewhat      Quite a bit        confused       Not at all      Somewhat      Quite a bit        engaged       Not at all      Somewhat      Quite a bit        frustrated       Not at all      Somewhat      Quite a bit        interested       Not at all      Somewhat      Quite a bit        lost       Not at all      Somewhat      Quite a bit        overwhelmed       Not at all      Somewhat      Quite a bit        Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours       Please comment on any particular challenges you faced in completing this chapter.    "
},
{
  "id": "ex-gitkit-feedback-synching",
  "level": "2",
  "url": "topic-gitkit-feedback-synching.html#ex-gitkit-feedback-synching",
  "type": "Exercise",
  "number": "5.9.1",
  "title": "",
  "body": " For each of the following statements, rate your agreement or disagreement. Refer to the chapter as needed.    The figures helped me understand the relationship between my local repository, the origin repository and the upstream repository.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The text descriptions provided with the figures helped me understand the state of the repositories depicted in the figure.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       The questions I answered helped me pause and think about what the commands I was typing did.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       Examples of the git commands in addition to the syntax would help me understand what I should be typing.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       There were too many questions in this activity.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree       I am looking forward to doing the next chapter in the GitKit.      Strongly Agree      Agree      Neither Agree nor Disagree      Disagree      Strongly Disagree     "
},
{
  "id": "ex-gitkit-feedback-words-synching",
  "level": "2",
  "url": "topic-gitkit-feedback-synching.html#ex-gitkit-feedback-words-synching",
  "type": "Exercise",
  "number": "5.9.2",
  "title": "",
  "body": " Rate how each of the following words describes how you felt while completing the sections in this chapter.     bored       Not at all      Somewhat      Quite a bit        confident       Not at all      Somewhat      Quite a bit        confused       Not at all      Somewhat      Quite a bit        engaged       Not at all      Somewhat      Quite a bit        frustrated       Not at all      Somewhat      Quite a bit        interested       Not at all      Somewhat      Quite a bit        lost       Not at all      Somewhat      Quite a bit        overwhelmed       Not at all      Somewhat      Quite a bit     "
},
{
  "id": "ex-gitkit-feedback-time-synching",
  "level": "2",
  "url": "topic-gitkit-feedback-synching.html#ex-gitkit-feedback-time-synching",
  "type": "Exercise",
  "number": "5.9.3",
  "title": "",
  "body": "  Approximately how much time did you spend on this chapter outside of class time?      0 - 30 minutes      30 minutes - 1 hour      1 hour - 2 hours      2 hours - 3 hours      3 hours - 5 hours      more than 5 hours     "
},
{
  "id": "ex-gitkit-feedback-challenge-synching",
  "level": "2",
  "url": "topic-gitkit-feedback-synching.html#ex-gitkit-feedback-challenge-synching",
  "type": "Exercise",
  "number": "5.9.4",
  "title": "",
  "body": " Please comment on any particular challenges you faced in completing this chapter.  "
},
{
  "id": "topic-appendix-a-staying-synchronized",
  "level": "1",
  "url": "topic-appendix-a-staying-synchronized.html",
  "type": "Section",
  "number": "5.10",
  "title": "Appendix A",
  "body": " Appendix A   The information in this appendix is only important if you were directed here from , otherwise it may be ignored.   You found in that the main branch in your origin repository was not behind the main branch in the upstream repository. This would have happened if you created your fork and clone after the instructor merged the class pull requests for the Round 1 issues. You can recover from this situation using the commands below.  Ensure that you are in the GitKit-FarmData2 directory then use the following commands:   git switch main    git reset --hard 96d9ecee396a8a6b4bda3b2c787deeec6c353217    git push --force origin main      You should now return to and the main branch in your origin should now be behind the main branch in the upstream.   "
},
{
  "id": "topic-understanding-merge-conflicts",
  "level": "1",
  "url": "topic-understanding-merge-conflicts.html",
  "type": "Section",
  "number": "6.1",
  "title": "Understanding Merge Conflicts",
  "body": " Understanding Merge Conflicts   The exercises in this section provide practice in identifying merge conflicts and their resolutions.      shows the main branch in the right panel, the contributor's feature branch in the left panel, and the common ancestor in the middle.    Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, common ancestor, main branch)      Consider the merge shown in . As shown in the right-hand panel, the maintainers have merged commits into the main branch that fix several bugs that existed in the program. The left-hand panel shows a contributor's feature branch with has been changed to use more descriptive variable names but that has not fixed the bugs. The center panel shows the best common ancestor of the feature and main branches.   Study the program in the main branch and then describe in a sentence the computation that the program is trying to perform. Note: The Feature Branch and the Best Common Ancestor both contain bugs.   Highlight (by clicking, or by circling) all of the lines that are non-conflicting changes in the feature branch or the main branch. Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Merge conflicts occur when both source branches change the same line.   Highlight (by clicking, or by circling) all of the lines that are conflicting changes in the feature branch and the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Merge conflicts occur when both source branches change the same line.   Would the feature branch in be able to be merged automatically by the project maintainers? Briefly explain your answer.   Highlight the correct lines that give a Merged Result of the program in that combines the feature branch and the main branch such that the result both performs the desired computation and uses the more descriptive variable names.   total=0  tot=0  count=0  read n  while count > n:  while count < n:  read m  total=total+m  tot=tot+m  count--  count++  average=count\/total  ave=tot\/count  average=total\/count    shows the main branch in the right panel, the contributor's feature branch in the left panel, and the common ancestor in the middle.    Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, common ancestor, main branch)      Now consider the merge shown in . As shown in the right-hand panel, the maintainers have merged commits into the main branch that fix several bugs that existed in the program. The left-hand panel shows a contributor's feature branch with has been changed to use more descriptive variable names but that has not fixed the bugs. The center panel shows the best common ancestor of the feature and main branches.   Study the program in the main branch and then describe in a sentence the computation that the program is trying to perform. Note: The ** indicates exponentiation (e.g. x**2 is x squared). Note: The Common Ancestor contains a bug that is fixed in different ways by the main branch and the feature branch.   Highlight (by clicking, or by circling) all of the lines that are non-conflicting changes in the feature branch or the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Merge conflicts occur when the feature, main , and common ancestor branches are all different.   Highlight (by clicking, or by circling) all of the lines that are conflicting changes in the feature branch and the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Merge conflicts occur when the feature, main , and common ancestor branches are all different.   Would the feature branch in be able to be merged automatically by the project maintainers? Briefly explain your answer.   Give the Merged Result to show the result of an automatic merge of the feature and main branches shown in .   r = 15  pi = 3.1415927  pi = 3.14  rsq = r**2  rsq = r*2  a = pi*rsq  area = p*rsq  area = pi*(rqs\/2)**2  print a  print area  print rsq   Look carefully at your result in . Will the resulting program perform the computation correctly? Briefly explain why or why not.   When a merge can be completed automatically, does it guarantee that the Merged Result will be correct?.    "
},
{
  "id": "fig-merge-conflicts-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#fig-merge-conflicts-1",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": " Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, common ancestor, main branch)   "
},
{
  "id": "ex-merge-conflicts-practice-1",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflicts-practice-1",
  "type": "Exercise",
  "number": "6.1.1",
  "title": "",
  "body": " Consider the merge shown in . As shown in the right-hand panel, the maintainers have merged commits into the main branch that fix several bugs that existed in the program. The left-hand panel shows a contributor's feature branch with has been changed to use more descriptive variable names but that has not fixed the bugs. The center panel shows the best common ancestor of the feature and main branches.   Study the program in the main branch and then describe in a sentence the computation that the program is trying to perform. Note: The Feature Branch and the Best Common Ancestor both contain bugs.   Highlight (by clicking, or by circling) all of the lines that are non-conflicting changes in the feature branch or the main branch. Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Merge conflicts occur when both source branches change the same line.   Highlight (by clicking, or by circling) all of the lines that are conflicting changes in the feature branch and the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    total=0  tot=0  tot=0    count=0  count=0  count=0    read n  read n  read n    while count > n:  while count > n:  while count < n:    read m  read m  read m    total=total+m  tot=tot+m  tot=tot+m    count--  count--  count++    average=count total  ave=count tot  ave=tot count     Merge conflicts occur when both source branches change the same line.   Would the feature branch in be able to be merged automatically by the project maintainers? Briefly explain your answer.   Highlight the correct lines that give a Merged Result of the program in that combines the feature branch and the main branch such that the result both performs the desired computation and uses the more descriptive variable names.   total=0  tot=0  count=0  read n  while count > n:  while count < n:  read m  total=total+m  tot=tot+m  count--  count++  average=count\/total  ave=tot\/count  average=total\/count  "
},
{
  "id": "fig-merge-conflicts-2",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#fig-merge-conflicts-2",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " Example merge conflicts with Best Common Ancestor.   Three panels of code (feature branch, common ancestor, main branch)   "
},
{
  "id": "ex-merge-conflicts-practice-2",
  "level": "2",
  "url": "topic-understanding-merge-conflicts.html#ex-merge-conflicts-practice-2",
  "type": "Exercise",
  "number": "6.1.2",
  "title": "",
  "body": " Now consider the merge shown in . As shown in the right-hand panel, the maintainers have merged commits into the main branch that fix several bugs that existed in the program. The left-hand panel shows a contributor's feature branch with has been changed to use more descriptive variable names but that has not fixed the bugs. The center panel shows the best common ancestor of the feature and main branches.   Study the program in the main branch and then describe in a sentence the computation that the program is trying to perform. Note: The ** indicates exponentiation (e.g. x**2 is x squared). Note: The Common Ancestor contains a bug that is fixed in different ways by the main branch and the feature branch.   Highlight (by clicking, or by circling) all of the lines that are non-conflicting changes in the feature branch or the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Merge conflicts occur when the feature, main , and common ancestor branches are all different.   Highlight (by clicking, or by circling) all of the lines that are conflicting changes in the feature branch and the main branch as shown in . Use the example in the slides as a guide for highlighting.     Feature Branch  Best Common Ancestor  main Branch    r=15  r=15  r=15    pi = 3.1415927  pi = 3.14  pi = 3.14    rsq = r**2  rsq = r*2  rsq = r*2    a = pi*rsq  a = pi*rsq  area = pi*(rsq\/2)**2    print a  print a  print area     Merge conflicts occur when the feature, main , and common ancestor branches are all different.   Would the feature branch in be able to be merged automatically by the project maintainers? Briefly explain your answer.   Give the Merged Result to show the result of an automatic merge of the feature and main branches shown in .   r = 15  pi = 3.1415927  pi = 3.14  rsq = r**2  rsq = r*2  a = pi*rsq  area = p*rsq  area = pi*(rqs\/2)**2  print a  print area  print rsq   Look carefully at your result in . Will the resulting program perform the computation correctly? Briefly explain why or why not.   When a merge can be completed automatically, does it guarantee that the Merged Result will be correct?.  "
},
{
  "id": "topic-synchronizing-with-the-upstream-repository",
  "level": "1",
  "url": "topic-synchronizing-with-the-upstream-repository.html",
  "type": "Section",
  "number": "6.2",
  "title": "Synchronizing with the Upstream Repository",
  "body": " Synchronizing with the Upstream Repository   Text of section.   "
},
{
  "id": "topic-merging-the-main-branch-into-a-feature-branch",
  "level": "1",
  "url": "topic-merging-the-main-branch-into-a-feature-branch.html",
  "type": "Section",
  "number": "6.3",
  "title": "Merging the main Branch into a Feature Branch",
  "body": " Merging the main Branch into a Feature Branch   Text of section.   "
},
{
  "id": "topic-resolving-a-merge-conflict",
  "level": "1",
  "url": "topic-resolving-a-merge-conflict.html",
  "type": "Section",
  "number": "6.4",
  "title": "Resolving a Merge Conflict",
  "body": " Resolving a Merge Conflict   Text of section.   "
},
{
  "id": "topic-updating-your-pull-request",
  "level": "1",
  "url": "topic-updating-your-pull-request.html",
  "type": "Section",
  "number": "6.5",
  "title": "Updating Your Pull Request",
  "body": " Updating Your Pull Request   Text of section.   "
},
{
  "id": "topic-extra-practice",
  "level": "1",
  "url": "topic-extra-practice.html",
  "type": "Section",
  "number": "6.6",
  "title": "Extra Practice",
  "body": " Extra Practice   Text of section.   "
},
{
  "id": "topic-merge-conflicts-9",
  "level": "1",
  "url": "topic-merge-conflicts-9.html",
  "type": "Section",
  "number": "6.7",
  "title": "Git Command Summary",
  "body": " Git Command Summary   Text of section.   "
},
{
  "id": "topic-merge-conflicts-10",
  "level": "1",
  "url": "topic-merge-conflicts-10.html",
  "type": "Section",
  "number": "6.8",
  "title": "GitKit Feedback",
  "body": " GitKit Feedback   Text of section.   "
},
{
  "id": "topic-merge-conflicts-11",
  "level": "1",
  "url": "topic-merge-conflicts-11.html",
  "type": "Section",
  "number": "6.9",
  "title": "Appendix A",
  "body": " Appendix A   Text of section.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
