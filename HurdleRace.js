/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here
    const max  = Math.max(...height);
    if (max > k){
        return max - k;
    }
    else{
        return 0;
    }
}
hurdleRace(4,[1, 6, 3, 5, 2]);