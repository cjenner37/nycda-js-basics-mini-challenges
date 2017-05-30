/*
Create a script with two variables, each assigned to a number. Add them together and output the result to the 
console. Now do the same with two strings.
*/
var number1 = 37;
var number2 = 88;
console.log(number1 + number2);

var string1 = "I love ";
var string2 = "eating donuts!";
console.log(string1 + string2);
/*
Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays 
to the console.
*/
var sports = ['hockey', 'slackline', 'freestyle_calisthenics'];
var instruments = ['guitar', 'piano', 'violin', 'synthesizer'];
var foods = ['burritos', 'pizza', 'pasta']

var interests = [sports, instruments, foods];

console.log(interests[1][3]);
console.log(interests[2][0]);
/*
Write a script that checks if a variable captured from a prompt is less than 100. If it is, alert the user that 
their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
*/
var prompt = 101;

if (prompt < 100) {
	alert("It's less than 100!");
} else {
	alert("It's more than 100, it's " + prompt);
}

var prompt = 99;

if (prompt < 100) {
	alert("It's less than 100!");
} else {
	alert("It's more than 100, it's " + prompt);
}
/*
Try running the script and then changing the variable's value to see how this affects the program's output.
Write a similar script to check if a string stored in a variable is the same as another string.
*/
var test_string = "Sonntheen?"
if ( test_string === "Sonntheen?" ){
	alert("it's the same!");
} else {
	alert("your strings are different :(");
}

var test_string = "Sonntheen?"
if ( test_string === "Something?" ){
	alert("it's the same!");
} else {
	alert("your strings are different :(");
}
/*
Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it 
after it has been declared.
*/
function echo(name){
	console.log(name);
}

echo("Jeff");
/*
Declare a function that takes no arguments but prints something to the console. Try running it after it has been 
declared.
*/
function talk() {
	console.log("It's like well you know I wasn't really it's not this isn't so much as well anyway umm so like...");
}

talk();
/*
Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 
'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 
doors.
*/
function open(door) {
	var choice = "You chose door number ";
	var reward = " You get "
	if (door === 1) {
		console.log(choice + door + "!" + reward + "candy!");
	} else if (door === 2) {
		console.log(choice + door + "!" + reward + "puppy!");
	} else if (door === 3) {
		console.log(choice + door + "!" + reward + "cash money!");
	} else {
		console.log("That's not a door! No soup for you!");
	}
}

open(1);
open(2);
open(3);
open(4);