var rosettaStone = require('./translator');

var englishToSpanish = rosettaStone.translateOneWord("hello");
console.log(englishToSpanish);

var englishToSpanish2 = rosettaStone.translateOneWord("yes");
console.log(englishToSpanish2);

var englishToSpanish3 = rosettaStone.translateOneWord("world");
console.log(englishToSpanish3);

var translateSentence = rosettaStone.translateOneSentence("hello good world")
console.log("This is the translated sentance: '"+translateSentence+"'");


// var translateSentenceGerman = rosettaStone.translateOneSentenceGerman("hello good world")
// console.log("This is the translated sentance: '"+translateSentenceGerman+"'");



var translateSentence = rosettaStone.translateOneSentence("have a good night")
console.log("This is the translated sentance: '"+translateSentence+"'");


var translateSentence = rosettaStone.translateOneSentence("hello do world")
console.log("This is the translated sentance: '"+translateSentence+"'");

var translateSentenceGerman = rosettaStone.translateOneGermanSentence("hello good world")
console.log("This is the translated sentance: '"+ translateSentenceGerman +"'");