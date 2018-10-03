console.log("hello world");

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;


function flipCard() {
	if (lockboard) return;
	this.classList.add('flip');
	if (this === firstCard) return;

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	} 
	hasFlippedCard = false;
	secondCard = this;

	checkForMatch();
};
function checkForMatch () {
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
	isMatch ? disableCards() : unFlipCards();
};	

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
		console.log(firstCard.dataset.framework)
};

function unFlipCards() {
	lockboard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		lockboard = false;
	}, 1500)
};

function resetBoard() {
 [hasFlippedCard, lockboard] = [false, false];
 [firstCard, secondCard] = [null, null];
};

(function shuffle() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random()* 12);
		card.style.order = randomPos;
	})
})();


cards.forEach(card => card.addEventListener('click', flipCard));