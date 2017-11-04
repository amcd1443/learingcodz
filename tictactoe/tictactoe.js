
var playersTurn = document.getElementById('playersTurn'); //playersTurn equals the HTML ID playersTurn
var xScore = document.getElementById('xScore');
var oScore = document.getElementById('oScore');

var isXTurn = true;

var clickHandler = function() { //start of function that handles how clicking will work
	this.style.backgroundColor = 'blue'; //this specific variable (to clickHandler) 
										 //style.backgroundColor, changes background to blue
	this.innerHTML = "X"; //this specific variable (to clickHandler) changes the innerHTML text to X
	playersTurn.innerHTML = "Player O's turn"; //changes text in playersTurn to Player O's turn

	if (isXTurn == false) {	//if global variable isXTurn is false run the following code
		this.innerHTML = "O";	//change innerHTML of clicked object to 0 (zero)
		this.style.backgroundColor = 'orange';	//change backgroundColor to Orange
		playersTurn.innerHTML = "Player X's turn"; //change text to Player Xs Turn
	};
	isXTurn = !isXTurn;	//IF isXTurn true make false, ELSE make false true

	checkIfWinner();
	scoreTracker();
};

var checkIfWinner = function() {
	var box0 = document.getElementById('box0');
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var box6 = document.getElementById('box6');
	var box7 = document.getElementById('box7');
	var box8 = document.getElementById('box8');

	var stringBase = "better way for ";
	var stringTail = " to win";	
	var displayString = null;
	//X horizontal wins
	if ( (box0.innerHTML == box1.innerHTML) && (box0.innerHTML == box2.innerHTML) ) { 	//this says that what ever innerHTML is set to will check the,
		displayString = stringBase + box0.innerHTML + stringTail;			//other two boxes if they match, equals win
	}
	if ( (box3.innerHTML == box4.innerHTML) && (box3.innerHTML == box5.innerHTML) )	{
		displayString = stringBase + box3.innerHTML + stringTail;
	}
	if ( (box6.innerHTML == box7.innerHTML) && (box6.innerHTML == box8.innerHTML) ) {
		displayString = stringBase + box6.innerHTML + stringTail;
	}

	//X Diagonal Wins
	if ( (box0.innerHTML == box4.innerHTML) && (box0.innerHTML == box8.innerHTML) ) {
		displayString = stringBase + box0.innerHTML + stringTail;
	}
	if ( (box2.innerHTML == box4.innerHTML) && (box2.innerHTML == box6.innerHTML) ) {
		playersTurn.innerHTML = stringBase + box2.innerHTML + stringTail;
	}

	//X Vertical win: comparing box0 to box3, and box6
	if ( (box0.innerHTML == box3.innerHTML) && (box0.innerHTML == box6.innerHTML) )	{
		playersTurn.innerHTML = stringBase + box0.innerHTML + stringTail;
	}
	if ( (box1.innerHTML == box4.innerHTML) && (box1.innerHTML == box7.innerHTML) ) {
		playersTurn.innerHTML = stringBase + box1.innerHTML + stringTail;
	}
	if ( (box2.innerHTML == box5.innerHTML) && (box2.innerHTML == box8.innerHTML) ) {
		playersTurn.innerHTML = stringBase+ box2.innerHTML + stringTail;
	}

	if (displayString != null) {
		playersTurn.innerHTML = displayString;
	}
};

var scoreTracker = function()	{
	var x = 0;
	var o = 0;
	if (playersTurn.innerHTML == "better way for O to win") {	//adds 1 to O's score when player O gets 3 in a row
	console.log("plus 1 to player O's score");
	o++;
	oScore.innerHTML = o;
	}
	if (playersTurn.innerHTML == "better way for X to win") {	//adds 1 to X's score when player X gets 3 in a row
	console.log("plus 1 to player X");
	x++;
	xScore.innerHTML =  x;
	}

};

var resetGameArea = function(){
	document.getElementById('box0').innerHTML = "";
	console.log("reset gameArea clicked");
}


for (var i = 0; i < 9; i++) { 
	var box = document.getElementById("box" + i);	//var box is box+(what ever i is = to starts 0 ends 8)
	box.style.cursor = 'pointer';	//changes the style of the mouse cursor to a pointer
	box.onclick = clickHandler;	//when you click a box it runs the clickHandler function above
};

//Homework
//decide winner - done
//eliminate double clicking that changes the sign
//keep score? need reset button to finish
//reset the game with a button -- resets gameArea, and another to reset the scoreBoard


