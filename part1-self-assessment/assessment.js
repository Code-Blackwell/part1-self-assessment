console.log('Let\'s start Hacking!');
var myString = "Javascript is super duper awsome";
var myObject = {};
var myArray  = ['J', 'a', 'v', 'a'];

/**
*print to the console the 5th letter in a string.
*/

function fifthLetter(){
  console.log(arguments[0][4]);
}

fifthLetter(myString)

/**
*loop through a string and print each letter to the console.
*/

function stringLooper(){
  for( var i = 0 ; i < arguments[0].length - 1 ; i++ ){
    console.log(arguments[0][i]);
  }
}
