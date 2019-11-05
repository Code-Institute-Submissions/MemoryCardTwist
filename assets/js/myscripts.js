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