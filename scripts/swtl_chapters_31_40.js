// JavaScript Document for swtl chapters 31 - 39
/* eslint-disable */


		function chapter31() {
		var timeNow = new Date();	
   		document.getElementById("guess31").innerHTML = "It's " + timeNow +"!";
   		}


		function chapter32() {
			var deerDate = new Date();
			var deerHour = deerDate.getHours();
			var deerMinute = deerDate.getMinutes();
			//var deerMinute = ((deerDate.getMinutes()<10?'0':'') + deerDate.getMinutes()); 
			var deerSecond = deerDate.getSeconds();
			//document.getElementById("guess32").innerHTML = "The time is " + deerHour + ":" + deerMinute + ":" +   deerSecond;
			
			document.getElementById("guess32").innerHTML = "The time is " + deerHour + ":" + ((deerDate.getMinutes()<10?'0':'') + deerDate.getMinutes()) + ":" +   ((deerDate.getSeconds()<10?'0':'') + deerDate.getSeconds());
			} 	

		function chapter33() {
			var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var deerBirthday = new Date("October30,2020")
			var birthdayMonth = monthArray[deerBirthday.getMonth()];
			var birthdayDate = deerBirthday.getDate();
			var birthdayYear = deerBirthday.getFullYear();
			document.getElementById("guess33").innerHTML = "Our birthday party will be on " + birthdayMonth + " " + birthdayDate + ", " + birthdayYear + ".";
		
		}
   		
   
		function chapter34() {
			var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			var deerBirthday = new Date();
			deerBirthday.setDate(30);
			deerBirthday.setMonth(9);
			deerBirthday.setHours(6);deerBirthday.setMinutes(0);deerBirthday.setSeconds(0);
			document.getElementById("guess34").innerHTML = deerBirthday;
   		}

		function chapter35() {
			var deerName = prompt("Please enter your name", "Kim");
			document.getElementById("guess35").innerHTML = "Welcome to The Vegan Deer, " + deerName + "!";
		}

//global variable: deerNameArray
var deerNameArray = [["Mark"," 23"], ["Christy", " 34"], ["Devon", " 31"]];
		function chapter36() {			
			var name = prompt("Please enter name", "Kim");
			var y = prompt("please enter age", "45");
			var age = " " + y;
			function addDeerMember(name, age){				
				document.getElementById("guess36").innerHTML = "Thank you. You are added to our member list.";
				deerNameArray.push([name, age]);
				return deerNameArray;
			}
			addDeerMember(name,age);
			var text = "";
				var i;
			for (i=0; i<deerNameArray.length; i++) {
					text += "<li>" + deerNameArray[i] + "</li>";
				document.getElementById("list36").innerHTML = text; 
			}
			document.getElementById("change36").innerHTML = "Add More Member";
		}


		function chapter37() {
			var x = prompt("Please enter a number", "2");
			var y = prompt ("Please enter another number", "2");
			var firstNum = parseInt(x);
			var secondNum = parseInt(y);
			function addDeer(firstNum, secondNum) {
				return firstNum + secondNum;
			}
			var deerNum = addDeer(firstNum, secondNum);
			document.getElementById("guess37").innerHTML = "Our function has returned a value of: " + deerNum + ".";
		}

		function chapter38() {
			var deerNum = 10; // global var deerNum

			function newDeerNum() {
  			var deerNum = 12; // local var deerNum
  			return deerNum;
			}

			function whatIsDeerNum(){
  			return deerNum;
			}

			/* calling function whatIsDeerNum to see
   				which one it will return */

			var globalDeerNum = whatIsDeerNum();

			/* log the deerNum that whatIsDeerNum 
   			returns */
			console.log(globalDeerNum);	
			document.getElementById("guess38").innerHTML = "The variable deerNum that whatIsDeerNum accesses successfully is: " + globalDeerNum + ".";
		}


		function chapter39() {
			var deerName = prompt("Please enter your name", "Kim");
			switch(deerName) {
				case"Mark":
					document.getElementById("guess39").innerHTML = "Hello there, "+ deerName + ".";
					break;
				case"Christy":
					document.getElementById("guess39").innerHTML = "Hello there, "+ deerName + ".";
					break;
				case"Greg":
					document.getElementById("guess39").innerHTML = "Hello there, "+ deerName + ".";
					break;
				case"DI":
					document.getElementById("guess39").innerHTML = "Hello there, "+ deerName + ".";
					break;
				default:
					document.getElementById("guess39").innerHTML = "Well, hello there stranger!";
					break;
			}			
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
		
  
