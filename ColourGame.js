//Default Value - Automatically Puts It On Hard Mode 
var numSquares = 6;

//Colours Array
var colours = []; //Empty Colours Array

//Selects The Class/es Which Are Going To Be Changed

//Query Selectors
var squares = document.querySelectorAll(".square"); //Squares
var pickedColour; 
var colourDisplay = document.querySelector("#colourDisplay"); //RGB Values
var message = document.querySelector("#message"); // Message In Center Of Screen (Correct Or Try Again)
var h1 = document.querySelector("h1"); //Name Of The Game Also In The Center Of The Screen
var resetButton = document.querySelector("#reset"); //Reset Buuton
var modeButtons = document.querySelectorAll(".mode");

init();


//Reset Button Event Listener
resetButton.addEventListener("click", function(){
    reset();
});


//Core Functions 

//On Startup The Init Function Funs The SetupMode, Setupsquares and reset functions
function init(){
    setupModeButtons(); // Everytime The Mode Is Changed the setup mode function will run it wil 
    //loop through removing both calss and then readding it to the clicked button using "this".
    setupSquare(); //Checks To See If The Colour Clicked Is The Same As Picked Colour  
    reset();
}



//Sets Up Difficulty
function setupModeButtons(){
    // Mode Button Listener
for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
            this.classList.add("selected"); 
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}



function setupSquare() {
//ForLoop To Add Background Colours To The Squares
for(var i = 0; i < squares.length; i++) {

    //Click Event Listeners For Squares
    squares[i].addEventListener("click", function() {
    
    //grab color of clicked squares
     var clickedColour = this.style.backgroundColor; 

     //compare colours logic  
     if(clickedColour === pickedColour) {
        message.textContent = "Correct"; //Span Tag With Messages
        reset.textContent = "Play Again ????";
        changeColour(clickedColour); //Changes To Clicked Colour, The Function changeColour has been called. Style Of The Background Which Was Clicked Will Change
        h1.style.backgroundColor = clickedColour; //Sets Background colour of h1 area (Top Part)
            } else {
                //If the Colour Selected Does Equal The Picked Colour Then The Following Happens:
                this.style.backgroundColor = "#000000"; // Chnages Colour To The Background Colour Of The Body
                message.textContent = "Try Again"; //Span Tag With Messages
            }
        });
    }
} 


function changeColour (colour) { //function name (variables)
//loop through all squares
for(var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}


function pickColour() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}
    

//Blank Array When random colours are generated they are placed in the array
function generateRandomColours (num) {
//Creating An Empty Array 
    var arr =[];
    //add random numbers to array
    for(var i= 0; i < num; i++) {
    //Array Of Colours 
        arr.push(randomColours());
    }
    return arr;
}


//Selects Random Colours Using RGB
function randomColours() {
   //Red
   var r = Math.floor(Math.random() * 256); // 255 greatest number so * by 1 more than the actual number

   //Green
   var g = Math.floor(Math.random() * 256); // 255 greatest number so * by 1 more than the actual number
   
    //Blue
    var b = Math.floor(Math.random() * 256); // 255 greatest number so * by 1 more than the actual number

    //Creates String
     return "rgb(" + r + ", " + g + ", " + b + ")";
}


//When The Game Runs Or A Player Wins The Board Gets Reset 
function reset() {
    
    colours = generateRandomColours(numSquares);
    
    //pick a new random color from array
    pickedColour = pickColour();
    
    //Resets The RGB Values, Reset Button And Game Status In The Center Of The Screen 
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    message.textContent = "";

    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
    if(colours[i]){
       squares[i].style.display = "block";
       squares[i].style.backgroundColor = colours[i];
    } else {
        squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}