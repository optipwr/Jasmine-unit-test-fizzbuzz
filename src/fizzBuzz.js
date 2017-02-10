// Defining fizzBuzz
// Must return a value to be defined
function fizzBuzz(input = null){
	if((input % 3 == 0) && (input % 5 == 0)){
		return "FizzBuzz";
	}
	else if(input % 5 == 0){
		return "Buzz";
	}
	else if(input % 3 == 0){
		return "Fizz";
	}
	else{
		return input;
	}
}