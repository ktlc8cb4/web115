// JavaScript Document
/* eslint-disable */

		function fizzbuzz01() {
		var x = document.getElementById("fname").value;	
			var z = document.getElementById("middleinitial").value;
			var y = document. getElementById("lname").value;
		document.getElementById("greeting").innerHTML = "Welcome to The Vegan Deer " + x + " " + z + " " + y +"!";		 
		var text = "";
		var i;
		for (i = 1; i < 126; i++) {			
		if (i<10) { 		
			text += "&nbsp;&nbsp;&nbsp;&nbsp;" + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today!" + "<br>";} else if (i<100) {text += "&nbsp;&nbsp;" + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today!" + "<br>";	
		} else {text += i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today!" + "<br>"; }
		document.getElementById("loop1").innerHTML = text; }
		}
			
		function fizzbuzz02() {
		var x = document.getElementById("fname").value;	
			var z = document.getElementById("middleinitial").value; 
			var y = document. getElementById("lname").value;		
		document.getElementById("greeting").innerHTML = "Welcome to The Vegan Deer " + x + " " + z + " " + y +"!";
		 var userInput = prompt("How high you do want to count " + x + "?");
			var num = parseInt(userInput);
		var text = "";
		var i;
		for (i = 1; i < num + 1; i++) {			
			if (i<10 && i%2==0) { 
			
  			text += "&nbsp;&nbsp;&nbsp;  " + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is even." + "<br>";
				
			} else if (i<10 && i%2!=0) {
				text += "&nbsp;&nbsp;&nbsp;  " + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is odd." + "<br>";
				
			} else if (i<100 && i%2==0) {
				text += "&nbsp;&nbsp;" + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is even." + "<br>";
							   
			} else if (i<100 && i%2!=0) {
				text += "&nbsp;&nbsp;" + i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is odd." + "<br>";
			
			
			} else if (i>100 && i%2==0) {
				text += i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is even." + "<br>"; 
			
			} else if (i>100 && i%2!=0) {
				text += i + ".&nbsp;&nbsp;&nbsp;Please, enter our vegan recipe contest today! - The number is odd." + "<br>"; 
			
			}
			
			
			document.getElementById("loop1").innerHTML = text; 
		}
		}
							
  