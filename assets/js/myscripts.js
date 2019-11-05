var cardArray = ['0001', '0001', '0010', '0010', '0011', '0011', '0100', '0100', '0101', '0101', '0110', '0110', '0111', '0111', '1000', '1000', '1001', '1001', '1010', '1010', '1011', '1011', '1100', '1100']; //Values that will appear when the card is clicked on.
var cardValues = []; //Empty array
var cardIds = []; //Empty array
var cardFlipped = []; //Empty array

Array.prototype.cardShuffle = function() {
    var n = this.length,
        m, temp;
    while (--n > 0) {
        m = Math.floor(Math.random() * (n + 1));
        temp = this[m];
        this[m] = this[n];
        this[n] = temp;
    }
};

function newGame() {
    cardFlipped = 0;
    var out = '';
    cardArray.cardShuffle();
    for (var i = 0; i < cardArray.length; i++) {
        out += '<div id="card_' + i + '" onclick="cardFlip(this,\'' + cardArray[i] + '\')"></div>';
    }
    document.getElementById('game_area').innerHTML = out;
};

function freshGame() {
    newGame();
    alert("New Game");
}

function cardFlip(card, val) {
    if (card.innerHTML == "" && cardValues.length < 2) { //If the cards match
        card.style.background = '#FFF';
        card.style.backgroundImage = 'radial-gradient(lightblue, cornflowerblue)'; //Displays a circle of light blue, behind the text
        card.innerHTML = val;
        if (cardValues.length == 0) {
            cardValues.push(val); //Push the Value into the array
            cardIds.push(card.id); //Push the Card Id into the array
        } else if (cardValues.length == 1) {
            cardValues.push(val); //Clicking on the second card and pushing the Value into the Array
            cardIds.push(card.id); //Pushing the second Card ID
            if (cardValues[0] == cardValues[1]) {
                cardFlipped += 2;
                var card1 = document.getElementById(cardIds[0]);
                var card2 = document.getElementById(cardIds[1]);
                card1.style.visibility = 'hidden';
                card2.style.visibility = 'hidden';
                cardValues = []; // Clear array
                cardIds = []; // Clear array
                // Check to see if the whole board is cleared
                if (cardFlipped == cardArray.length) { //If all the cards have been flipped
                    alert("Game Completed, lets see where you have come on the Leader Board");
                    document.getElementById('game_area').innerHTML = "";
                    //insert function to update the Leader board
                    freshGame();
                }
            } else { //This will run if there are no matches
                function flipOver() {
                    // Flip the 2 tiles back over
                    var card1 = document.getElementById(cardIds[0]);
                    var card2 = document.getElementById(cardIds[1]);
                    card1.style.background = 'url("assets/imgs/cardImg.jpg") no-repeat';
                    card1.style.backgroundSize = "cover";
                    card1.innerHTML = "";
                    card2.style.background = 'url("assets/imgs/cardImg.jpg") no-repeat';
                    card2.style.backgroundSize = "cover";
                    card2.innerHTML = "";
                    cardValues = []; // Clear array
                    cardIds = []; // Clear array
                }
                setTimeout(flipOver, 1000);
            }
        }
    }
}