// An IFFE that prints "Hello" name to the console. 'name' parameter is 
//received from script.js
(function (window) {

	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

//Exposing the 'helloSpeaker' object to the global scope.
window.helloSpeaker = helloSpeaker;

})(window);
