debugger;
//var cardArray = ['0001', '0001', '0010', '0010', '0011', '0011', '0100', '0100', '0101', '0101', '0110', '0110', '0111', '0111', '1000', '1000', '1001', '1001', '1010', '1010', '1011', '1011', '1100', '1100']; //Values that will appear when the card is clicked on.
//var cardValues = []; //Empty array
//var cardIds = []; //Empty array
//var cardFlipped = []; //Empty array
//var turnsTaken = 0; //Counts up everytime a selection is made
//var playerArray = []; //Empty array for player names
//var scoreArray = []; //Empty array for Leaderboard
//var playerName; //Users actual name
//var exampleName; //Default name
//var leaderArray = [];
//var gamesplayed = 0;

/*if (gamesplayed == 0) {
    var leaderArray = [
        [999, "aaa"],
        [999, "bbb"],
        [999, "ccc"],
        [999, "ddd"],
        [999, "eee"],
        [999, "fff"],
        [999, "ggg"],
        [999, "hhh"]
    ]; //Multidimensional Array for the player names and scores
};*/

//var updateLeaderboard = "";

/*Array.prototype.cardShuffle = function() {
    var n = this.length,
        m, temp;
    while (--n > 0) {
        m = Math.floor(Math.random() * (n + 1));
        temp = this[m];
        this[m] = this[n];
        this[n] = temp;
    }
};*/

/*function newGame() {
    updateLeaderboard += "<table class=\"table table-borderless\">";
    updateLeaderboard += "                            <caption>List of scores from different players.<\/caption>";
    updateLeaderboard += "                            <thead class=\"thead-dark\">";
    updateLeaderboard += "                                <tr class=\"table-info\">";
    updateLeaderboard += "                                    <th scope=\"col\">#<\/th>";
    updateLeaderboard += "                                    <th scope=\"col\">Name<\/th>";
    updateLeaderboard += "                                    <th scope=\"col\">Turns<\/th>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                            <\/thead>";
    updateLeaderboard += "                            <tbody>";
    updateLeaderboard += "                                <tr class=\"table gold\">";
    updateLeaderboard += "                                    <th scope=\"row\">1<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[0][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[0][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr class=\"table silver\">";
    updateLeaderboard += "                                    <th scope=\"row\">2<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[1][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[1][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                               <\/tr>";
    updateLeaderboard += "                                <tr class=\"table bronze\">";
    updateLeaderboard += "                                    <th scope=\"row\">3<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[2][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[2][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">4<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[3][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[3][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">5<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[4][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[4][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">6<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[5][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[5][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">7<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[6][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[6][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">8<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[7][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[7][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                            <\/tbody>";
    updateLeaderboard += "                        <\/table>";

    cardFlipped = 0; //Reset Value
    turnsTaken = 0; //Reset Value
    var out = '';
    cardArray.cardShuffle();
    for (var i = 0; i < cardArray.length; i++) {
        out += '<div id="card_' + i + '" onclick="cardFlip(this,\'' + cardArray[i] + '\')"></div>';
    }
    turnsTakenString = ""; //Hides the text so that it doesnt look unsightly
    document.getElementById("turnCounter").innerHTML = turnsTakenString;
    document.getElementById('game_area').innerHTML = out;
    document.getElementById("score_area").innerHTML = updateLeaderboard;
    gamesplayed++;
};*/

function freshGame() {
    newGame();
}

