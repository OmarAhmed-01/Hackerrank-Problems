/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    let arr = Array.from(String(n), Number);
    let counter = 0;
    for (let i = 0; i < arr.length; i++){
        if(n % arr[i] === 0){
            counter++;
        }
    }
    return counter;
}
findDigits(124);