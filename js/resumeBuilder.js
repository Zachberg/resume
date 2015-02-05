var bio = {
    name: "Justin Murdock",
    role: "Junior Web Developer",
    contacts: {
        mobile: "1-555-123-5555",
        email: "jmurdock-resume@im.uptilt.com",
        github: "https://github.com/juliusakula",
        twitter: "https://twitter.com/JuicetinMurdock",
        location: "Berkeley, CA, USA"
    },
    welcomeMessage: "Welcome to my Interactive Resume!",
    skills: ["Javascript", "Grunt", "PHP / HTML / CSS", "MySQL", "Node.js", "Angular.js"],
    biopic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw01USki2nz8a3B2te3R8VgKuPUNarqlV2c3w9GwrLBw7WDyGTZA',
    display: function(){
        var formattedName = HTMLheaderName.replace("%data%", this.name),
            formattedContactMe = "",
            formattedRole = HTMLheaderRole.replace("%data%", this.role),
            formattedBioPic = HTMLbioPic.replace('%data%', this.biopic),
            formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', this.welcomeMessage),
            formattedSkillsStart = HTMLskillsStart,
            formattedSkills = "";
            
            //create string of html to replace %data% in contacts, applying template to each iteration
        
        $.each(this.contacts, function(key, val){
            formattedContactMe += HTMLcontactGeneric.replace("%contact%", key).replace("%data%", val);
        });
            //create string of html to replace %data% in contacts, applying template to each iteration
        
        $.each(this.skills, function(key, val){
            formattedSkills += HTMLskills.replace("%data%", val);
        });
        
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").prepend(formattedContactMe);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#header").append(formattedSkillsStart);
        $('#skillsH3 + ul').append(formattedSkills).css('display', 'inline-block');
    }
}
var work = {
    jobs: [
        {
            employer: 'Lyris, Inc',
            title: 'Junior Web Developer',
            location: 'Emeryville, CA, USA',
            dates: 'October 2013 - Present',
            description: '<ul><li>While on the <b>Quality Assurance Team</b> I held the record for most test cases written in one day, myself only knowing programming for less than 4 months, competing against the team in India for that record. My mentor during this time helped me a great deal with seeing things from a higher level, and the importance of communication. </li>'+
            '<li>While on the <b>Product Engineering Team</b> I wrote a PHP Data Access Object Library that read from a configuration file in order to query a database or series of similar databases and return the results as one set. By creating this seperation of concerns between data access and data stores, scripts could be stored in any version control system without including passwords by simply omitting the password file. It was a front-end agnostic library, so the data could be viewed in any way imaginable.</li>'+
            '<li>While on the <b>Deliverability Team</b>, I learned practical Git, HTML, CSS, Javascript, JQuery, Angular.JS, Node.JS, Grunt, and User Interface Design. My first task was to refine ETL (Extract, Transform, Load) scripts already in the Deliverability Team\'s repertiour by using my Data Access Object PHP Libraries from my time in Product Engineering. I combined these tools into an API and also wrote a robust fluid front end tool set for the Deliverability Team to use, featuring <a class="inline-plz" href="http://ui-grid.info/">angular-ui/ui-grid</a> and AJAX. </li></ul>' 
        },
        {
            employer: 'Ponderosa Farms, Inc',
            title: 'Farmhand',
            location: 'Murray, KY, USA',
            dates: 'March 2007 - August 2013',
            description: '<ul><li>At a very young age I began working on my family\'s farm. By my late teens I was doing essential tasks around my family\'s farm including being on the <a  class="inline-plz" href="https://www.youtube.com/watch?v=GzAdSxeyIY4">seining team</a>, driving boats and tractors, laying irrigation pipes and helping install irrigation equipment.</li></ul>'
        }
    ],
    display: function(){
        var formattedWorkStart = HTMLworkStart,
            array = [];
            
        $.each(this.jobs, function(key, val){
            var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', val.employer),
                formattedWorkTitle = HTMLworkTitle.replace('%data%', val.title),
                formattedWorkDates = HTMLworkDates.replace('%data%', val.dates),
                formattedWorkLocation = HTMLworkLocation.replace('%data%', val.location),
                formattedWorkDescription = HTMLworkDescription.replace('%data%', val.description);
            
            array[key] =  formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
        });
        
        $.each(array, function(key, val){
            $("#workExperience").append(formattedWorkStart.replace('%data%', array[key]));
        });
    }
};
var projects = {
    projects: [
        {
            title: 'Building Computers',
            dates: '2003 - Present',
            description: '<ul><li>I\'ve built dozens of computers since I was very young -- media centers, gaming computers, bitcoin mining computers, and even a watercooled computer. I know quite a bit about computer hardware. </li></ul>',
            images: []
            
        },
        {
            title: 'Bitcoin Mining',
            dates: 'November 2013',
            description: '<ul><li>During the Bitcoin bubbled of 2013 where BTC was valued over $1000, I mined more than 3.5 BTC with a computer I built for mining. The mined BTC paid for the multi-GPU mining computer twice over. I also learned a lot about cryptography in the process, and helped a few friends mine on their computers and on the cloud. In addition to mining at home, I mined on cloud mining websites and on Amazon Web Service VMs.</li></ul>',
            images: ['images/small_hung_up.jpg','images/small_on_table.jpg']
            
        },
        {
            title: 'Free Time Coding',
            dates: 'September 2013 - Future',
            description: '<ul><li>While employed at Lyris, I was also learning to code in my free time. I have used <a class="inline-plz" href="https://www.coursera.org/">Coursera</a>, <a class="inline-plz" href="http://www.codecademy.com/">Code Academy</a> and <a class="inline-plz" href="https://www.codeschool.com/">Code School</a> to learn a wide variety of topics from Javascript to Ruby on Rails to Git. I completed a verified certificate for Ruby on Rails from the University of New Mexico with distinction. I completed the entire PHP path on Code Academy, and several entire <a class="inline-plz" href="https://www.codeschool.com/paths">paths on Code School</a> including <a class="inline-plz" href="https://www.codeschool.com/paths/html-css">HTML & CSS</a>, <a class="inline-plz" href="https://www.codeschool.com/paths/javascript">Javascript</a>, <a class="inline-plz" href="https://www.codeschool.com/paths/git">Git</a>, and <a class="inline-plz" href="https://www.codeschool.com/paths/electives">Electives</a>. I\'ve mastered four paths on Code School, with 29 courses and over 1400 code challenges completed. Links to certificates and report cards are under Education.</li></ul>',
            images: ['https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-html-css-2bcd13b6f0e8092b6e4136a448ea3244.svg','https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-javascript-6d3dadcfccd99554cff7af219749573e.svg', 'https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-git-e1fad31eec7e3bd5ede23600b3e29808.svg', 'https://d1tijy5l7mg5kk.cloudfront.net/assets/paths/badge-electives-027e9b36116e380db027b189555dfb0d.svg']
            
        }
    ],
    display: function(){
        var formattedProjectStart = HTMLprojectStart,
            array = [];
            
        $.each(this.projects, function(key, val){
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', val.title),
                formattedProjectDates = HTMLprojectDates.replace('%data%', val.dates),
                formattedProjectDescription = HTMLprojectDescription.replace('%data%', val.description),
                formattedProjectImages = '';
            $.each(val.images, function(_key, _val){
                if(val.title!=='Free Time Coding')
                    formattedProjectImages += HTMLprojectImage.replace('%data%', val.images[_key]);
                else
                    formattedProjectImages += '<div class="icon-img">' + HTMLprojectImage.replace('%data%', val.images[_key]) + '</div>';
            });
            
            array[key] =  formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages;
        });
        
        $.each(array, function(key, val){
            $("#projects").append(formattedProjectStart.replace('%data%', array[key]));
        });
        var numProjs = $('.project-entry').length;
        console.log('There are now ' + numProjs + ' projects listed.');
        //$(".project-entry").css({'box-sizing':'border-box',width: 1/numProjs*100+'%',float: 'left'});
        //console.log('There css: ' + $(".project-entry").css('width') + ' "width".');
        
    }
};
var education = {
    schools: [
    {
        name: 'Berkeley City College',
        location: 'Berkeley, CA, USA',
        degree: 'General Education',
        majors: ['Transfer Requirements'],
        dates: 'August 2013 - December 2013',
        url: 'http://web.peralta.edu/blog/category/berkeley-city-college/'
    }
    ],
    onlineCourses: [
        {
            title: 'Web Application Architecture',
            school: 'University of New Mexico',
            date: 'September 2014',
            url: 'https://www.coursera.org/account/accomplishments/records/dZVr8KxqgpTbzaF5'
        }
    ],
    display: function(){
        var formattedSchoolStart = HTMLschoolStart,
            formattedOnlineClassesStart = HTMLonlineClasses,        
            schoolArray = [],
            onlineArray = [];
            
        $.each(this.schools, function(key, val){
            var formattedSchoolName = HTMLschoolName.replace('%data%', val.name),
                formattedSchoolDegree = HTMLschoolDegree.replace('%data%', val.degree),
                formattedSchoolDates = HTMLschoolDates.replace('%data%', val.dates),
                formattedSchoolLocation = HTMLschoolLocation.replace('%data%', val.location);
                formattedMajors = "";
                $.each(val.majors, function(_key, _val){
                    formattedMajors += HTMLschoolMajor.replace('%data%', val.majors[_key]);
                });
            schoolArray[key] =  formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedMajors;
        });
        
        $.each(schoolArray, function(key, val){
            $("#education").append(formattedSchoolStart.replace('%data%', schoolArray[key]));
        });
        
        $.each(this.onlineCourses, function(key, val){
            var formattedOnlineCoursesTitle = HTMLonlineTitle.replace('#', val.url).replace('%data%', val.title),
                formattedOnlineCoursesSchool = HTMLonlineSchool.replace('%data%', val.school),
                formattedOnlineCoursesDate = HTMLonlineDates.replace('%data%', val.date),
                formattedOnlineCoursesUrl = HTMLonlineURL.replace('#', val.url).replace('%data%', val.url);
            onlineArray[key] =  formattedOnlineCoursesTitle + formattedOnlineCoursesSchool + formattedOnlineCoursesDate + formattedOnlineCoursesUrl;
        });
        $('#education').append(HTMLonlineClasses);
        $.each(onlineArray, function(key, val){
            $("#education").append(HTMLschoolStart.replace('%data%', onlineArray[key]));
        });
        
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);