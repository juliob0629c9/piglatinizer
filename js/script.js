// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	function consonant (word) {
		var array = word.split('');
		
		function findVowel(element){
			return element == "a" || element == "e"|| element == "i"|| element == "o"|| element =="u"
		} //used so that a boolean can be placed into findIndex.
		var vowelIndex =array.findIndex(findVowel); //terminates when vowel above results to true. Prints index.
		
		var counter = 0;
		var counter2 = 0;
		
		
		while (counter<vowelIndex){
			while (counter <vowelIndex){
				array.push(array[counter]);
				counter = counter + 1;
			}
		} //adds beginning letters and pushes to back up until you get to the vowel.
		
		
		array.reverse(); //reverse array for removal
		
		var x = vowelIndex;
		while (x>0){
			array.splice(-1,1) //removes the last item until you're done with extra letters.
			x = x -1;
		}
		array.reverse(); //makes array normal again 
		array.push("a");
		array.push("y");
		
		var done = array.join("");
		return done + " " //adds a space to deal with sentences
	}
	
  	function vowel (word){
  	var done = word + 'yay';
  	return done + " "; //adds a space to deal with sentences
  	} //for vowels 

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
function wordToPigLatin (word){
	word = word.toLowerCase();
	var array = word.split('');
	var firstLetter = array[0];
		
	if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u'){
		$(".result").append(vowel(word));
	} else {
		console.log("RUNNING CONSONANT FUNCTION");
	    $(".result").append(consonant(word));
	  }
} //decides when to run consonant or foul function, prints that value to div.

$('.submit').click(function(){
	$(".result").empty();
	var fakeinput = $(".input").val();
	console.log(fakeinput);
	var input = fakeinput.split(" "); //makes string into array so that it can go into master
	console.log(input);
	
	var x = 0;
	
	while (x<(input.length)){
		console.log(x);
		wordToPigLatin(input[x]);
		x = x + 1;
	} //runs my master function for every word in the array of a sentence
});
});