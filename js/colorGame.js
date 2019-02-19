var numSquares = 6
var colors = generatRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
}

function reset(){
	//generate all new colors
	colors = generatRandomColor(numSquares);
	//pick a new random color for array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squars
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			//add initial colors to squares
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}
	
	}
	//change h1 background color
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New colors";
}

// btnEasy.addEventListener("click", function() {
// 	btnEasy.classList.add("selected");
// 	btnHard.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generatRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display ="none";
// 		}
// 	}
// });

// btnHard.addEventListener("click", function() {
// 	btnHard.classList.add("selected");
// 	btnEasy.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generatRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display ="block";
// 	}
// });

resetButton.addEventListener("click", reset);

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
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
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
	return "rgb(" + r + ", " + g + ", " + b + ")";
}