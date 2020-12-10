// JavaScript Document
/* eslint-disable */

function chapter41() {
	var i = 0;
	var text = "";
	while(i<5) {
		text += "Welcome to The Vegan Deer!" + "<br>";		
		i++;
	}
	document.getElementById("guess41").innerHTML = text;
}

function chapter42() {
	var i = 6;
	var text = "";
	do {
		text += "Cheese" + "<break>";
		i++;
	} while(i<5);
	document.getElementById("guess42").innerHTML = text + "<br>" + "See, our favorite ingredient " + text + " is printed out just one time.";
}

function chapter45() {
	document.getElementById("guess45").innerHTML = "A place for gentle dining!";
}

function chapter49() {
	var lunch = document.getElementById("lunch").value;
	var newLunch = lunch.toUpperCase();
	document.getElementById("guess49").innerHTML = "A dish of " + newLunch + " is coming up.";
}

function chapter50() {
	var order = document.getElementById("order").value;
	var finalOrder = order.toLowerCase();
	var side;
	if (finalOrder === "veggie burger") {
		side = "Sweet potato fries";
	} else {
		side = "Potato salad";
	}
	document.getElementById("side").value = side;
	finalOrder = finalOrder.toUpperCase();
	side = side.toUpperCase();
	document.getElementById("guess50").innerHTML = "Your order is:"; 
	document.getElementById("list50").innerHTML = "<li>" + finalOrder + "</li>" + "<li>" + side + "</li>";	
}