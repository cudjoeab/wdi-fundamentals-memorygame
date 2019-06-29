console.log("up and running!"); 

//old variables from past unit
/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/

console.log("User Flipped" + " " + cardOne); 
console.log ("User Flipped" + " " + cardTwo); 

var cards = [ "queen", "queen", "king", "king"];
var cardsInPlay = []; 
cardsInPlay.length; 

var cardOne = "queen";
var cardTwo = "queen";
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User Flipped Queen"); 
console.log("User Flipped King"); 
console.log(cardsInPlay.length); 

/*if(cardsInPlay.length === 2) {
  console.log("checking"); 
} */ 

if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else if (cardsInPlay[2] === cardsInPlay[3]) {
  alert("Sorry, try again.");
}