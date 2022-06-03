const repeatString = function(word, times) {
    let result = (times < 0) ? "ERROR" : "";
    for (let i = 0; i < times; i++) {
        result = result + word;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
