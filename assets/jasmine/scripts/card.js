Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
        if (typeof(number) == "number") {
            this.value += number;
        } else {
            alert("Error!");
        }
    }
    /*function addition(numOne, numTwo) {
        if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
            return numOne + numTwo;
        } else {
            alert("Error!")
        }*/

function playerNameInput(person) {
    exampleName = "Ready Player One";
    if (person == null || person == "" || person == exampleName) {
        playerName = "Guest";
    } else {
        playerName = person;
    }
    return playerName;
};