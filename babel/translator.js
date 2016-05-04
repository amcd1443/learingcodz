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



var translateOneWordToAnyLanguage = function(word, language) {
	var dictionary = null; 

	if (language == "spanish") {
		dictionary = spanishDictionary;
	} else if ( language == "german") {
		dictionary = germanDictionary;
	} else if (language == "french" ) {
		dictionary = frenchDictionary;
	} else {
		console.log("i do not know that language");
	}

	var translatedWord = dictionary[word];
	if (translatedWord == null) {
		return word;
	}
	return translatedWord;
};


var translateOneSentenceToAnyLanguage = function(sentence, language) {
	var translatedSentence = ""; //start with blank sentance
	var counter = 0;
	var wordsArray = sentence.split(" ");//get words in original sentance
	while (counter < wordsArray.length) {   //loop through words in original sentance
		var word = wordsArray[counter];		//get word from origial sentance "hello"
		var translatedWord = translateOneWordToAnyLanguage(word, language); //transelate word from original sentance
		if (counter > 0) {
				translatedSentence = translatedSentence + " " ;
		}
		translatedSentence = translatedSentence + translatedWord;   //add translated word to blanksentance

		counter = counter +1;
	}
	return translatedSentence; //reutrn blank sentance now filled
};


module.exports.translateOneSentenceToAnyLanguage = translateOneSentenceToAnyLanguage;