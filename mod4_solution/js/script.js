
// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

//An IFFE that takes an existing array of names
// and then outputs either Hello 'Name' or Good Bye 'Name' to the console based 
// on whether the name starts with j/J or not.

(function (window){

//Input array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Loop over the names array and say either 'Hello' or "Good Bye"
// using the 'speak' method or either helloSpeaker's or byeSpeaker's
// 'speak' method.
for (var index in names) {

	var firstLetter = (names[index].charAt(0)).toLowerCase();

 	// Compare the first letter of the current name in the loop  to lower case
	// 'j'. If the same, call byeSpeaker's 'speak' method with the current name
	// in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
	// name in the loop.
	if (firstLetter == 'j') {
		byeSpeaker.speak(names[index]);
	} else {
		helloSpeaker.speak(names[index]);
	}
}

})(window);

