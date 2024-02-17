// check panagram //

function isPangram(str) {
  
    str = str.toLowerCase();
    let alphabet = new Array(26).fill(false);
    for (let char of str) {
        
        if ('a' <= char && char <= 'z') {

            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabet[index] = true;
        }
    }
    return alphabet.every(letter => letter);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

