/*
switch(true) {

	case (condition_1);
	func_1();

	case (condition_2);
	func_2();

	default:
	func_default();
}
*/


// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {
	var string = '';
	switch(true) {
		case (typeof input === 'boolean'):

			for(var element in input){
				string +=  '' + input[element] + '';
				string += stringifyJSON(input(element));
			}
		return string;
		break;

		case (typeof input === 'string'):

			for(var element in input){
				string += '' + input[element] + '';
				string += stringifyJSON(input[element]);
			}
		return string;
		break;

		case (typeof input === 'number'):

			for(var element in input){
				string += '' + input[element] + '';
				string += stringifyJSON(input[element]);
			}
		return string;
		break;

		case (Array.isArray(input)):
				string += '['
			for(var i = 0 ; i < input.length; i++){
				string += '' + input[i] + '';
				string += stringifyJSON(input[i]);
				string += ']';
			}
		return string;
		break;

		case (Object.isObject(input)):
				string += '{'
			for(var element in input){
				string += '' + input[element] + '';
				string += stringifyJSON(input[element]);
				string += '}';
			}
		return string;
		break;

		default:
		return string;

	}
};
