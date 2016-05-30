
var name = "sports teams";

var city = "any town";

var conference = "central";

var wins = 0; 

var loses = 0; 

var players = [];


var draftPlayer = function(player) {
	for (var i = 0; i < players.length; i++) {
		if (player.number == players[i].number) {
			console.log("this number is taken, please choose a new one")
			var newNumberTaken = false;
			//then pick a new random number
			//use while loop to make sure that number is not already taken
			//use for loop to recheck the new number agains all the players numbers
			//if newNUmber === players[j].number 
			//if the newNumber is still taken, while loop will run again
		}	

	}
	players.push(player);
}










module.exports.name = name;
module.exports.city = city;
module.exports.conference = conference;
module.exports.wins = wins;
module.exports.loses = loses;
module.exports.players = players;
module.exports.draftPlayer = draftPlayer;


