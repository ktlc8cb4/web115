// JavaScript Document for swtl chapters 21 - 30
/* eslint-disable */


		function chapter21() {
		var x = prompt("Please enter your name in lower-case.", "kim"); 	
   		document.getElementById("guess21").innerHTML = "Hello deer " + x.toUpperCase() +"!";
   		}


		function chapter22() {
		var x = prompt("Please enter your first name.", "kim");
		var firstChar = x.slice(0, 1);
		var otherChar = x.slice(1);
		firstChar = firstChar.toUpperCase();
		otherChar = otherChar.toLowerCase();
		x = firstChar + otherChar;
		var i;
		var matchFlag = false;
		for (i = 0; i < x.length; i++) {
			if (x[i] === "H" || x[i] === "h") {
				document.getElementById("guess22").innerHTML = "Yay " + x + ", We have an 'H'.";
				matchFlag = true;
				break;
			} 
							
			} if (matchFlag === false) { 
				document.getElementById("guess22").innerHTML = "Uhmm " + x + ", we don't have an 'H'.";
		}
		}
   		

		function chapter23() {
		var text = prompt("Please enter your favorite sentence.", "We are The Vegan Dear");
		var textOriginal = text;	
		var text1 = text.toLowerCase();
		var textToChange = prompt("Please enter the word in the sentence you want to change.", "Dear");	
		var textToChange1 = textToChange.toLowerCase();
		var changeTo = prompt("Please enter the word you want to change it to.", "Deer");				
		var firstChar = text1.indexOf(textToChange1);
		if (firstChar !== -1){
			text = text.slice(0, firstChar) + " " + changeTo + text.slice(firstChar + textToChange.length);
		}
		document.getElementById("guess23-2").innerHTML = "This is your original sentence: " + textOriginal + ".";
		document.getElementById("guess23").innerHTML = "This is your new sentence: " + text + "."; 
		}
   		
   
		function chapter24() {
		var text = prompt("Please enter your message.", "We love you!");
		var i;
		var oNum = 0;
		for (i = 0; i < text.length; i++) {
			if (text.charAt(i) === "O" || text.charAt(i) === "o") {
				oNum = ++oNum;
			}
		}
			document.getElementById("guess24").innerHTML = "There are " + oNum + " O's in your message."
   		}

		function chapter25() {
			var verb = prompt("Please enter your favorite verb", "eat");
			var toBeText = "To be or not to be, Vegan Deer!";
			var newToBeText = toBeText.replace(/be/g, verb);
			document.getElementById("guess25").innerHTML = "This is our original question: " + toBeText;
			document.getElementById("guess25_1").innerHTML = "This is our new question: " + newToBeText;
		}

		function chapter26() {
			var x = prompt("Give us a decimal", 8.59);
			var decimal = parseFloat(x);
			var newDecimal = Math.round(decimal);
			document.getElementById("guess26").innerHTML = decimal + " is rounded to " + newDecimal + ".";
		}

		function chapter27() {
			var burgerPrice = (Math.random() * 6) + 1;
			burgerPrice = Math.floor(burgerPrice);	
			document.getElementById("guess27").innerHTML = "The burger price today is: &#36;" + burgerPrice + ".";
		}

		function chapter28() {
			var x = prompt("How many deer do we have?", "3");
			var numOfDeer = parseInt(x);
			document.getElementById("guess28").innerHTML = "Awesome! we have "+ numOfDeer + " Deer.";
		}

		function chapter29() {
			var x = prompt("Please enter the tip amount", "3");
			var deerTip = Number(x);
			var totalBill = deerTip + 23.98;
			document.getElementById("guess29").innerHTML = "Thank you! The total is: &#36;"+ totalBill + ",  Deer.";
		}

		function chapter30() {
			var x = prompt("Please enter the tip percentage", "15");
			var subTotal = 23.69;
			var total = ((Number(x) / 100) * subTotal) + subTotal;
			var totalString = total.toString();
			if (totalString.charAt(totalString.length - 1) === "5") {
				totalString = totalString.slice(0, totalString.length-1) + "6";
			}
			total = Number(totalString);
			var finalTotal = total.toFixed(2);
			document.getElementById("guess30").innerHTML = "Hi Deer. Your total with tip is: " + finalTotal + "."; 
		}
		
  
