var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 255)",
	"rgb(0, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[2];
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		var clickedSquare = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedSquare === pickedColor){
			message.textContent = "Correct!";
		}else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	})
}