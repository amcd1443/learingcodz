var rosettaStone = require('./translator');

var translateSentenceGerman = rosettaStone.translateOneGermanSentence("hello good world")
console.log("This is the translated sentance: '"+ translateSentenceGerman +"'");



var translateSentenceGerman = rosettaStone.translateOneGermanSentence("have a mumbledwords night")
console.log("This is the translated sentance: '"+translateSentenceGerman+"'");


// var translateSentence = rosettaStone.translateOneSentence("hello do world")
// console.log("This is the translated sentance: '"+translateSentence+"'");
