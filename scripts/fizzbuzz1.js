// JavaScript Document
/* eslint-disable */

		function fizzbuzz1() {
		var x = document.getElementById("fname").value;
			var z = document.getElementById("middleinitial").value;
			var y = document. getElementById("lname").value;
		document.getElementById("greeting").innerHTML = "Here is our menu, " + x + " " + z + " " + y +"!";		 
		var text = "";
		var i;
		for (i = 1; i < 141; i++) {
			if (((i % 3) === 0) && ((i % 5) === 0)){
			text+= "<li class='lightGold'>" + "&nbsp;&nbsp;&nbsp;Avocado Salad" + "</li>";
		} else if (((i % 3) === 0) && ((i % 5) !== 0)) {
			text+= "<li class='lightGreen'>" + "&nbsp;&nbsp;&nbsp;Avocado" + "</li>";
		} else if (((i % 3) !== 0) && ((i % 5) === 0)) {
			text+= "<li class='lightYellow'>" + "&nbsp;&nbsp;&nbsp;Salad" + "</li>";			
		} else {
			text+= "<li>" + "&nbsp;&nbsp;&nbsp;Broccoli" + "</li>";	
		}
			document.getElementById("menu").innerHTML = text;
		}
		}
		
		
							
  