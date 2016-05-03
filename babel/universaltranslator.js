var rosettaStone = require('./translator');

var translatedEnglishToGermanWord = rosettaStone.translateEnglishToGerman("hello");
console.log(translatedEnglishToGermanWord);

var spanishWord = rosettaStone.translateOneWordToSpanish("good");
console.log(spanishWord);

var spanishSentence = rosettaStone.translateOneSentenceToSpanish("the a my");
console.log(spanishSentence);

var germanSentence = rosettaStone.translateThisEnglishSentenceToGerman("hello world");
console.log(germanSentence);