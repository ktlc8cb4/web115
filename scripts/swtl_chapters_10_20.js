// JavaScript Document for swtl chapters 10 - 20
/* eslint-disable */

		function chapter10() {
		var x = prompt("Please guess a number between 1 to 10");
   		var num = parseInt(x);
   	
   		if (num != 5) {
   		document.getElementById("guess").innerHTML = ("Sorry, Deer. No luck today!");
   		document.getElementById("change").innerHTML = "Guess again!" + "<br>" + "The number is 5.";
   		} else {
   		document.getElementById("guess").innerHTML = ("Congratulations! You just won a Strawberry Milkshake!");
   		document.getElementById("change").innerHTML = "Good job, Deer!";
   	
   		}
   		}

		function chapter11() {
		var x = prompt("Please guess a number between 1 to 10");
   		var num11 = parseInt(x);
   	
   		if (num11 >= 5) {
   		document.getElementById("guess11").innerHTML = ("Sorry, Deer. No luck today!");
   		document.getElementById("change11").innerHTML = "Guess again!" + "<br>" + "Any number less than 5.";
   		} else {
   		document.getElementById("guess11").innerHTML = ("Congratulations! You just won a Vegan Burger!");
   		document.getElementById("change11").innerHTML = "Good job, Deer!";
   	
   		}
   		}
  

		function chapter12() {
		var x = prompt("Will you try our new papaya salad?");  	
   		if (x === "YES") {
   		document.getElementById("guess12").innerHTML = ("Alright, free papaya salad sample for you!");
   		document.getElementById("change12").innerHTML = "Thank you!";
   		} else if (x === "yes") {
   		document.getElementById("guess12").innerHTML = ("Alright, free papaya salad sample for you!");
   		document.getElementById("change12").innerHTML = "Thank you!";  	
   		} else {
		document.getElementById("guess12").innerHTML = ("No papaya salad for you!");  	
		}
   		}
      

		function chapter13() {
		var x = prompt("Please type in broccoli, all in lowercase."); 
		var y = prompt("Please type in tomatoes, all in lowercase."); 
   		if ((x === "broccoli") && (y === "tomatoes")) {
   		document.getElementById("guess13").innerHTML = ("Alright, free tomato sandwich with a side of broccoli and cheese!");
   		document.getElementById("change13").innerHTML = "Thank you!";
   		} else {
		document.getElementById("guess13").innerHTML = ("Nope!");
		document.getElementById("change13").innerHTML = "What do you love?";			
		}
   		}
      

		function chapter15() {
			var y = ["veggie wrap", "faux shrimp tempura", "tomato mania", "grilled cheese sandwich", "banaba wrap"];
		var x = prompt("Please pick the number corresponding to the menu items."); 
					 var userInput = parseInt(x) - 1;
   		document.getElementById("guess15").innerHTML = ("A " + y[userInput] + " is on the way.");
   		document.getElementById("change15").innerHTML = "Order more";
   		}
     

		function chapter16() {
			var available = ["banana bread", "sweet potato fries"];
		var x = prompt("Please pick the number corresponding to the items to add items"); 
					 var userInput = parseInt(x);
   		document.getElementById("guess16").innerHTML = ("A " + available[userInput - 1] + " has been added to your order.");
   		document.getElementById("change16").innerHTML = "Add more items";
   		}
      

			
			var available = ["Veggie wrap", "Papaya salad", "Large Pepsi", "Banana bread", "Sweet potato fries"];
		function chapter17() {
			
		var y = prompt("Please pick a number corresponding to your order list to remove it"); 
					 var userInput = parseInt(y) - 1;
			available.splice(userInput, 1);
			document.getElementById("guess17").innerHTML = ("Your new order includes: ");
			var text = "";
		var i;
			if (available.length >= 1) {
		for (i = 0; i < available.length; i++) {			 
  			text += "<li>" + available[i] + "</li>";
				document.getElementById("newOrder").innerHTML = text;			
			}  		
			
   		document.getElementById("change17").innerHTML = "Remove More Items!";
			
   		} else {
			document.getElementById("stop").innerHTML = "Sorry, but we can't remove any more items!";
			document.getElementById("change17").innerHTML = "Thank You!";
			
		}
		}
     
		
		function chapter18() {		
		var y = prompt("Please enter your name."); 
			var text = "";
			var i;
		for (i = 0; i < 5; i++) {			 
  			text += "<li>" + "Welcome " + y + " to the Vegan Deer!" + "</li>";
				document.getElementById("list18").innerHTML = text;			
			}  				
		}
    

				
			function chapter19() {	
				var deerName = ["Diedra", "Tiffany", "William", "Greg"];	
				var deerMatch = false;	
				var y = prompt("Please enter your first name."); 
					var i;
					for (i = 0; i < deerName.length; i++) {
							if (deerName[i] === y) { 
								document.getElementById("guess19").innerHTML = "Well, " + y + ", you are one of us!";
								document.getElementById("change19").innerHTML = "Thank You!";
								deerMatch = true; 
								break;
								} } 
							if (deerMatch === false) {
								document.getElementById("guess19").innerHTML = "Well, " + y + ", why are you not on our list!";
							}  }
    
  

		
		function chapter20() {
			var i;
			var text = "";
var j;
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
	  text += "Lunch is served!" + "<br>";
	  document.getElementById("guess20").innerHTML = text;
} } }
		
   
  
       