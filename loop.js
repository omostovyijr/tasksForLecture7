let result = 0;

var userInputNumbers = window.prompt("Please, input numbers using comma (ex. 1,3,5,7): ");

let numbersToAdd = userInputNumbers.split(",")

for (let i = 0; i < numbersToAdd.length; i++) {
    result += parseInt(numbersToAdd[i]);
}

alert(result)