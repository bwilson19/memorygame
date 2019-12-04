var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlayRank = [];
var cardsInPlaySuit = [];

var previousScore = 0 + sessionStorage.getItem("previousScoreMemory");
var previousScoreNumber = parseInt(previousScore, 10);
  document.getElementById("score").innerHTML = "Score: " + previousScoreNumber + " Wins";

function checkForMatch (){
if (cardsInPlayRank[0] === cardsInPlayRank[1] && cardsInPlaySuit[0] === cardsInPlaySuit[1]) {
  document.getElementById("result").innerHTML = "You found a match! Congrats!"; 
  var scorePlus = 1 + previousScoreNumber;
  document.getElementById("score").innerHTML = "Score: " + scorePlus + " Wins";
  sessionStorage.setItem("previousScoreMemory", scorePlus);
} else {
  document.getElementById("result").innerHTML = "The cards did not match. Sorry, try again!"; 
}
}

function flipCard(){
var cardId= this.getAttribute('data-id');	
cardsInPlayRank.push(cards[cardId].rank);
cardsInPlaySuit.push(cards[cardId].suit);

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
this.setAttribute("src", cards[cardId].cardImage);

if (cardsInPlayRank.length === 2){
checkForMatch();
createReload();
document.getElementById("result").scrollIntoView();
}
}

function createBoard(){
for (var i = 0; i < cards.length; i++) {
   var cardElement = document.createElement("img");
   cardElement.setAttribute('src', "images/back.png");
   cardElement.setAttribute('data-id', i);
   document.getElementById('game-board').appendChild(cardElement);
   cardElement.addEventListener("click", flipCard); 
 }
}
createBoard();


function createReload(){
  if (cardsInPlayRank[0] === cardsInPlayRank[1] && cardsInPlaySuit[0] === cardsInPlaySuit[1]) {
	var reloadButtonWin = document.createElement("button");
	document.getElementById('reload').appendChild(reloadButtonWin);
	document.getElementById("reload").innerHTML = "<button >Play Again?</button>";
}else{
  var reloadButtonLoss = document.createElement("button");
  document.getElementById('reload').appendChild(reloadButtonLoss);
  document.getElementById("reload").innerHTML = "<button >Try Again?</button>";
}
}

function createDesc(){
var descWindow = document.createElement('p'); 
document.getElementById("desc").innerHTML = "<p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.</p><p>The object of the game is to turn over pairs of matching cards. Give it a try!</p>";
document.getElementById('desc').appendChild(descWindow);
} 

document.getElementById('instruct').addEventListener('click', createDesc);

function reloadGame(e) {
        location.reload();
      }

document.getElementById("reload").addEventListener('click', reloadGame);



