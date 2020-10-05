module.exports = function reverse(n) {
    let reverseNum = [];

    if (n < 0) {
        n = -1 * n;
    }

    for (let i = 0; i < String(n).length; i++) {
        reverseNum.push(String(n)[i]);
    }
    
    reverseNum = Number(reverseNum.reverse().join(''));

    return reverseNum;
}
