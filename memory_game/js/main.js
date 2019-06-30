var cardId = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/kings-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = []; 



function flipCard() {
	var cardId = document.getElementById('game-board')[0].this.getAttribute('data-id'); 
	console.log("User flipped  " + cardsInPlay[cardId].rank); 
  	cardsInPlay.push(cardsInPlay[cardId]);


  
  };

function checkForMatch() { 
	document.getElementsById.setAttribute("src", cards[cardId].cardImage); 
  if (cardsInPlay[cardId] === cardsInPlay[cardId]) {
  alert("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}; 

};

checkForMatch(); 

function createBoard() {
	for (var i = 0; i < cardId.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('img', "images/back.png"); 
		cardElement.setAttribute('data-id', i); 
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
};

createBoard();


