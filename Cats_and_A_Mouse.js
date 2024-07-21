// int x: Cat A's positiond
// int y: Cat B's positiond
// int z: Mouse C's positiond
function catAndMouse(x, y, z) {
    if(Math.abs(z - x) > Math.abs(z - y)){
        return "Cat B"
    }
    else if(Math.abs(z - x) < Math.abs(z - y)){
        return "Cat A"
    }
    else{
        return "Mouse C"
    }
}
catAndMouse(2, 4, 3);