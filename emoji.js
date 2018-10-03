var cart = [];

function setCart(newCart) {
	cart = newCart;

};
//////////////

function getCart() {
	return cart;

};
///////////////

function viewCart() {
	if (cart.length === 0) {
		console.log("Your shopping cart is empty.");

	}
var statementArray = [];
var i = 0;
var l = cart.length;

while (i < l) {
	var item = Object.keys(cart[i])[0];
	var price = cart[i][item];
	statementArray.push(item+" at $"+price);
	i++
}
console.log(`In your cart, you have ${statementArray.join(',')}.`);

};
//////////////////

function addToCart(itemName) {
	var itemPrice = Math.round(Math.random()*100);
	cart.push({[itemName]:itemPrice});
	console.log( `${itemName} has been added to the cart. ${itemName} cost $${itemPrice}`)

	return getCart()
};
////////////////////////

function total() {
	var t = 0;

	return t;
};
//////////////////////////

function removeFromCart(itemName) {
	var inCart = false;

	for (var n = 0, l = cart.length; n < l; n++) {
		if (cart[n].hasOwnProperty(itemName)) {
			var inCart = true;
			cart.shift(itemName);
		}
	}
if (!inCart) {
	console.log(`That ${itemName} is not in your cart.`);
}

return cart;

};
////////////////////////

function placeOrder(creditCard) {
	if (creditCard === undefined) {
		console.log("We don't have a credit card on file for you to place your order.");
	}
	if (creditCard != undefined) {
		console.log( `Your total cost is $${total()}, which will be charged to the card ${creditCard}.` );
	}
	car = [];
};


////////////////////

addToCart('carrot');