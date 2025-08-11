let words = ["apple", "banana", "grape", "mango"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
    let reversed = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
        reversed += words[i][j];
    }
    transformedWords.push(reversed.toUpperCase());

}

console.log("Reversed & Uppercase Words:", transformedWords);

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num);
        count++;
    } 
}

console.log(`Found ${count} numbers: [${filteredNumbers}]`);
