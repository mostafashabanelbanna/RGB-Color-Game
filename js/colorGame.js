var colors = generatRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			message.textContent = "Correct!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generatRandomColor(num) {
	//make array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 266);
	var g = Math.floor(Math.random() * 266);
	var b = Math.floor(Math.random() * 266);
	return "rgb(" + r + "," + g + "," + b + ")";
}