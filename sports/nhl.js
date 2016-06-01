
var Player = require("./player");

var rangers = require("./team");

for (var i = 0; i < 22; i++) {
	var randomPlayer = Player.generateRandomPlayer();
	rangers.draftPlayer(randomPlayer)	
}

console.log(" Rangers have " + rangers.players.length + " players");
console.log(" player 4 is " + rangers.players[4].name + " !");


