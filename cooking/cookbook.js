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



var tellMeWhichRecipiesIcanMake = function(ingredients) {
	// 1. loop through each individual recipe (4 lines of code)
	var counter = 0;
	while (counter < recipies.length) {
		var recipe = recipies[counter];
		console.log("hello, i can make" + " " + recipe.name);
	// 2. compare each ingredient in each recipe to ingredients i have 
	// 3. if there is a match of ingredients then we log that there was a match
	// 4. after we log the match, we then move onto the next ingredient
	// 5. if there is a match again, we log that match
		counter = counter + 1;
	}
	// 6. after we looped through the comparisions, if there are 4 ingredients needed and we have 4 matches, we have success
	// 7. we tell person that we can make that recipe
}






module.exports.canIMakeTomatoCake = canIMakeTomatoCake;
module.exports.canIMakeSauce = canIMakeSauce;
module.exports.tellMeWhichRecipiesIcanMake = tellMeWhichRecipiesIcanMake;
module.exports.canIMakeBread = canIMakeBread;