/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] <= 0){
            counter += 1;
        }
    }
    if(counter >= k){
        return "NO";
    }
    else{
        return "YES";
    }
}
angryProfessor(3, [-2, -1, 0, 1, 2]);