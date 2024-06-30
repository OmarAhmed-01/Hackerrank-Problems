//Complete the function in the editor. It has one parameter: an array, a, of objects. 
//Each object in the array has two integer properties denoted by x and y. 
//The function must return a count of all such objects o in array a that satisfy 0.x == 0.y.

function getCount(objects) {
    let counter = 0;
    let object = {};
    for (const iterator of Object.keys(objects)) {
        object = objects[iterator];
        if(object.x == object.y){
            counter++;
        }
    }
    return counter;
}

getCount([{x: 1, y:1}, {x:2, y:3}, {x:3, y:3}]);