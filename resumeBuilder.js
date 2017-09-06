var bio = {
  "name": "Harshad Baruah",
  "role": "Web developer",
  "contacts": {
    "mobile": "7002113808",
    "email": "harshad_arup@srmuniv.edu.in",
    "twitter": "@dextrocodex",
    "github": "dextrocodex",
    "blog": "HOURSblog",
    "location": "India"
  },
  "welcomeMessage": "To be optimistic in the field of learning and working co-operatively is what defines me. Welcome to my resume!",
  "skills": ["HTML", "CSS", "C++", "Javascript"],
  "biopic": "images/myself.jpg"
};

var work = {
  "jobs": [
    {
      "title": "Systems Engineer",
      "employer": "Infosys India PVT LTD",
      "dates": "2015 - 2017",
      "link": "www.infosysltd.com",
      "location": "Mysore",
      "description": "Control and maintenance of the system. It includes high performace checks, various Front-end coding and an enjoyable environment to work with. Also working in this position involves maintaining strong relations with every employees and collegues responsibly and collaboratively."
        },
    {
      "title": "Tech Lead",
      "employer": "Infosys India PVT LTD",
      "dates": "2017 till present",
      "link": "www.infosysltd.com",
      "location": "Delhi",
      "description": "Managing technical issues of the system. This means the leading of a group of freshers to build an idea of thorough understanding about different companies' needs and wants. "
        }
    ]
};

var projects = {
  "projects": [
    {
      "title": "Active power control of photovoltaic inverters in islanded mode",
      "dates": "Jan to May - 2017",
      "description": "To control the active power of a three phase PV inverter in islanded mode using MPPT  algorithm. It is achieved by incremental conductance method and through vector control of the inverters. The solar power panel absorbs a power ooof near about 100 to 200 KW and transmits to the inverter controlled through incremental conductance MPPT and a boost converter. The inverter than reverses the AC to DC magnitude and stabilizes through vector control. Also frequency stability is achieved through droop control over the whole system This entire system is being designed in MATLAB Simulations.",
      "images": ["images/project.jpg", "images/control.png"]
        },
    {
      "title": "POV display based on Arduino pro mini",
      "dates": "Jul to Dec -2016",
      "description": "To display Persistence of Vision of different characters and numerals by using LED lights rotation at a high speed monitored by an Arduino pro mini board. The motor rotates at a speed of 500rpm which persists the eyes to visualize an image of what in coded inside the Arduino board. The project is achieved by programming accurate lines of code to the arduino board to give a signal og LED lights flickering within a time lapse of 10-15 msecs. Than the board is connected to a PVC board with resistors and capacitors and connected through 9V batteries. After that a motor of speed 500rpm is connected to rotate the entire board while the flickering lights depict the image.",
      "images": ["images/pov.jpg", "images/display.jpg"]
        }
    ]
};

var education = {
  "schools": [
    {
      "name": "Maharishi Vidya Mandir",
      "degree": "Higher secondary qualification",
      "dates": "2011 - 2013",
      "location": "Guwahati, " + "Assam",
      "majors": ["Science","Political methodology"],
      "url": "www.mvm4.org"
        },
    {
      "name": "Maharishi Vidya Mandir",
      "degree": "High school leaving qualification",
      "dates": "2010 - 2011",
      "location": "Guwahati, " + "Assam",
      "majors": ["Social sciences","German language"],
      "url": "www.mvm4.org"
        }
    ],

  "onlineCourses": [
    {
      "title": "Front-end development course",
      "school": "Udacity",
      "dates": "5 months ",
      "url": "https://classroom.udacity.com/nanodegrees"
        },
    {
      "title": "Java masterclass course",
      "school": "Udemy",
      "dates": "6 months ",
      "url": "https://www.Udemy.com/onlinecourse/classroom"
        }
    ]
};


bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var contact1 = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var contact2 = HTMLemail.replace("%data%", bio.contacts.email);
  var contact3 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var contact4 = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts,#footerContacts").append(contact1, contact2, contact3, contact4);

  var contact5 = HTMLblog.replace("%data%", bio.contacts.blog);
  var contact6 = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(contact5, contact6);

  var pics = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(pics);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);
  $("#header").append(HTMLskillsStart);

  for (var k = 0; k < bio.skills.length; k++) {
    var skill1 = HTMLskills.replace("%data%", bio.skills[k]);
    $("#skills").append(skill1);
  }
};
bio.display();

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].link);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formatEmpTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formatEmpTitle);

    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDate, formattedLocation, formattedDescription);
  }
};
work.display();

projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var project10 = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
    var project11 = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    var project12 = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(project10, project11, project12);

    if (projects.projects[i].images.length > 0) {
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        var project13 = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        $(".project-entry:last").append(project13);
      }
    }
  }
};
projects.display();

education.display= function(){
  for(var classes=0;classes<education.schools.length;classes++){
    $("#education").append(HTMLschoolStart);

    var formattedName= HTMLschoolName.replace("%data%",education.schools[classes].name).replace("#",education.schools[classes].url);
    var formattedDegree= HTMLschoolDegree.replace("%data%",education.schools[classes].degree);
    var formattedDate= HTMLschoolDates.replace("%data%",education.schools[classes].dates);
    var formattedLocation= HTMLschoolLocation.replace("%data%",education.schools[classes].location);
    var formattedMajor= HTMLschoolMajor.replace("%data%",education.schools[classes].majors);
    $(".education-entry:last").append(formattedName,formattedDegree,formattedDate,formattedLocation,formattedMajor);
  }
  $(".education-entry:last").append(HTMLonlineClasses);
  for(var on=0;on<education.onlineCourses.length;on++){

    var courseTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[on].title);
    var courseSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[on].school);
    var courseDate= HTMLonlineDates.replace("%data%",education.onlineCourses[on].dates);
    var courseURL= HTMLonlineURL.replace("%data%",education.onlineCourses[on].url);

    $(".education-entry:last").append(courseTitle,courseSchool,courseDate,courseURL);
  }
};
education.display();

$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


function inName(name) {
  $("#main").append(internationalizeButton);
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUppercase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
inName();