// JavaScript Document
/*eslint-disable*/

function chapter51() {
	document.getElementById("guess51").innerHTML = "Deer are gentle creatures, so gentle that the word we use to call our loved one, Dear, sounds just like Deer. They are also herbivorous. The aspiration at the <span class='fontAlmendraDisplay bold'>The Vegan Deer</span> is to provide a gentle place for dining, just like the gentle grassland that the Deer graze on.";
}

function chapter52() {
	document.getElementById("guess52").className += " redDeer";
}

function chapter53() {
	document.getElementById("guess53").src = "images/deereatinggrass.jpg";
	document.getElementById("guess53").className = "imgsize";
	document.getElementById("guess53").alt = "A deer grazing on grass";
	document.getElementById("guess53_1").innerHTML = "A deer grazing on grass";
}

function chapter54() {
	var deerPic = document.getElementById("guess54"); 
	deerPic.src = "images/deereatinggrass.jpg";
	deerPic.className = "imgsize";
	var figcap = document.getElementById("guess54_1");
	figcap.innerHTML = "A deer grazing on grass";	 
}

function chapter55() {
	document.getElementById("guess55").style.fontSize = "5rem";
	document.getElementById("guess55").style.paddingRight = "15px";
	
}


function chapter56() {	
	var idDiv = document.getElementById("guess56");
	var deerPara = idDiv.getElementsByTagName("p");
	deerPara[2].className += " redDeer";
}

function chapter57() {
	var menuDiv = document.getElementById("ul57");
	var menuItem = menuDiv.getElementsByTagName("li");
	menuItem[0].innerHTML = "Broccoli and cheese";
	menuItem[1].innerHTML = "Egg salad";
	menuItem[2].innerHTML = "Tofu dog";
	menuItem[3].innerHTML = "Veggie burger";
	menuItem[4].innerHTML = "Zesty zoodles";
	menuItem[5].innerHTML = "Pumpkin soup";
	menuItem[6].innerHTML = "Potato salad";
	menuItem[7].innerHTML = "Sweet potato fries";
	var randomNum = Math.floor(Math.random() * 8);
	var discountItem = menuItem[randomNum].innerHTML;
	menuItem[randomNum].innerHTML = "<span class='demoP'>Your free item is " + discountItem + ".</span>";
	
}

function chapter60() {
	var deerDiv = document.getElementById("div60");	
	var secondSentenceText = deerDiv.childNodes[3].innerHTML;
    //deerDiv.childNodes[3].innerHTML = "Deer are super cute!";
	deerDiv.childNodes[3].innerHTML = '<span class="redDeer"><figure> <img alt="a deer standing in the woods" src="images/deer.jpg"><figcaption>Deer are super cute!</figcaption></figure></span>';
}