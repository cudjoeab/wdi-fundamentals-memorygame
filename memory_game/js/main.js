console.log("Up and running!"); 

var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = []; 



function flipCard(cardId) {
	console.log("User flipped" + " " + cards[cardId]); 
  cardsInPlay.push(cards[cardId]);

  checkForMatch(); 
  
  };

function checkForMatch() { 
  if (cardsInPlay[cardId] === cardsInPlay[cardId]) {
  alert("You found a match!");
	} else {
		console.log("Sorry, try again.")
	}; 

};

flipCard(0);
flipCard(1); 

