/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let seenBirds = {};
    arr.forEach(bird => {
        if(!seenBirds[bird]){
            seenBirds[bird] = 1;
        }
        else{
            seenBirds[bird]++;
        }
    });

    let birdId = 999;
    let total = 0;

    for (const key in seenBirds) {
        if(seenBirds[key] > total){
            total = seenBirds[key];
            birdId = key;
        }
        else if(seenBirds[key] == key){
            if(birdId > key){
                birdId = key;
            }
        }    
    }
    return birdId;
}
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])