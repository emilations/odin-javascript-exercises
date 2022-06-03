const reverseString = function(string) {
    let stringSplit = string.split("");
    let stringReversed = [];
    for (let i = 0; i < stringSplit.length; i++) {
        stringReversed[i] = stringSplit[stringSplit.length - i - 1];
    }
    return stringReversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
