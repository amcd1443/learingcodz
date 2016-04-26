var rosettaStone = require('./translator');

var englishToSpanish = rosettaStone.translateOneWord("hello");
console.log(englishToSpanish);

var englishToSpanish2 = rosettaStone.translateOneWord("yes");
console.log(englishToSpanish2);

var englishToSpanish3 = rosettaStone.translateOneWord("world");
console.log(englishToSpanish3);

var translateSentence = rosettaStone.translateOneSentence("d")
	console.log(translateSentence)