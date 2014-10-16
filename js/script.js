/*  
	1. Addition 
	There are two different fields: #additionInput1 and #additionInput2. 
	We've already written the functionality for handling when the user 
	clicks on the button (called #additionButton). 
	Your job is to write code that takes the two fields, 
	and alerts the user what the sum is.
*/ 

function addition() {
	var n1 = parseFloat(document.getElementById('additionInput1').value);
	var n2 = parseFloat(document.getElementById('additionInput2').value);
	alert(n1 + n2);

}

/* --------------------------------------------------------- */

/*  
	2. Vowel Counter 
	You have one input field: #vowelInput. 
	Like question 1, we've already written the functionality for handling 
	when the user clicks on the button (this time, called #vowelButton). 
	This time, you will replace the text within #vowelInput with the following string:

		"That sentence has X vowels in it."

	Vowels are the characters a, e, i, o, and u. If there is only 1 vowel in the sentence, 
	then the text should say "That sentence has 1 vowel in it." - 
	note the lack of plurality on the word vowel.
*/ 


	// your code goes here!
function vowelCounter() {
	var chars = document.getElementById('vowelInput').value.split("");
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var count = 0;
	for(idx = 0; idx < chars.length; ++idx) {
		for(var j = 0; j < vowels.length; ++j) {
			if(chars[j] == vowels[j]) {
				count++;
			}
		}
	}
	var sentence = "That sentence has " + count + (count == 1 ? " vowel" : " vowels") + " in it.";
	document.getElementById('vowelInput').value = sentence;
}
/* --------------------------------------------------------- */


/*  
	3. Guess the Number

	This one's going to be a bit more challenging than the past two, so be careful.
	You will need to write up the functionality for a simple "guess the number" game.
	
	There are four parts to the game:
		1. A guess field (#numberGuess)
		2. A result paragraph (#numberResult)
		3. A submit button (#numberSubmit)
		4. A reset button (#numberReset)

	When a player hits the reset button, a random number between 1 and 100 should be generated.
	When a player hits the submit button, the system should identify their guess within the guessing field.
	If it's higher than the random number, print "Lower" to the result paragraph.
	If it's lower than the random number, print "Higher" to the result paragraph.
	If it's exactly the random number, signify that they've won.

	We've written the handlers for #numberSubmit and #numberReset, but it's your job to
	write the functionality. You may need to define a variable or two.

	For extra functionality, track the number of guesses the user has made, and print that as part of the result.
*/ 
var number = 1;
var time = 0;

function submit() {
	time++
	var guess = parseInt(document.getElementById('numberGuess').value);
	var result = document.getElementById('numberResult');
	if(guess > number) {
		result.innerHTML = "Lower";
	} else if (guess < number) {
		result.innerHTML = "Higher"; 
	} else {
		result.innerHTML = "You spent " + time + " on the gussing game!";
	}
	
}

function reset() {
	document.getElementById('numberResult').innerHTML = "Your result will go here.";
	document.getElementById('numberGuess').value = "",
	number = Math.floor(Math.random() * 100) + 1;
} 


/* click handlers */
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('additionButton').addEventListener('click', addition);
	document.getElementById('vowelButton').addEventListener('click', vowelCounter);
	document.getElementById('numberSubmit').addEventListener('click', submit);
	document.getElementById('numberReset').addEventListener('click', reset);
});