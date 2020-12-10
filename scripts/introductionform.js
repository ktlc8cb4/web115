// JavaScript Document
/* eslint-disable */
	
var submitButton1 = document.getElementById("submit");
submitButton1.onclick = print;

var submitButton2 = document.getElementById("submit1");
submitButton2.onclick = print1;
			
function print() {
	var displayForm = document.getElementById("formdiv");
	var displayIntro = document.getElementById("pagediv");
	displayForm.className = "formdivhide";
	displayIntro.className = "pagedivshow";
	var firstName = document.getElementById("fname").value;
	var middleInitial = document.getElementById("middleinitial").value;
	var lastName = document.getElementById("lname").value;
	document.getElementById("name").innerHTML =  `${firstName} ${middleInitial}. ${lastName}`;
	
	//picture
	var myPicture = document.getElementById("picture").value;
	document.getElementById("myimage").src = myPicture;
	var myCaption = document.getElementById("figcaption").value;
	document.getElementById("myfigcaption").innerHTML = myCaption;
	
	//Personal Background
	var personalInfo = document.getElementById("personal").value;
	document.getElementById("personal1").innerHTML = `${personalInfo}`;
	//Personal Background
	var personalInfo = document.getElementById("personal").value;
	document.getElementById("personal1").innerHTML = personalInfo;
	
	//Professional Background
	var professionalInfo = document.getElementById("professional").value;
	document.getElementById("professional1").innerHTML = professionalInfo;
	
	//Academic Background
	var academicInfo = document.getElementById("academic").value;
	document.getElementById("academic1").innerHTML = academicInfo;
	
	//Computer Platform
	var platform = document.getElementById("platform").value;
	document.getElementById("platform1").innerHTML = platform;
	
	//Courses Enrolled
	var course1 = document.getElementById("course1").value;
	document.getElementById("course1capture").innerHTML = course1;
	var course2 = document.getElementById("course2").value;
	document.getElementById("course2capture").innerHTML = course2;
	var course3 = document.getElementById("course3").value;
	document.getElementById("course3capture").innerHTML = course3;
	
	//Remember My By
	var remember = document.getElementById("remember").value;
	document.getElementById("remember1").innerHTML = remember;
	
	//I'd like to share
	var share = document.getElementById("share").value;
	document.getElementById("share1").innerHTML = share; 
}

function print1() {
	var displayForm = document.getElementById("formdiv");
	var displayIntro = document.getElementById("pagediv");
	displayForm.className = "formdivshow";
	displayIntro.className = "pagedivhide";
}

