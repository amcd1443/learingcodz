var sauceRecipe = {
	name: "pasta sauce",
	ingredients: ["tomato", "onion", "garlic"],
	steps: ["peel tomatos", "chop onion", "peel garlic", "boil tomatos"]
}

var breadRecipe = {
	name: "plain bread",
	ingredients: ["flour", "water", "salt"],
	steps: ["add flour water salt", "kneed dough", "preheat over"]
}


var tomatoCakes = {
	name: "tomato cakes",
	ingredients: ["tomato", "onion", "salt", "flour"],
	steps: ["peel tomatos", "chop onion", "boil tomatos", "mash tomatos", "add flour"]
}


var recipies = [sauceRecipe, breadRecipe, tomatoCakes];

// var translateOneSentenceToAnyLanguage = function(sentence, language) {
var canIMakeBread = function(ingredients) {
	var counter = 0;
	var numberOfFoundIngredients = 0;
		while (counter < breadRecipe.ingredients.length) {

		var ingredientToCheck = breadRecipe.ingredients[counter];
		var rightHandCounter = 0;

		while (rightHandCounter < ingredients.length) {

			var rightHandIngredientToCheck = ingredients[rightHandCounter];
			if (ingredientToCheck == rightHandIngredientToCheck) {
				numberOfFoundIngredients = numberOfFoundIngredients + 1;
			} 
			rightHandCounter = rightHandCounter + 1;
		}//end while righthand

		counter = counter + 1;
	}//end while left hand

	if (numberOfFoundIngredients == breadRecipe.ingredients.length) {
		return true
	} else {
		return false
	}
}

var canIMakeSauce = function(ingredients) {
	var counter = 0
	var sauceIngredientsFound = 0
	while (counter < sauceRecipe.ingredients.length) {

		var sauceIngredientsToCheck = sauceRecipe.ingredients[counter];
		var sauceIngredientsCounter = 0;

		while (sauceIngredientsCounter < ingredients.length) {

			var rightHandIngredientToCheck = ingredients[sauceIngredientsCounter];
			if (sauceIngredientsToCheck == rightHandIngredientToCheck) {
				sauceIngredientsFound = sauceIngredientsFound + 1;
			}

			sauceIngredientsCounter = sauceIngredientsCounter + 1;
		}

		counter = counter + 1;
	}

	if (sauceIngredientsFound == sauceRecipe.ingredients.length) {
		return true
	} else {
		return false
	}

};

var canIMakeTomatoCake = function(ingredients) {
	var counter = 0;
	var tomatoCakeIngredientsFound = 0;
	while (counter < tomatoCakes.ingredients.length) {

		var tomatoCakeIngredientsToCheck = tomatoCakes.ingredients[counter];
		var tomatoCakesCounter = 0; 

		while (tomatoCakesCounter < ingredients.length) {
			var rightHandIngredientToCheck = ingredients[tomatoCakesCounter];
			if (tomatoCakeIngredientsToCheck == rightHandIngredientToCheck) {
				tomatoCakeIngredientsFound = tomatoCakeIngredientsFound + 1;
			}

			tomatoCakesCounter = tomatoCakesCounter + 1;
		}

		counter = counter + 1
	}

	if (tomatoCakeIngredientsFound == tomatoCakes.ingredients.length) {
		return true
	} else {
		return false
	}

}

var tellMeWhichRecipiesIcanMake = function(ingredientsPersonHas) {
	var matchedIngredients = 0;

	// 1. loop through each individual recipe (4 lines of code)
	var i = 0;
	while (i < 1) {
		console.log("loop", i);
		var currentRecipe = recipies[i]; //pulling item out of array
		var currentRecipeIngredients = currentRecipe.ingredients; 
		console.log(currentRecipeIngredients)
		var individualCurrentIngredient = currentRecipeIngredients[i];
		console.log(individualCurrentIngredient)
 	 // 3. if there is a match of ingredients then we log that there was a match
	 // 4. after we log the match, we then move onto the next ingredient
	 // 5. if there is a match again, we log that match
		i = i + 1;
	}
	// 6. after we looped through the comparisions, if there are 4 ingredients needed and we have 4 matches, we have success
	// 7. we tell person that we can make that recipe
}

