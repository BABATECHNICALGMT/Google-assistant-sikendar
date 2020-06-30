const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [
	'JavaScript is the programming language used to write user scripts',
	' User scripts are programs written in JavaScript for use on Wikipedia by users',
	'leave me alone',
	'scripts enable your user account to do many things that they otherwise couldn'
];
//
// User scripts are programs written in JavaScript for use on Wikipedia by users. User scripts enable your user account to do many things that they otherwise couldn't. Many user scripts are available ready for you to install. Users may also write new user scripts, starting with an existing user script and modifying it, or starting from scratch.

// JavaScript is the programming language used to write user scripts.

// The JavaScript WikiProject is the collaboration of editors to improve Wikipedia's JavaScript coverage, write user scripts, and maintain user script-related pages (like the one you are reading right now). If you would like to join, sign up
//
const weather = [
	'weather is fine',
	'you need a tan',
];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('voice is activated, you can to microphone');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

// add the listener to the btn


btn.addEventListener('click', () => {
	recognition.start();
});


function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();

		speech.text = 'i hate you';

	if (message.includes('Sikandar')) {
		const finaTaxt = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finaTaxt;
	}

	speech.volume = 1;
	speech.rate =1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}