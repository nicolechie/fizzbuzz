$(document)
	.ready(function() {
		var answer = prompt('Input a number');
	for (var i = 1; i <= answer; i++) {
		var icopy;
		if (i%3 === 0 && i%5 !== 0) {
			icopy = "Fizz";
		}
		else if (i%5 === 0 && i%3 !== 0) {
			icopy = "Buzz";
		}
		else if (i%3 === 0 && i%5 === 0) {
			icopy = "FizzBuzz";
		}
		else {
			icopy = i;
		}
		$('ul').append('<li>'+ icopy +'</li>');
	}
});