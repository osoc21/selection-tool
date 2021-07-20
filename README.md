# open summer of code "selection tool"
## Intro
This tool consumes the applicant information from the Tally "student application form".  
All the applicant responses are manually added to the tool, as well as the projects.

## Flow of the application

We are currently **improving** the existing selection tool and working in [this](https://github.com/opensummerofcode/selections) github-repository. 

### Student recommendations
A coach can filter & look into the details of each student. They can then recommend either "yes", "maybe" or "no".

### Confirm selected students
An admin can **confirm** the status of a student to "Yes", "Maybe", "No", or "Undecided"

### Projects
Each project has 1 or more coaches & roles that need to be filled in. They are added manually.

## Filer students
All the students are listed, they can be filtered on either: 
- 1 or more of the 12 roles
- only alumni
- only student coach volunteers
- include students you've suggested for
- current **confirmed** status of "Yes", "Maybe", "No" or "Undecided

### Draft a student for a project
On the projects-overview page:  
A coach can **drag & drop** a student over a project-card and suggest a student for a specific role with a motivation why.

### Conflict
When a student is assigned to more than 1 project a "conflict" arises.  
The user can see the conflict(s) listed for each person.  
A small listing of advice is listed to why a student could be better suited.  
Removing a student from a project to solve the conflict can be done by clicking the **X** next to the name.

## Current Data-structure
The data *fed* to the tool is now done **manually** by a developer. All student applications as well as projects are uploaded to **Google Firebase**. 

### Firebase
The data is stored in 4 *collections*: 
- **projects**  
    consists of the assigned (drafted) students and for which role, coaches, project-info & required profiles
- **students**  
    consists of all the collected information from the registration form
- **suggestions**  
    linking to a student-id & consists of a coach their suggestion + motivation
- **users**  
    each having a uuid, consists of admin(Y/N), displayName & 

## Improvements
We took into account these factors to improve the tool:
- GDPR
- Diversity & inclusion
- Feedback from students
- Feedback from coaches
- User friendly
- More data flexibility with own database
- Automatisation


### GDPR
We took into account **what** questions we legally *can* ask the applicants in the form.  
Making **manual data input** from form-data into the tool obsolete, makes the tool more GDPR.  
(Future): Allowing the student to edit/view their student- application/information

### Diversity
Diversity is a key value on the whole tool.  
We did research on how to include all genders and pronouns. This flow starting from the application form > database > user information in the tool.  
Research on defining "diversity" itself by not only gender was also included.

### Feedback from students
We want each student to let their application *shine*. Asking about feedback from the users helped us to fill in the blanks which could be improved & we missed.

## Feedback from coaches
We asked the **users** of the tool, which are the coaches about functionalities or missing features about the tool.

## User friendly
Brainstorming, scoping and reviewing both feedback helped us improve the application form & the tool itself.

## More data flexibility with own database
Moving away from Firebase and creating our own database, makes querying everyting much faster. Because a database is more structured it is also future-proof when a new feature/table would be added.

## Automatisation
Because we want less devs to be present for *every data transaction*, we changed form-providers from Tally to **Typeform**. Connecting a webhook to our own database letting it update automatically.  
(future) : We want to notify students on their "status" for osoc


## Created by Team **Sherlock**
- [Tischa](https://github.com/tischany) (Back-end developer)
- [Merline](https://github.com/Merlinecoppieters) (Communications expert)
- [Jeroen](https://github.com/pgm-jeroendewelde) (Front-end developer)
- [Miet](https://github.com/mietcls) (Coach & coordinator)
- [Michiel](https://github.com/MichielLeyman) (Coach)


<!-- ## Assets
### Original Tally "student application form"
![Tally from student application](/images/tally-student-application-form.png) -->