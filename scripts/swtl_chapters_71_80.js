// JavaScript Document
/* eslint-disable */

function chapter71() {
	var answer = prompt("Please enter your age", 70);
	var deerAge = parseInt(answer);
	var deer = {
		age: deerAge,
		deerDiscount: function() {
			if (this.age > 65) {
				return ("Your discount is " + Math.round(5 + (.05 * this.age))) + " dollars.";
			} else {
				return "Well, our young Deer don't need any discount!";
			}
		}
	};	
    document.getElementById("guess71").innerHTML = deer.deerDiscount();
}


// Constructor for Deer for chapter 73

function Deer(name, age, favDish) {
	this.name = name;
	this.age = age;
	this.deerDiscount = function() {
		if (this.age > 65) {
				return ("Your discount is " + Math.round(5 + (.05 * this.age))) + " dollars.";
			} else {
				return "Well, our young Deer don't need any discount!";
			}
	};
}

function chapter73(){
	var nameAnswer = prompt("Please enter your name", "John");
	var ageAnswer = prompt("Please enter your age", 70);
	var deerAge = parseInt(ageAnswer);
	var newDeer = new Deer(nameAnswer, deerAge);
	newDeer.deerDiscount();
    document.getElementById("guess73-1").innerHTML = newDeer.deerDiscount();	 
	document.getElementById("guess73").innerHTML = "Welcome to The Vegan Deer, " + newDeer.name + "!";	
}

function chapter75() {
	var deerProfile1 = {
		name: "John",
		age: 23,
		favorite: "Salad"
	};
	var userAnswer = prompt("Please enter the property you want to check", "name");
	var userInput = userAnswer.toLowerCase();
	var checkProperty = userInput in deerProfile1;
	 if(checkProperty) {
		 document.getElementById("guess75").innerHTML = `Yes, our deer profile has the property "${userInput}".`;		 
	 } else {
		 document.getElementById("guess75").innerHTML = `No, our deer profile doesn't have the property "${userInput}".`;	 	 
	 }	
}

function chapter76() {
	window.location.href = "https://www.google.com/search?q=cute+deer+baby&tbm=isch&ved=2ahUKEwi98fjMjILtAhUNEVMKHSq4AngQ2-cCegQIABAA&oq=cute+deer+baby&gs_lcp=CgNpbWcQAzICCAAyAggAMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjoECAAQQzoFCAAQsQM6BwgAELEDEEM6BggAEAUQHlDkLFjROmCIPGgAcAB4AIABYogB8geSAQIxMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=5tWvX73mJY2izAKq8IrABw&bih=500&biw=1088";
}

function chapter77() {
	window.location.assign("https://www.google.com/search?q=cute+deer+baby&tbm=isch&ved=2ahUKEwi98fjMjILtAhUNEVMKHSq4AngQ2-cCegQIABAA&oq=cute+deer+baby&gs_lcp=CgNpbWcQAzICCAAyAggAMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjoECAAQQzoFCAAQsQM6BwgAELEDEEM6BggAEAUQHlDkLFjROmCIPGgAcAB4AIABYogB8geSAQIxMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=5tWvX73mJY2izAKq8IrABw&bih=500&biw=1088");
}

function chapter78(){
	window.history.back();
}

function chapter79() {
	var popUp = window.open();
	var deerGreeting = "<link rel = 'stylesheet' type = 'text/css' href = 'styles/swtl_chapters_61_70.css' /> <h1 class='popUpGreeting'>Welcome to The Vegan Deer!</h1>";
	popUp.document.write(deerGreeting);
}

function chapter80() {
	var popUp = window.open("", "someName","width=600,height=400,left=350,top=100");
	var deerGreeting = "<link rel = 'stylesheet' type = 'text/css' href = 'styles/swtl_chapters_61_70.css' /> <h1 class='chapter80'>Welcome to The Vegan Deer!</h1>";
	popUp.document.write(deerGreeting);
}


