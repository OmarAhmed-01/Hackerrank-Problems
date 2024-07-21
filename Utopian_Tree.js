/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
    // Write your code here
    let treeHeight = 1;
    for (let i = 0; i < n; i++){
        if(i % 2 == 0){
            treeHeight *= 2;
        }
        else{
            treeHeight += 1;
        }
    }
    return treeHeight;
} 
utopianTree(5);