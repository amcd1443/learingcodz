
//you need to take the length of target, and slice that into str, and have if (str == target) = success


function confirmEnding(str, target) {
	for (i = 0; i >= str.length; i-- ) {
		
		var newStrSlice = str.slice(i);
		console.log("hello",newStrSlice);
		if (newStrSlice == target) {
			console.log("success", newStrSlice);
			return;
		} else {
			console.log("keep trying to match");
		}

	};


  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("open sesame", "same");
