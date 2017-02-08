
$(document).ready(function() {

//Create function to generate random number within a specific range.
function makeRandomNumber(min, max) {
	return Math.floor(Math.random() * ((max - min) + 1) + min);

}

var playerScore = 0;
var clickCount = 0;
var randomNumber = makeRandomNumber(19, 120);
var crystalOneNumber = makeRandomNumber(1, 12);

console.log(randomNumber);
console.log(crystalOneNumber);


// Put random number in HTML for user to see.
$("#randomNumber").html(randomNumber);

//When crystals are clicked on, add to clickCount
$(".crystals").on("click", function() {
	clickCount++;
	clickcount * crystalOneNumber;
}

//Creating object for crystals attributes
var crystals = {
	sapphire: {
		name: "Sapphire",
		value: 0
	}
	emerald: {
		name: "Emerald",
		value: 0
	}
	diamond: {
		name: "Diamond",
		value: 0
	}
	topaz: {
	name: "Yellow Topaz",
	value: 0

}

crystals.sapphire.value = makeRandomNumber(1,12);

crystals.emerald.value = makeRandomNumber(1,12);

crystals.diamond.value = makeRandomNumber(1,12);

crystals.topaz.value = makeRandomNumber(1,12);



// If/else statement to determine if player score = current total

}