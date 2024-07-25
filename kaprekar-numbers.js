/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    let results = [];
    
    for (let num = p; num <= q; num++) {
        let numStr = num.toString();
        let numLength = numStr.length;
        let squared = (num * num).toString();
        
        let rightPart = squared.slice(-numLength);
        let leftPart = squared.slice(0, -numLength) || '0'; // If left part is empty, use '0'
        
        let sum = parseInt(leftPart) + parseInt(rightPart);
        
        if (sum === num) {
            results.push(num);
        }
    }
    
    if (results.length > 0) {
        console.log(results.join(' '));
    } else {
        console.log('INVALID RANGE');
    }
}