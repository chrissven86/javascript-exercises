const palindromes = function (string) {
    const alphNum = 'abcdefghihjklmnopqrstuvwxyz1234567890';
    
    const cleanStr = string
    .toLowerCase()
    .split('')
    .filter((char) => alphNum.includes(char))
    .join('');

    const revString = cleanStr.split('').reverse().join('');

    return cleanStr === revString;
};

// Do not edit below this line
module.exports = palindromes;
