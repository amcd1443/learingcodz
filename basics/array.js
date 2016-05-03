var arrayXmen = [
	"cyclops",
	"jean grey",
	"gambit",
	"wolverine",
	"jubilee",
	"rogue",
	"beast",
	"professor x",
	"morph",
	"storm"
];

var totalNumberOfTeam = arrayXmen.length
console.log(totalNumberOfTeam)

var  alphabeticalOfTeam = arrayXmen.sort()
console.log(alphabeticalOfTeam)

var firstXman = arrayXmen[0];
var lastXman = arrayXmen[9];
var teamLeaders = firstXman + " " + lastXman //why cant i do arrayXmen[0,9]?

console.log(teamLeaders)

// i think i messed up my git commits

var counter = 0; 
while(counter < totalNumberOfTeam) {
	var thisXmen = arrayXmen[counter];
	console.log("team member" + " " + (counter + 1)  + " " + thisXmen);
	counter = counter + 1;
}


//pull in random person from the bucket
var myRandomNumber = Math.floor((Math.random() * arrayXmen.length));
var randomXman = arrayXmen[myRandomNumber];
console.log("team member random("+ myRandomNumber +") " + randomXman);

//Team memeber 1 cyclops
//Team memeber 2 jean grey
//Team memeber 3 gambit
//Team memeber 4 wolverine
//Team memeber 5 etc
//Team memeber 6 etc
//Team memeber 7 etc

//how do i get the code to count off and provide the variable
