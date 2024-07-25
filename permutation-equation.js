/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    let index1 = [];
    let index2 = [];

    for (let i = 1; i <= p.length; i++){
        index1.push(p.indexOf(i) + 1);
    }

    index1.forEach(index => {
        index2.push(p.indexOf(index) +1);
    });
    return index2; 

};
permutationEquation([5,2,1,3,4]);