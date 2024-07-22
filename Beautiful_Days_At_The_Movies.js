/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let counter = 0;
    for (let s = i; s <= j; s++){
        const reversed = parseInt(s.toString().split("").reverse().join(""), 10);
        if (Math.abs(s - reversed) % k === 0){
            counter++;
        }
    }
    return counter;
}
beautifulDays(49860, 205494, 155635764);
