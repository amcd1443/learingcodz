var cookbook = require('./cookbook');

var austinsIngredients = ['water', 'flour', 'tomatos', 'onion', 'salt'];

var micahsIngredients = ['flour', 'tomatos', 'onion', 'salt']

var austinCanMakeBread = cookbook.canIMakeBread(austinsIngredients);

var austinCanMakeSauce = cookbook.canIMakeSauce(austinsIngredients);

var austinCanMakeTomatoCake = cookbook.canIMakeTomatoCake(austinsIngredients);


if (austinCanMakeBread) {
	console.log("Austin can make bread")
} else {
	console.log("Austin is  missing some of the ingredients to make bread")
};

if (cookbook.canIMakeBread(micahsIngredients)) {
	console.log("Micah can make bread")
} else {
	console.log("Micah is missing some of the ingredients to make bread")
};

if (austinCanMakeSauce) {
	console.log("Austin can make sauce")
} else {
	console.log("Austin cannot make sauce")
};


if (austinCanMakeTomatoCake) {
	console.log("Austin made delicious cakes")
} else {
	console.log("Austin did not make cakes")
};


cookbook.tellMeWhichRecipiesIcanMake(austinsIngredients); //you can make bread

