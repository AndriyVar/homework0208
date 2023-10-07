'use strict'

function findCharacter(inputString, targetChar) {

    const indices = [];

    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetChar) {
            indices.push(i);
            count++;
        }
    }
  
    console.log(`Індекси, за якими знаходиться символ '${targetChar}': ${indices}`);
    console.log(`Кількість входжень символу '${targetChar}' у рядку: ${count}`);
}
  
const inputString = "programming";
const targetChar = "g";
  
findCharacter(inputString, targetChar);