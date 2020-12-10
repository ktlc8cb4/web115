// JavaScript Document swtl chap 1-9
/* eslint-disable */

function chapter1() {
	alert("Hello my Deer! We are eating banana splits today!");
		}
		
function chapter2() {
	var name = prompt("Please enter a name", "Kay");
	var originalName = name;
	name = prompt("Please enter another name", "May");
	var secondName = name;
    document.getElementById("guess2").innerHTML = "The original name was " + originalName + ".";   
	document.getElementById("guess21").innerHTML = "It is now changed to " + secondName + ".";  
		}

function chapter3() {
	var x = prompt("Please enter a number", "2");
	var originalNum = parseInt(x);
	var y = prompt("Please enter another number", "2");
	var secondNum = parseInt(y) + originalNum;
    document.getElementById("guess3").innerHTML = "The original number was " + originalNum + ".";   
	document.getElementById("guess31").innerHTML = "Added to the second number, it is now " + secondNum + ".";  
		}

function chapter5() {
	var x = 10 % 4;
    document.getElementById("guess5").innerHTML = "10 % 4 is " + x + ".";   
		}

function chapter6() {
	var deerNum = 2 ;
	var newDeerNum = ++deerNum;	
    document.getElementById("guess6").innerHTML = "newDeerNum is " + newDeerNum + ".";   
		}

function chapter6_1() {
	var deerNum = 2 ;
	var newDeerNum = deerNum++;	
    document.getElementById("guess6_1").innerHTML = "newDeerNum is " + newDeerNum + ".";   
		}

function chapter7() {
	var deerNum = (2 + 2) * 3;
    document.getElementById("guess7").innerHTML = "deerNum is " + deerNum + ".";   
		}




function example1() {
	alert("Hello" + "my Deer!");
		}
		

function example2() {
	alert("Hello " + "my Deer!");
		}


function example3() {
	alert("We have " + 2 + 2 + " Vegan Deer here.");
		}

function chapter9() {
	var number = prompt("How many dollars are you willing to donate to rescue a baby deer?", "1");
    document.getElementById("freeBanana").innerHTML =
    "Congratulations! You get " + number + " free banana splits today!";  
		}
		
		
	