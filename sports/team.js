
var name = "sports teams";

var city = "any town";

var conference = "central";

var wins = 0; 

var loses = 0; 

var players = [];


var draftPlayer = function(player) {
	for (var i = 0; i < players.length; i++) {
		if (player.number == players[i].number) {
			console.log("this number is taken, please choose a new one");
			var playerNeedsNumber = true;
			//then pick a new random number
			var newNumber = Math.floor((Math.random() * 100) + 1);
			//use while loop to make sure that number is not already taken
			while (playerNeedsNumber) {
				var newNumberTaken = false;
				for (var j = 0; j < players.length; j++) {
					if (newNumber ==  players[j].number) {
						newNumberTaken = true;
						break;
					}
				}

				if (newNumberTaken) {
					newNumber = Math.floor((Math.random() * 100) + 1);
				}
				else {
					console.log(player.name, 'has new number', newNumber);
					player.number = newNumber;
					playerNeedsNumber = false;
				}
			}
			
			
			}
			//use for loop to recheck the new number against all the players numbers
			//if newNumber === players[j].number 
			//if the newNumber is still taken, while loop will run again
		
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