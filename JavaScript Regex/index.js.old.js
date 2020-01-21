// What is a regex? A regular expression allows you to search and/or replace numbers, strings
//Examples of when would you use regex? Search/replace, creating usernames, user input. 

<<<<<<< HEAD:JavaScript Regex/index.js.old.js

//Example 1 - find a string
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result)

/*
//Example 2 - Positive and Negative Lookahead
let sampleWord = "astronaut";
let pwRegex = /^(?=\w{6})(?=\D+\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result)
=======
/*
//Example 1 - Easy - find a string
let exampleString = "Hello, Universe!";
let exampleRegex = /Hello,/;
let output = exampleRegex.test(exampleString); 
console.log(output)

>>>>>>> 1095f9cadaec582ce46c6832ebfcf73acdcf8948:JavaScript Regex/index.js

//Example 2 - Medium - Check for conditions
// Check password for at least 5 characters and at least one number

let secret = "abcefg2";
let secretCheck = /(\w{5})(\d)/;
let output = secretCheck.test(secret); 
console.log(output);

/*
\w      word character i.e. letters, digit, underscore
{5}     number of characters i.e. at least 3
()      and
\d      digit i.e. 0-9
*/

//Example 3 - Higher Difficulty - Restrict Possible Usernames
// Starts with a character
// Ends with two or more digits 
//      or ends with one or more characters, and zero or more digits

let username = "Maal243";
//let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let output = userCheck.test(username);
console.log(output);/*

/*
^ - beginning of pattern
[a-z] - first character is a letter
[0-9][0-9]+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters 
\d* - and ends with a digit (zero or more times)
$ - end of pattern
i - ignore case 
*/