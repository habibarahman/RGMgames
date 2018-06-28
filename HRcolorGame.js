var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
  //mode button event listeners
    setUpModeButton();
    setupSquares();
    reset(); 
  };

 function setupSquares(){
   for (var i = 0; i < squares.length; i++) {
//add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
       if (clickedColor === pickedColor) {
          messageDisplay.textContent = "correct!!"
          resetButton.textContent = "play Again";
            changeColor(clickedColor);
           h1.style.background = clickedColor; 
        }else{
          this.style.background = "#232323";
          messageDisplay.textContent = "Try Again"
        }
    });
  }
 }
  
  
  function setUpModeButton(){
   for (var i = 0; i < modeButton.length; i++) {
  modeButton[i].addEventListener("click", function(){
    modeButton[0].classList.remove("selected");
    modeButton[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numberOfSquares = 3:
     numberOfSquares = 6;
    // if (this.textContent === "Easy") {
    //   numOfSquares = 3;
    // }else{
    //   numOfSquares = 6;
    // }
    reset();
    //figure out how many squares to show
    //pick new colors
    //pick a new pickedColor
    //update page to reflect changes
  });
  }
}






function reset(){
   colors = generateRandomColors(numberOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //chamge colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";

  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display ="block";
      squares[i].style.background = colors[i]; 
    }else{
      squares[i].style.display ="none";
    }
    
  }
  h1.style.background = "steelblue";
}



// EasyButton.addEventListener("click" , function(){
//    HardButton.classList.remove("selected");
//    EasyButton.classList.add("selected");
//    numberOfSquares = 3;
//    //generate all new colors 
//   colors = generateRandomColors(numberOfSquares);
//   //pick a new random color from array
//   pickedColor = pickColor();
//   //chamge colorDisplay to match picked color
//   colorDisplay.textContent = pickedColor;
//   //change colors of squares
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.background = colors[i];
//     }else{
//       squares[i].style.display = "none";
//     }
//   }
// });

// HardButton.addEventListener("click" , function(){
//    EasyButton.classList.remove("selected");
//    HardButton.classList.add("selected");
//    numberOfSquares = 6;
//    //generate all new colors 
//   colors = generateRandomColors(numberOfSquares);
//   //pick a new random color from array
//   pickedColor = pickColor();
//   //chamge colorDisplay to match picked color
//   colorDisplay.textContent = pickedColor;
//   //change colors of squares
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.background = colors[i];
//      squares[i].style.display = "block";
//   }

// });


resetButton.addEventListener("click" , function(){
 reset();
})

function changeColor(color){
	//loop through all squares
for (var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.background = color;
  }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];

}


function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	 	// get random color and push into arr
    } 
	//return that array
	return arr;
}


function randomColor(){
   //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
   //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
   //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}