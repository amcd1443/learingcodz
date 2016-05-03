var rosettaStone = require('./translator');

var translateSentenceFrench = rosettaStone.translateOneFrenchSentence("hello good world")
console.log("This is the translated sentance: '"+ translateSentenceFrench +"'");



var translateSentenceFrench = rosettaStone.translateOneFrenchSentence("have a mumbledwords night")
console.log("This is the translated sentance: '"+translateSentenceFrench+"'");


// var translateSentence = rosettaStone.translateOneSentence("hello do world")
// console.log("This is the translated sentance: '"+translateSentence+"'");
