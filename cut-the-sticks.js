/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    let result = [];
    
    while (arr.length > 0) {
        result.push(arr.length);
        let min = Math.min(...arr);
        arr = arr.map(stick => stick - min).filter(stick => stick > 0);
    }
    
    return result;
}
cutTheSticks([1,2,3]);