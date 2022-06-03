const sumAll = function(start, end) {
    let count = 0;
    if (!(Number.isInteger(start) && Number.isInteger(end))) return "ERROR"

    let input = [...arguments].sort((a, b) => a - b);
    if (input[0] < 0 || input[1] < 0) return "ERROR"

    for (let i = input[0]; i <= input[1]; i++) count += i;
    return count;
};

// Do not edit below this line
module.exports = sumAll;
