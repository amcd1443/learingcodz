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
	name: "pasta sauce",
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

var tellMeWhichRecipiesIcanMake = function(ingredients) {

}
module.exports.tellMeWhichRecipiesIcanMake = tellMeWhichRecipiesIcanMake;
module.exports.canIMakeBread = canIMakeBread;