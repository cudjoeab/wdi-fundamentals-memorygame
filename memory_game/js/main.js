



var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 

var cardOne = cards[0]; 
cardsInPlay.push(cardOne); 
console.log("User flipped " + cardOne); 

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardThree = cards[2];
cardsInPlay.push(cardThree);
console.log ("User flipped " + cardThree); 

if (cards[0] === cards [1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
};


/*
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

flipCard("queen");
flipCard("king");

//change element on click 
/*
document.querySelector('.circle').addEventListener('click', turnRed)

var turnRed = function () {
    this.style.backgroundColor = "red"; */ 

    //Select all elements with the class .circle on the page
var circles = document.querySelectorAll('.circle');

//loop through each .circle element and add an event handler.
for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', turnRed);
}

var turnRed = function () {
    this.style.backgroundColor = "red";
};

