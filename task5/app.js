'use strict'

function splitString(inputString, delimiter) {
    const substrings = inputString.split(delimiter);
    return substrings;
}
  
const inputString = "10/08/2020";
const delimiter = "/";
const result = splitString(inputString, delimiter);
  
console.log(result);