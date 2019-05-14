//An IFFE that prints "Good Bye" name to the console. 'name' parameter is 
//received from script.js
(function (window) {

	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

//Exposing the 'byeSpeaker' object to the global scope.
window.byeSpeaker = byeSpeaker;

})(window);