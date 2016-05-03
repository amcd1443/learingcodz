var spanishDictionary = {
	"hello": "hola",  
	"world": "mundo", 
	"bathroom": "baño", 
	"have": "tenga", 
	"a": "una", 
	"good": "buena", 
	"night": "noche",
	"the": "el",
	"name": "llamo",
	"my": "me"
};

var germanDictionary = {
	"hello": "Hallo",  
	"world": "welt", 
	"bathroom": "Badezimmer", 
	"have": "haben", 
	"a": "ein", 
	"good": "gut", 
	"night": "Nacht",
	"the": "das",
	"name": "Name",
	"my": "meine"
};

var frenchDictionary = {
	"hello": "bonjour",  
	"world": "monde", 
	"bathroom": "salle de bains", 
	"have": "avoir", 
	"a": "une", 
	"good": "bien", 
	"night": "nuit",
	"the": "la",
	"name": "prénom",
	"my": "mon"
};

var translateOneFrenchSentence = function(frenchPhraseToTranslate){
	var frenchWordsArray = frenchPhraseToTranslate.split(" ");
	var frenchTranslatedSentence = "";
	var counter = 0;
	while (counter < frenchWordsArray.length) {
		var thisOriginalWord = frenchWordsArray[counter];
		var translatedFrench = translateOneWord(thisOriginalWord);
		if (counter > 0) {
			frenchTranslatedSentence = frenchTranslatedSentence + " ";
		}
		frenchTranslatedSentence = frenchTranslatedSentence + translatedFrench;
		counter = counter + 1;
	}

	return frenchTranslatedSentence
};



var translateThisEnglishSentenceToGerman = function(germanPhraseToTranslate) {
	var germanWordsArray = germanPhraseToTranslate.split(" ");
	var germanTranslatedSentence = "";
	var counter = 0;
	while (counter < germanWordsArray.length) {
		var thisOriginalWord = germanWordsArray[counter];
		var translatedGerman = translateEnglishToGerman(thisOriginalWord);
		if (counter > 0) {
			germanTranslatedSentence = germanTranslatedSentence + " " ;
		}
		germanTranslatedSentence = germanTranslatedSentence + translatedGerman;
		counter = counter + 1;
	}

	return germanTranslatedSentence	
};

var translateEnglishToGerman = function(englishWord) {
	var germanWord = germanDictionary[englishWord];
	if (germanWord == null) {
		return englishWord;
	} else {
	 	return germanWord;
	}	
};

var translateOneSentenceToSpanish = function(phraseToTranslate) {   
		var arrayOfWordsInOriginalSentence = phraseToTranslate.split(" ");
		var translatedSentence = "";
		//
		var counter = 0; 
		while(counter < arrayOfWordsInOriginalSentence.length) {
			var thisOriginalWord = arrayOfWordsInOriginalSentence[counter];
			var translatedWord = translateOneWordToSpanish(thisOriginalWord);
			if (counter > 0) {
				translatedSentence = translatedSentence + " " ;
			}
			translatedSentence = translatedSentence + translatedWord;

			counter = counter + 1; 
		}

		return translatedSentence;
};

var translateOneWordToSpanish = function(wordToTranslate) {
	var translatedWord = spanishDictionary[wordToTranslate];
	if (translatedWord == null) {
		return wordToTranslate;
	};
	return translatedWord;	
};


module.exports.translateOneWordToSpanish = translateOneWordToSpanish;
module.exports.translateOneSentenceToSpanish = translateOneSentenceToSpanish;
module.exports.translateEnglishToGerman = translateEnglishToGerman;
module.exports.translateThisEnglishSentenceToGerman = translateThisEnglishSentenceToGerman;