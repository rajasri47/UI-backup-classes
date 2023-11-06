// 1) WAP to read a string from the user and find out the total number of character with in it (without using .length property)

function countCharacters(inputString) {
  var count = 0;
  for (var i = 0; inputString[i] !== undefined; i++) {
    count++;
  }
  return count;
}

var userInput = prompt("Enter a string:");
var charCount = countCharacters(userInput);
console.log("Total number of characters: " + charCount);

// 2)WAP the total number of words within the given string

function countWords(inputString) {
  var words = inputString.split(/\s+/);
  return words.length;
}

var userInput = prompt("Enter a string:");
var wordCount = countWords(userInput);
console.log("Total number of words: " + wordCount);

// 3) WAP to find out total number of vowles("aeiou") with in the given string

function countVowels(inputString) {
  var vowels = "aeiou";
  var vowelCount = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (vowels.indexOf(inputString[i]) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
}

var userInput = prompt("Enter a string:");
var vowelCount = countVowels(userInput);
console.log("Total number of vowels: " + vowelCount);

// 4) WAP to check whether the given string is part of the main string or not

function isSubstring(mainString, subString) {
  return mainString.includes(subString);
}

var mainString = prompt("Enter the main string:");
var subString = prompt("Enter the string to check:");

if (isSubstring(mainString, subString)) {
  console.log(`"${subString}" is a part of "${mainString}".`);
} else {
  console.log(`"${subString}" is not a part of "${mainString}".`);
}

// 5) WAP to find out total number of digits with in the given strings

function countDigits(inputString) {
  var digitCount = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (/\d/.test(inputString[i])) {
      digitCount++;
    }
  }

  return digitCount;
}

var userInput = prompt("Enter a string:");
var digitCount = countDigits(userInput);
console.log("Total number of digits: " + digitCount);

// 6) WAP to find out total number of special symbols within a given string

function countSpecialSymbols(inputString) {
  var specialSymbolCount = 0;

  for (var i = 0; i < inputString.length; i++) {
    if (!/[a-zA-Z0-9\s]/.test(inputString[i])) {
      specialSymbolCount++;
    }
  }

  return specialSymbolCount;
}

var userInput = prompt("Enter a string:");
var specialSymbolCount = countSpecialSymbols(userInput);
console.log("Total number of special symbols: " + specialSymbolCount);

or

var inputString = "Hello! How's the weather? It's #sunny$ today.";
var specialSymbolCount = 0;

for (var i = 0; i < inputString.length; i++) {
  var char = inputString[i];
  if (!/[a-zA-Z0-9\s]/.test(char)) {
    specialSymbolCount++;
  }
}

console.log("Total special symbols: " + specialSymbolCount);
