var phrase = "this is a phrase, duh";
var splitPhrase =  phrase.split(" ");



function findLongestWord() {
	var phrase = "this is a phrase, duh";
	var splitPhrase =  phrase.split(" ");
	for (var i = 0; i < splitPhrase.length; i++) {
		console.log(splitPhrase[1].lengthx);
	}
  
  	console.log(splitPhrase);
  	//return str.length;
}
findLongestWord();
//findLongestWord("The quick brown fox jumped over the lazy dog");

write your code below!
write your code below!

/////////////////////////////////

var playlist = {
  taylorSwift: 'Gorgeous',
  fallOutBoy: 'DanceDance',
  againstTheCurrent: 'LegendsNeverDie',
  weezer: 'BuddyHolly'
};

var updatePlaylist = function(obj,key, value) {
  obj[key] = value;
  
  return obj;
  
};

var removeFromPlaylist = function(obj, key) {
  delete obj[key];
  
  return obj;
};

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi');
removeFromPlaylist(playlist,'weezer');




