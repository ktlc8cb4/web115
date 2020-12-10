// JavaScript Document
/* eslint-disable */
	
function fizzbuzz3() {
		var x = document.getElementById("fname").value;
		var z = document.getElementById("middleinitial").value;
		var y = document. getElementById("lname").value;
		document.getElementById("greeting").innerHTML = "Here is our menu, " + x + " " + z + " " + y +"!";		 
		var text = "";
	    var sampleText = "";
		var i;
		var num1 = 3;
		var num2 = 5;
		var num3 = 7;
		for (i=1; i<141; i++) {
				if (check(i, num1)){
					sampleText = "class='num3'>&nbsp;&nbsp;&nbsp;Avocado</li>";
					if (check(i, num2)) {
						sampleText = "class='num3-5'>&nbsp;&nbsp;&nbsp;Avocado Salad</li>";
						if (check(i, num3)) {
						sampleText = "class='allNumber'>&nbsp;&nbsp;&nbsp;Avocado Salad Special</li>";
						}
					} else {
						if (check(i, num3)) {
						sampleText= "class='num3-7'>&nbsp;&nbsp;&nbsp;Avocado Special</li>";
						} 					
					}
				} else {
					if (check(i, num2)) {
						sampleText= "class='num5'>&nbsp;&nbsp;&nbsp;Salad</li>";
						if (check(i, num3)) {
						sampleText= "class='num5-7'>&nbsp;&nbsp;&nbsp;Salad Special</li>";
						}
					} else {
						if (check(i, num3)) {
						sampleText= "class='num7'>&nbsp;&nbsp;&nbsp;Special</li>";
						} else {
						sampleText = ">&nbsp;&nbsp;&nbsp;Broccoli</li>";
						} 						
					}
				} 
			text += "<li " + sampleText;				
		}
		document.getElementById("menu").innerHTML = text;
}
				
					

function check(num1, num2) { 
	if(num1 % num2 === 0) {
		return true;
	} else {
		return false;
	}
}
							
  