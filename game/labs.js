// var playerHit = Math.floor(Math.random() * 2);
// console.log(playerHit);
// var damageThisRound = Math.floor(Math.random() * 5 + 1);
// console.log(damageThisRound);

// for (var i = 0; i < 10; i++) {
// 	console.log(Math.floor(Math.random() * 3));
// }				


// var wizardHit = Math.floor(Math.random() * 2);
// var wizardDmg = Math.floor(Math.random() * 7);
// var wizard = wizardDmg + wizardHit;

// console.log(wizardDmg);
// console.log(wizardHit);
// console.log(wizard);


// console.log("hello world");

// var videoGame = prompt("which video game is your favorite?");

// switch (videoGame) {
//     case 'loz':
//         console.log( videoGame + " is one of the best video game series out there");
//         break;
//     case 'final fantasy':
//         console.log("the " + videoGame + " series is tied with the LoZ series");
//         break;
//     case 'metroid':
//         console.log("this is a great first person RPG action game, great choice");
//         break;
//     case 'mario party'
//         console.log("this is a great game for groups of friends");
//         break;
//     default:
//         console.log("that " + videoGame + " is worthless, please choose a better one");
//         }
        

//         var user = prompt("a bear is running at us").toUpperCase();

// switch (user) {
//     case 'RUN':
//         var fast = prompt("are you fast? (yes/no)").toUpperCase();
        
//         var headstart = prompt("did you get headstart? (YES/NO)?").toUpperCase();
        
//         if (fast === 'YES' || headstart === 'YES') {
//         console.log("we got away woohoo?");
//         } else if (fast === 'NO' || headstart === 'NO') {
//             console.log("we got eaten by the bear");
//         } else {
//             console.log("good thing for that headstart"); 
//         }
//         break;
    
//     case 'TACKLE':
//         var tackle = prompt("great idea, are you accurate? (YES/NO)").toUpperCase();
        
//         var wuss = prompt("are you a wuss (YES/NO)?")
        
//         if (tackle === 'YES' && wuss === 'NO') {  
//             console.log("that was a great tackle");
//         } else if (tackle === 'NO' && wuss === 'YES') {
//             console.log("than you ran away like a wuss");
//         } else {
//             console.log("you need to make a decision");
//         }
//         break;
    
//     case 'JUMP':
//         var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
//         var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
//         if(money === 'YES' && dollars === 'YES') {
//             console.log("Great! You pay the troll and continue on your merry way.");
//         } else {
//             console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
//         } default:
//             console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
// };

function fizzBuzz(input) {
    for (i = 0; i < input.length; i++) {
    	if ( (input[i] % 3 === 0) && (input[i] % 5 === 0) ) {
    		console.log("FizzBuzz");
    	} else if (input[i] % 5 === 0) {
    		console.log("Buzz");
    	} else if (input[i] % 3 === 0) {
    		console.log("Fizz");
    	} else {
    		console.log(input[i]	);
    	}
    }
}
var testCase1 = [1,2,3,4,5,6];
var testCase2 = [3,6,9,12,15,18,21,24,27,30];
var testCase3 = [5,10,15,20,25,30,35,40,45,50];
var testCase4 = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25];
var inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,113,20];


fizzBuzz(inputArray);
