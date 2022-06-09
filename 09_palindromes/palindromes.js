const palindromes = function (input) {
    let regEx = /[a-zA-Z]/;
    let newInput = input.split("")
                        .filter((letter) => regEx.test(letter))
                        .map((char) => char.toLowerCase())
                        .join("")
    return (newInput.split("").reverse().join("") == newInput);
};

// Do not edit below this line
module.exports = palindromes;
