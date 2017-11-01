
var playersTurn = document.getElementById('playersTurn'); //playersTurn equals the HTML ID playersTurn
var isXTurn = true;

var clickHandler = function() { //start of function that handles how clicking will work
	this.style.backgroundColor = 'blue'; //this specific variable (to clickHandler) 
										 //style.backgroundColor, changes background to blue
	this.innerHTML = "X"; //this specific variable (to clickHandler) changes the innerHTML text to X
	playersTurn.innerHTML = "Player O's turn"; //changes text in playersTurn to Player O's turn
	i++
	
	if (isXTurn == false) {	//if global variable isXTurn is false run
		this.innerHTML = "O";	//change innerHTML of clicked object to 0 (zero)
		this.style.backgroundColor = 'orange';	//change backgroundColor to Orange
		playersTurn.innerHTML = "Player X's turn"; //change text to Player Xs Turn
	};
	isXTurn = !isXTurn;	//isXturn NOT isXTurn which means it changes isXturn from T to F, and F to T
	// if (this.innerHTML == 'X' && ("box"+(i - 9)) == 'box0') {
	// 	console.log(document.getElementById('box0').id, " has an X");	
	// } else {
	// 	console.log(document.getElementById('box1').id + " has a 0");
	// };
	console.log("box"+i); //on click logs box9(what ever value 'i' is)
};


for (var i = 0; i < 9; i++) { //conditions for the For loop
	
	var box = document.getElementById("box" + i);	//variable box is box+(what ever i is = to starts 0 ends 8)
	box.style.cursor = 'pointer';	//changes the style of the mouse cursor to a pointer
	box.onclick = clickHandler;	//when you click a box it runs the clickHandler function above
};

//Homework
//decide winner
//eliminate double clicking that changes the sign
//keep score?
//reset the game


//if (any three boxes in a row == X || 0 ) = winner;
//move i++ out of the var condition, bc you want to add i++ after everyclick so it should be
//i = i++