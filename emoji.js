function takeANumber(katzDeliLine, name) {
	var position = katzDeliLine.length + 1;
	katzDeliLine.push(name);

	console.log("welcome "+name+". You are number "+position+" in line.");
};
takeANumber([1,2,3,4],"jack");

///////////////////////////////////////

function nowServing(deliLine) {
	var name = "";

	if (deliLine.length === 0) {
		console.log("there is nobody waiting in line");
	} else {
		console.log("there are "+deliLine.length+" in line");
	}

	name = deliLine.shift();

	console.log("Currently serving "+name);
};

nowServing([1,2,3,4,5,6,7,8]);

//////////////////////////////////////////

function currentLine(katzDeliLine) {
	if (katzDeliLine === 0) {
		console.log("currentLine is empty");
	}

	var myString = `The line is currently: 1. ${katzDeliLine[0]}`;

	for (let i=1; i<katzDeliLine.length; i++) {
		myString += `, ${i+1}. ${katzDeliLine[i]}`;
	}
	console.log(myString);
};

currentLine(["jack","mike","dave","john"]);