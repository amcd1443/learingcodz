
var Player = require("./player");

var rangers = require("./team");

for (var i = 0; i < 22; i++) {
	var randomPlayer = Player.generateRandomPlayer();
	rangers.draftPlayer(randomPlayer)	
}

console.log(" Rangers has " + rangers.players.length + " players");
console.log(" payer 4 is " + rangers.players[4].name + " !");
