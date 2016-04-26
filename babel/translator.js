var dictionary = {
	"hello": "hola",  
	"world": "mundo", 
	"bathroom": "baño", 
	"have": "tenga", 
	"a": "una", 
	"good": "buena", 
	"night": "noche", 
};

// var phrases = {
// 	"hello world": "hola mundo",
// 	"have a good night": "tenga una buena noche",
// 	"that is my sandwich": "esto es mi sándwich",
// 	"what is the weather": "cuál es el clima",
// 	"where is the bathroom": "dónde está el baño"
// };

//var arrayOfWordsInSentence = sentenceToTranslate.split("");

module.exports.translateOneSentence = function(phraseToTranslate) {    //i am just mimiking what we did for translating one word, no thought processasd
		var arrayOfWordsInSentence = phraseToTranslate.split(" ")
		console.log(arrayOfWordsInSentence[0])
};



module.exports.translateOneWord = function(wordToTranslate) {
	var translatedWord = dictionary[wordToTranslate];
	if (translatedWord == null) {
		return wordToTranslate;
	}

	return translatedWord;	
};

/*
if the thing you were going to give back to me is undefined, then give back the original
if  translatedWord  is undefined, then give back wordToTranslate

new function called translate sentance
- pass it a sentance and if there is a spanish translation give spanish if no spanish give back english
-
*/