var canIMakeBread2 = function(ingredients) {
	
	var breadRecipe = {
		name: "plain bread",
		ingredients: ["flour", "water", "salt"],
		steps: ["add flour water salt", "kneed dough", "preheat over"]
	}

	var myClicker = 0;

	for (var i = 0; i < breadRecipe.ingredients.length; i = i + 1) {
		var breadIngredient = breadRecipe.ingredients[i];
		console.log("------this is bread recipe  " + breadIngredient);
		for (var j = 0; j < ingredients.length; j = j + 1) {
			var  myIngredient = ingredients[j];
			console.log("this is my own " + myIngredient);
			if (myIngredient == breadIngredient) {
				console.log(myIngredient + " DOES equal !!!!! " + breadIngredient);
				myClicker++;
				console.log("clicker is now " + myClicker) 
				break;
			} else {
				console.log(myIngredient + " does NOT match " + breadIngredient);
			}

		}
	}
			if (myClicker == breadRecipe.ingredients.length) {
					console.log(" I CAN MAKE BREAD") 
				} else {
					console.log("you suck")
				}
				console.log("END BREAD RECIPE");
};

var canIMakeSauce2 = function(ingredients) {

	var sauceRecipe = {
		name: "pasta sauce",
		ingredients: ["tomatos", "onion", "garlic"],
		steps: ["peel tomatos", "chop onion", "peel garlic", "boil tomatos"]
	}
	
	var mySauceClicker = 0;

	for (var i = 0; i < sauceRecipe.ingredients.length;  i = i + 1) {
		var sauceIngredient2 = sauceRecipe.ingredients[i];
		console.log("sauce recipe being made " + sauceIngredient2);
			for (var j = 0; j < ingredients.length; j = j + 1) { 
				var mySauceIngredient = ingredients[j];
				console.log("these are my sauce ingredients " + mySauceIngredient);
					if (mySauceIngredient == sauceIngredient2) {
						console.log(mySauceIngredient + " SAUCE EQUALS SAUCE " + sauceIngredient2);
						mySauceClicker++;
						console.log("ADDING numbers to the sauce clicker " + mySauceClicker);
					}	else {
						console.log("ingredients are not a match")
					}

			}
	}

	if (mySauceClicker == sauceRecipe.ingredients.length) {
		console.log("SAUCE HAS BEEN MADE")
	} else {
		console.log("NOT able to make sauce");
	}
};

var canIMakeTomatoCake2 = function(ingredients) {

	var tomatoCakes = {
	name: "tomato cakes",
	ingredients: ["tomato", "onion", "salt", "flour"],
	steps: ["peel tomatos", "chop onion", "boil tomatos", "mash tomatos", "add flour"]
	}

	var myTomatoClicker = 0;


	for (var i = 0; i < tomatoCakes.ingredients.length; i = i + 1) {
		var tomatoCakesIngredient2 = tomatoCakes.ingredients[i];
		 console.log(" TOMATO CAKES RECIPE YIPEE " + tomatoCakesIngredient2);
		 	for (var j = 0; j < ingredients.length; j = j + 1) {
		 		var myTomatoCakesIngredients = ingredients[j];
		 		 console.log("the ingredients i have " + myTomatoCakesIngredients);
		 		 	if (myTomatoCakesIngredients == tomatoCakesIngredient2) {
		 		 		console.log("we have a MATCH!!!");
		 		 		myTomatoClicker++;
		 		 		console.log("my tomato clicker just grew")
		 		 	} else {
		 		 		console.log("NO match");
		 		 	}
		 	}
	}

	if (myTomatoClicker == tomatoCakes.ingredients.length) {
		console.log("tomato cakes success");
		} else {
			console.log("NO tomato cakes can be made");
			}

};


var whatCanIMake = function(ingredients) {
 var recipesICanMakeCounter = 0;

 for (var i = 0; i < recipies.length i = i + 1) {
 	console.log("can i make?", recipies[i].name, "?");
 }

}









// }



module.exports.canIMakeTomatoCake2 = canIMakeTomatoCake2;
module.exports.canIMakeSauce2 = canIMakeSauce2;
module.exports.canIMakeTomatoCake = canIMakeTomatoCake;
module.exports.canIMakeSauce = canIMakeSauce;
module.exports.tellMeWhichRecipiesIcanMake = tellMeWhichRecipiesIcanMake;
module.exports.canIMakeBread = canIMakeBread;
module.exports.canIMakeBread2 = canIMakeBread2;	
module.exports.whatCanIMake = whatCanIMake;	