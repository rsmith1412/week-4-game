//When Html loads, script runs
console.log("a")
$(document).ready(function() {

var playerScore = 0;
$("#player-score").text(playerScore);
var clickCount = 0;
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var randomNumber = makeRandomNumber(19, 120);
console.log(randomNumber);
$("#randomNumber").text(randomNumber);
var crystalNumber = makeRandomNumber(1, 12);

restartGame();

//Create function to generate random number within a specific range.
function makeRandomNumber(min, max) {

	return Math.floor(Math.random() * ((max - min) + 1) + min);

}

makeRandomNumber(19, 120);

//Function to restart game at beginning and after win/loss
function restartGame() {
	console.log("Restarting Game");

	playerScore = 0;

	clickCount = 0;

	randomNumber = makeRandomNumber(19, 120);

	ReplaceElementContent("randomNumber", randomNumber);
	ReplaceElementContent("wins", wins);
	ReplaceElementContent("losses", wins);

}

function ReplaceElementContent(id, content) {
	document.getElementById(id).innerHTML = content;
}


// Put random number in HTML for user to see.
$("#randomNumber").html(randomNumber);
ReplaceElementContent("randomNumber", randomNumber);

//When crystals are clicked on, add to clickCount
$(".gem-button").on("click", function() {
	clickCount++;
	clickcount * crystal.sapphire;
});

//Creating object for crystals attributes
var crystals = {
	sapphire: {
		name: "Sapphire",
		value: makeRandomNumber(1,12),
	}
	emerald: {
		name: "Emerald",
		value: makeRandomNumber(1,12),
	}
	diamond: {
		name: "Diamond",
		value: makeRandomNumber(1,12),
	}
	topaz: {
	name: "Yellow Topaz",
	value: makeRandomNumber(1,12),

}

crystals.sapphire.value = makeRandomNumber(1,12);
console.log(crystals.sapphire.value);

crystals.emerald.value = makeRandomNumber(1,12);
console.log(crystals.emerald.value);

crystals.diamond.value = makeRandomNumber(1,12);
console.log(crystals.diamond.value);

crystals.topaz.value = makeRandomNumber(1,12);
console.log(crystals.topaz.value);


$(".gem-button").on("click", function {
	console.log(this.value);

	/*$("#playerScore").crystals.sapphire.value*/
});



// If/else statement to determine if player score = current total

};