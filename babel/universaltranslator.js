var rosettaStone = require('./translator');


var spanishSentence = rosettaStone.translateOneSentenceToAnyLanguage("hello world", "spanish");
console.log(spanishSentence);

var germanSentence = rosettaStone.translateOneSentenceToAnyLanguage("hello world", "german");
console.log(germanSentence);

var frenchSentence = rosettaStone.translateOneSentenceToAnyLanguage("hello world bathroom have a good the night a name", "french");
console.log(frenchSentence)

