//mimic the codeSchool assignment
//power, total power, assignment, ??

/*
function changePowerTotal(power, totalPower, genStatus, genID) {

	if (genStatus === 'on') {
		totalPower = totalPower + power;
		console.log("Generator #" + genID + " is now " + genStatus + ", adding " + power + "MW, for a total of " + totalPower + "MW!");
		//return false;
	} else {
		console.log("Generator #" + genID + " is now " + genStatus + ", removing " + power + "MW, for a total of " + totalPower + "MW!");
    return true;
	}
};

changePowerTotal(12, 20, "on", 5);
*/

///////////////////////////////////////

// function longString(string) {
// 	//var string = "this is a long string";
// 	var stringLength = string.length;
// 	var split = string.split("");

// 	for (i = 0; i < stringLength; i++)	{
// 		//console.log(string[i]);
// 		if (string[i] == " ") {
// 			console.log('null');
// 		} else {
// 			console.log(string[i]);
// 		}
// 	};

// };
// longString("this is a long string");

////////////////

// function numStrings(list) {
// 	var count = 0;
  
// 	for (i = 0; i < list.length; i++)	{
//     	if (typeof '' === 'string') {
//   			count = count + 1;
//   		}  		
// 	} 
//   //return count;
//  	console.log(count);
// };

// numStrings(["this", "is", "a", "string"]);

/////////////////////////


//Filter Functions

let students =[
	{
		name: "Dave",
		GPA: 3.3,
		SAT: 2000
	},
	{
		name: "Sheila",
		GPA: 3.1,
		SAT: 1600
	},
	{
		name: "Alonzo",
		GPA: 3.65,
		SAT: 1700
	},
	{
		name: "Mary",
		GPA: 3.8,
		SAT: 2100
	},
	{
		name: "Jack",
		GPA: 1.7,
		SAT: 900
	},
	{
		name: "Jackie",
		GPA: 4.0,
		SAT: 2200
	},
	{
		name: "Shannon",
		GPA: 3.99,
		SAT: 1650
	},
	{
		name: "Clint",
		GPA: 2.1,
		SAT: 1899
	}
];


function studentsAdmitted() {
	var admitted = students.filter(function(students) {
		return students.GPA > 3.2 && students.SAT > 1900;
	});	
	console.log(admitted);
};

studentsAdmitted();














