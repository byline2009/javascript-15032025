// dem ky tu trong chuoi
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("Hello")); // Output: 5
console.log(countCharacters("JavaScript")); // Output: 10


//dao chuoi
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"



//Ktra chuoi doi xung
function isPalindrome(str){
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false olleh


//loai bo khoang trang trong chuoi
function trimSpaces(str) {
    return str.trim();
}

console.log(trimSpaces("  Hello world  ")); // Output: "Hello world"



//dem so lan xuat hien trong chuoi
function countCharacter(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

console.log(countCharacter("hello world", "o")); // Output: 2
console.log(countCharacter("banana", "a"));     // Output: 3
console.log(countCharacter("javascript", "x")); // Output: 0
