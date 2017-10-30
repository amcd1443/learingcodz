//austin
var playersTurn = document.getElementById('playersTurn');
var isXTurn = true;

var clickHandler = function() {
	this.style.backgroundColor = 'blue';
	this.innerHTML = "X";
	playersTurn.innerHTML = "Player 0's turn";
	
	if (isXTurn == false) {
		this.innerHTML = "0";
		this.style.backgroundColor = 'orange';
		playersTurn.innerHTML = "Player X's turn";
	};
	isXTurn = !isXTurn;
};

for (var i = 0; i < 9; i++) {
	var box = document.getElementById("box" + i); //box0, box1, box2, box3...
	box.style.cursor = 'pointer';
	box.onclick = clickHandler;
}


//decide winner
//eliminate double clicking that changes the sign
//keep score?
//reset the game