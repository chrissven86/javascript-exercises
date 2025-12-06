const removeFromArray = function(array, ...removeFromArray) {
    for (let value of removeFromArray) {
        while (array.indexOf(value) !== -1) {
            const index = array.indexOf(value);
            array.splice(index, 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
