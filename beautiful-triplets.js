/*
 * Complete the 'beautifulTriplets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function beautifulTriplets(d, arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            count++;
        }
    }

    return count;
}