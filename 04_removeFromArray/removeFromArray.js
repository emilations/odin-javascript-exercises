const removeFromArray = function() {
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result = result.filter((elem) => elem !== arguments[i])
    }
    return result
};

console.log(removeFromArray([1, 2, 3, 4], 3))
// Do not edit below this line
module.exports = removeFromArray;
