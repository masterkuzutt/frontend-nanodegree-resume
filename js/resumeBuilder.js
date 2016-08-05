var data = '%data%';

var bio = {
      "name": "Takahiro Sakai",
      "role": "Web Developer",
      "contacts" : {
        "mobile": "xxx-xxxx-xxxx",
        "email": "kuzutt@example.com",
        "github": "masterkuzutt",
        "twitter": "masterkuzutt",
        "location": "Suginami-ku Tokyo JP"
      },
      "welcomeMessage": "welcome to takahiro's redume page.that's my testing page",
      "skills": [
        "eat 1 dish a date","eat really first","sleep long time"
      ],
      "biopic": "images/fry.jpg"
};

bio.display = function () {
  if ( typeof bio.name === 'string' ){
    var formattedNameAndRole = HTMLheaderName.replace(data, bio.name) +
                               HTMLheaderRole.replace(data, bio.role);
    $('#header').prepend(formattedNameAndRole);
  }

  bio.displayContacts('#topContacts');
  bio.displayContacts('#footerContacts');

  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var skill_i = 0,skill_len = bio.skills.length; skill_i < skill_len ;skill_i++ ){
      $('#skills').append(HTMLskills.replace(data,bio.skills[skill_i]));
    }
  }

  if ( typeof bio.biopic === 'string'){
    $('#skills-h3').before(HTMLbioPic.replace(data,bio.biopic));
  }
};

bio.displayContacts = function (selector) {
  if ( Object.keys(bio.contacts).length > 0 ){
    for ( var contact in  bio.contacts ){
      if ( typeof contact === 'string'){
        var contactInfo = HTMLcontactGeneric.replace('%contact%', contact)
                                            .replace(data, bio.contacts[contact]);
        $(selector).append(contactInfo);
      }
    }
 }
};

var education = {
  "schools": [
    {
      "name": "Toyo university",
      "location": "Bunkyo-ku Tokyo JP",
      "degree": "Blchelor",
      "majors" : "Economics",
      "dates":  '2000-2005',
      "url" : "http://example.com"
    }
  ],
  "onlinecourses": [
    {
      "title": "Front-End Web Developper Nanodegree",
      "school": "Udacity",
      "dates" : '2016-ongoing',
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

education.display = function () {
  var schl = education.schools,
      online = education.onlinecourses;

  if ( schl.length > 0) {
    for ( var schl_i = 0 , schl_len = education.schools.length; schl_i < schl_len ; schl_i++ ) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLschoolName.replace(data,schl[schl_i].name));
        $('.education-entry:last').append(HTMLschoolLocation.replace(data,schl[schl_i].location));
        $('.education-entry:last').append(HTMLschoolDegree.replace(data,schl[schl_i].degree));
        $('.education-entry:last').append(HTMLschoolDates.replace(data,schl[schl_i].dates));
    }
  }

  if ( online.length > 0) {
    $('#education').append(HTMLonlineClasses);

    for ( var online_i = 0 , online_len = online.length; online_i < online_len ; online_i++ ) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLonlineTitle.replace(data, online[online_i].title));
        $('.education-entry:last').append(HTMLonlineSchool.replace(data, online[online_i].school));
        $('.education-entry:last').append(HTMLonlineDates.replace(data, online[online_i].dates));
        $('.education-entry:last').append(HTMLonlineURL.replace(data, online[online_i].url));
    }
  }
};

var work = {
  "jobs" : [
    {
      "employer": "Japan Self Defence Forces",
      "title": "Leading Private",
      "location": "Nerima-ku Tokyo JP",
      "dates": "2005-2007",
      "discription": "My primary role was bring injured soldor to the amburance.but" +
                     " I didn't have oppotuniteis to try my ability out side of camp."
    },
    {
      "title": "Engineer",
      "employer": "M.O.C",
      "location": "Minato-mirai Kanagawa JP",
      "dates": "2007-2016",
      "discription":"I worked as performance tester from degining test case, " +
                    "scenario to anlaysing test result."
    }
  ]
};

work.display = function () {
  var jbs = work.jobs;

  if (jbs.length > 0){
    for ( var jbs_i = 0,jbs_len =  jbs.length; jbs_i < jbs_len ; jbs_i++ ){
      $('#workExperience').append(HTMLworkStart);
      var workExperienceString = HTMLworkEmployer.replace(data,jbs[jbs_i].employer) +
          HTMLworkTitle.replace(data, jbs[jbs_i].title) +
          HTMLworkDates.replace(data, jbs[jbs_i].dates) +
          HTMLworkLocation.replace(data, jbs[jbs_i].location) +
          HTMLworkDescription.replace(data,jbs[jbs_i].discription);
      $('.work-entry:last').append(workExperienceString);
    }
  }
};

project = {
  "projects": [
      {
        "title": "Sample Project 1",
        "dates": "2015",
        "discription":"this is a dummy project to build greate web application just for me." +
                      "the  application cosists of three main function. input food recode automatically,"+
                      "get health data from my fitbit,Mixed all the data an make good advise to maintain my condition.",
        "images":[
          "images/hueapp_min.jpg",
          "images/portfolio_min.jpg"
        ]
      }
    ]
};

project.display = function () {
  var pjs = project.projects;

  if ( pjs.length > 0) {
    for ( var pjs_i = 0, pjs_len = pjs.length ; pjs_i < pjs_len ; pjs_i++ ) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace(data, pjs[pjs_i].title));
      $('.project-entry:last').append(HTMLprojectDates.replace(data, pjs[pjs_i].dates));
      $('.project-entry:last').append(HTMLprojectDescription.replace(data, pjs[pjs_i].discription));

      for ( var pjs_j = 0, lenImg = pjs[pjs_i].images.length ; pjs_j < lenImg ; pjs_j++ ){
          $('.project-entry:last').append(HTMLprojectImage.replace(data, pjs[pjs_i].images[pjs_j]));
      }
    }
  }
};

var mapIlive = {};
mapIlive.display = function () {
  $('#mapDiv').append(googleMap);
};

bio.display();
education.display();
work.display();
project.display();
mapIlive.display();
