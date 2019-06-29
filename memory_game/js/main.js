console.log("Up and running!"); 

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



function flipCard(cardId) {
	console.log("User flipped  " + cardsInPlay[cardId].rank); 
  cardsInPlay.push(cardsInPlay[cardId]);

  checkForMatch(); 
  
  };

function checkForMatch() { 
  if (cardsInPlay[cardId] === cardsInPlay[cardId]) {
  alert("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}; 

};

flipCard(1);
flipCard(2); 

