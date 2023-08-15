var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function randomColor() {
	var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	return randomColor;
}

function randomise() {
	color1.value = randomColor();
	color2.value = randomColor();

	setGradient(color1, color2);
}

function setGradient(first, second) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ first.value 
	+ ", " 
	+ second.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.onload = function() {
	randomise();	
}

button.addEventListener("click", function() {
	randomise();
});


color1.addEventListener("input", function() {
	setGradient(color1, color2);
});

color2.addEventListener("input", function() {
	setGradient(color1, color2);
});