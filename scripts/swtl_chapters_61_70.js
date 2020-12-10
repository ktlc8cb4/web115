// JavaScript Document
/* eslint-disable */

function chapter61() {
	var aVar = document.getElementById("deerMission");
    var counter = 0;
    for(var i = 0; i < aVar.childNodes.length; i++){
		if(aVar.childNodes[i].nodeType === 1){
			counter++;
		}
		if(counter === 2){
			aVar.childNodes[i].innerHTML = "Deer are SUPER cute!";
			break;
		}
	}
}

function chapter62() {
	var deerVar = document.getElementById("deerColor");
	var changeDeer = deerVar.lastElementChild;
	changeDeer.className += " redDeer";
}

function chapter63() {
	var deerVar = document.getElementById("nodeName");
	var changeDeer = deerVar.firstElementChild;
	var elementName = changeDeer.nodeName;
	document.getElementById("guess63").innerHTML = "The element name of the first paragraph is " + elementName;
}

function chapter64() {
	var deerVar = document.getElementById("pCount");
	var pList = deerVar.childNodes;
	var pNum = 0;
	var i; 
	for (i=0;i<pList.length;i++) {
 		if(pList[i].nodeName.toLowerCase() === "p") {
 		pNum++;
 		}
	}
	document.getElementById("guess64").innerHTML = "The number of paragraphs is " + pNum;
}

function chapter65() {
	var deerVar = document.getElementById("guess65");
	var changeDeer = deerVar.firstElementChild;
	changeDeer.setAttribute("class","redDeer");
}

function chapter66() {
	var deerVar = document.getElementById("chapter66");
	var attrList = deerVar.attributes;
	var attrValue = attrList[1].nodeValue;
	document.getElementById("guess66").innerHTML = "The second attribute value of the div is: " + attrValue + ".";	
}

function chapter67() {
	var deerDiv = document.getElementById("addP");
	var pNode = document.createElement("p");
	var text = document.createTextNode("Deer are vegetarians.");
	pNode.appendChild(text);
 	deerDiv.appendChild(pNode);
}

function chapter69() {
	var deer1 = {
 		name: "John",
 		favDish: ["Salad", "Avocado"]
	};	
	var deerFav = "<li>" + deer1.favDish[1] + "</li>" + "<li>" + deer1.favDish[0] + "</li>";
	document.getElementById("guess69").innerHTML = deerFav;
}

function chapter70() {
	var deer1 = {
 		name: "John",
		age: 35,
 		favDish: "Avocado Salad"
	};
	deer1.favDish = "Sweet Potato Fries";
	document.getElementById("favDish").innerHTML = deer1.favDish;	
}

