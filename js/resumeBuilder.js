
var bio = {
      "name": "Takahiro Sakai",
      "role": "Web Developer",
      "contacts" : {
        "mobile": "xxx-xxxx-xxxx",
        "email": "kuzutt@example.com",
        "github": "masterkuzutt",
        "twitter": "masterkuzutt",
        "location": "Tokyo"
      },
      "welcomeMessage": "hoge huga hoge fuga hoge",
      "skills": [
        "eat 1 dish a date","wight training"
      ],
      "bioPic": "images/my.jpg"
    },
    education = {
      "schools": [
        {
          "name": "Toyo university",
          "city": "Tokyo JP",
          "degree": "Blchelor",
          "majors" : "Economics",
          "dates":  2005,
          "url" : "http://example.com"
        }
      ],
      "onlineCourses": [
        {
          "title": "Front-End Web Developper Nanodegree",
          "school": "Udacity",
          "dates" : 2016,
          "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
      ]
    },
    work = {
      "jobs" : [
        {
          "title": "Leading Private",
          "employer": "Japan Self Defence Forces",
          "location": "tokyo JP",
          "years": "2005-2007",
          "discription": "hogehohgeo"
        },
        {
          "title": "Engineer",
          "employer": "M.O.C",
          "location": "tokyo JP",
          "years": "2007-2016",
          "discription":"hugahoga"
        }
      ]
    },
    project = {
      "projects": [
          {
            "title": "Sample Project 1",
            "dates": "2015",
            "discription":"wa-wa-wa-wa-wa",
            "images":[
              "dummy url1",
              "dummy url2"
            ]
          }
        ]
    }
;

function displayHeader() {
  if ( typeof bio.name === 'string'){
    var formattedNameAndRole = HTMLheaderName.replace('%data%',bio.name)
                             + HTMLheaderRole.replace('%data%',bio.role);
    $('#header').prepend(formattedNameAndRole);
  }
}

function displayBio() {
  if (bio.skills.length > 0) {
    $('#topContacts').append(HTMLskillsStart);
    for (var i = 0,len = bio.skills.length; i < len ;i++){
      $('#skills').append(HTMLskills.replace('%data%',bio.skills[i]));
    }
  }
}

function displayWork() {
  if (work.jobs.length > 0){
    for (  job in work.jobs){
      $('#workExperience').append(HTMLworkStart);
      var workExperienceString = HTMLworkEmployer.replace('%data%',work.jobs[job].employer)
          + HTMLworkTitle.replace('%data%',work.jobs[job].title)
          + HTMLworkDates.replace('%data%',work.jobs[job].years)
          + HTMLworkLocation.replace('%data%',work.jobs[job].location)
          + HTMLworkDescription.replace('%data%',work.jobs[job].discription);
      $('.work-entry:last').append(workExperienceString);
    }
  }
}

function addInternationalButton(){
    $('#main').append(internationalizeButton);
}

function inName(nameString) {
  if ( typeof bio.name === 'string'){
    var nameArray = bio.name.split(' ');
    return nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLowerCase() + ' '+  nameArray[1].toUpperCase();
  }
}

project.display = function () {
  if ( project.projects.length > 0) {
    for ( var pjt in project.projects) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace('%data%',project.projects[pjt].title));
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%',project.projects[pjt].dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%',project.projects[pjt].discription));
        // [TODO]put images 
    }
  }
}

displayBio();
displayHeader();
displayWork();
project.display();

addInternationalButton();