/*function cardFlip(card, val) {
    //turnCounting();
    //Flipping Cards
    if (card.innerHTML == "" && cardValues.length < 2) { //If the cards match
        card.style.background = '#FFF';
        card.style.backgroundImage = 'radial-gradient(lightblue, cornflowerblue)'; //Displays a circle of light blue, behind the text
        card.innerHTML = val;
        if (cardValues.length == 0) {
            turnCounting();
            cardValues.push(val); //Push the Value into the array
            cardIds.push(card.id); //Push the Card Id into the array
        } else if (cardValues.length == 1) {
            cardValues.push(val); //Clicking on the second card and pushing the Value into the Array
            cardIds.push(card.id); //Pushing the second Card ID
            if (cardValues[0] == cardValues[1]) {
                cardFlipped += 2;
                var card1 = document.getElementById(cardIds[0]);
                var card2 = document.getElementById(cardIds[1]);
                card1.style.visibility = 'hidden'; //Once match is made hide the cards
                card2.style.visibility = 'hidden'; //Once match is made hide the cards
                cardValues = []; // Clear array
                cardIds = []; // Clear array
                // Check to see if the whole board is cleared
                if (cardFlipped == cardArray.length) { //If all the cards have been flipped
                    //alert("Game Completed, you have taken " + turnsTaken + " turns to complete the game.  Lets see where you have come on the Leader Board");
                    document.getElementById('game_area').innerHTML = "Well Done";
                    playerOptions(); // Take players name
                    results(); //Leaderboard functions
                }
            } else { //This will run if there are no matches
                function flipOver() {
                    // Flip the 2 tiles back over
                    var card1 = document.getElementById(cardIds[0]);
                    var card2 = document.getElementById(cardIds[1]);
                    card1.style.background = 'radial-gradient(lightblue, #007bff)';
                    card1.style.backgroundSize = "cover";
                    card1.innerHTML = "";
                    card2.style.background = 'radial-gradient(lightblue, #007bff)';
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

function turnCounting() {
    //Counting the turns
    var turnsTakenString; //variable
    turnsTaken++; //Add 1 to the variable
    turnsTaken.toString(); //Convert from number to string
    turnsTakenString = "Turns Taken: " + turnsTaken; //Puts the string together
    document.getElementById("turnCounter").innerHTML = turnsTakenString; //Updates the html in real time
}*/

/*function playerOptions() {
    exampleName = "Ready Player One";
    var person = prompt("Please enter your name:", exampleName);
    if (person == null || person == "" || person == exampleName) {
        playerName = "Guest";
    } else {
        playerName = person;
    }
    //document.getElementById("playerName").innerHTML = playerName; //Puts the name into the HTML ID Tag playerName
    //newGame();
}*/

/*function results() {
    //leaderArray[7][1] = playerName;
    //leaderArray[7][0] = turnsTaken;
    var newScore = turnsTaken;
    var oldScore;
    var newPlayer = playerName;
    var oldPlayer;
    var tempPlayer;
    var tempScore;
    leaderArray.unshift([turnsTaken, playerName]);
    console.log(leaderArray);
    //Reorder leaderboard

    var updateLeaderboard = "";
    updateLeaderboard += "<table class=\"table table-borderless\">";
    updateLeaderboard += "                            <caption>List of scores from different players.<\/caption>";
    updateLeaderboard += "                            <thead class=\"thead-dark\">";
    updateLeaderboard += "                                <tr class=\"table-info\">";
    updateLeaderboard += "                                    <th scope=\"col\">#<\/th>";
    updateLeaderboard += "                                    <th scope=\"col\">Name<\/th>";
    updateLeaderboard += "                                    <th scope=\"col\">Turns<\/th>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                            <\/thead>";
    updateLeaderboard += "                            <tbody>";
    updateLeaderboard += "                                <tr class=\"table gold\">";
    updateLeaderboard += "                                    <th scope=\"row\">1<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[0][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[0][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr class=\"table silver\">";
    updateLeaderboard += "                                    <th scope=\"row\">2<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[1][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[1][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                               <\/tr>";
    updateLeaderboard += "                                <tr class=\"table bronze\">";
    updateLeaderboard += "                                    <th scope=\"row\">3<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[2][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[2][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">4<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[3][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[3][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">5<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[4][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[4][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">6<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[5][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[5][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">7<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[6][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[6][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                                <tr>";
    updateLeaderboard += "                                    <th scope=\"row\">8<\/th>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[7][1];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                    <td>"
    updateLeaderboard += leaderArray[7][0];
    updateLeaderboard += "<\/td>";
    updateLeaderboard += "                                <\/tr>";
    updateLeaderboard += "                            <\/tbody>";
    updateLeaderboard += "                        <\/table>";
    i = 0;
    document.getElementById("score_area").innerHTML = updateLeaderboard;
}*/