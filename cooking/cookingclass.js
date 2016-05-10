var cookbook = require('./cookbook');

var austinsIngredients = ['water', 'flour', 'tomatos', 'onion', 'salt'];

var micahsIngredients = ['flour', 'tomatos', 'onion', 'salt']

var austinCanMakeBread = cookbook.canIMakeBread(austinsIngredients);

if (austinCanMakeBread) {
	console.log("Austin can make bread")
} else {
	console.log("Austin is  missing some of the ingredients to make bread")
}

if (cookbook.canIMakeBread(micahsIngredients)) {
	console.log("Micah can make bread")
} else {
	console.log("Micah is missing some of the ingredients to make bread")
}


var micahsOtherIngredients = ['flour', 'tomatos', 'onion', 'garlic', 'salt'];
cookbook.tellMeWhichRecipiesIcanMake(micahsOtherIngredients);