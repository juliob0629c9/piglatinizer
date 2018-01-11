// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	function consonant (word) {
		var array = word.split('');
		var firstLetter = array[0];
		
		
		array.splice(0,1); //Remove First Letter
		console.log (array);
		console.log (firstLetter);
		array.push(firstLetter); //First letter to end.
		console.log (array);
		array.push("a"); //puts a at end
		array.push("y"); // puts y at end 
		console.log(array);
		return array.join(""); //joins array with empty space
	}
  	function vowel (word){
  	return word + 'yay';
  		
  	}


	
  $(".submit").click (function(){
  	var thing= $(".input").val();
	$(".result").text(vowel(thing));
	
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


});