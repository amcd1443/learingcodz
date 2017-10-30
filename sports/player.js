var availableFirstNames = ["John", "Jeff", "Jack", "Joe", "Josh", "Jacob", "Joey"];
var availableLastNames = ["Smith", "Doe", "Jackson", "Johnson", "White", "Black"];
<<<<<<< HEAD
var availableNumbers = [34, 76, 66, 99, 78, 00, 01]
=======
var availableNumbers = [34, 76, 66, 99, 78, 00]
>>>>>>> nhl


var generateRandomPlayer = function(){
	
	var randomPlayer = {}
	var myRandomFirstName = Math.floor((Math.random() * availableFirstNames.length) + 0);
	var myRandomLastName = Math.floor((Math.random() * availableLastNames.length) + 0);
	var randomNumber = Math.floor((Math.random() * availableNumbers.length) + 0);
	randomPlayer.name = availableFirstNames[myRandomFirstName] + " " + availableLastNames[myRandomLastName]; 
	randomPlayer.number = Math.floor((Math.random() * availableNumbers.length) + 0);
	randomPlayer.position = "unknown";
	randomPlayer.yearsInLeague = 0;
	randomPlayer.playerRating = Math.floor((Math.random() * 100) + 1);

	return randomPlayer;
<<<<<<< HEAD
};

module.exports.generateRandomPlayer = generateRandomPlayer;
=======

};

module.exports.generateRandomPlayer = generateRandomPlayer;


>>>>>>> nhl
