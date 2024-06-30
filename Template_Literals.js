function sides(literals, ...expressions) {
    let area = expressions[0];
    let perim = expressions[1];
    let s1 = (perim + discret(perim, area)) / 4;
    let s2 = (perim - discret(perim, area)) / 4;
    return [s2, s1]; 
}

function discret(p, a){
    return Math.sqrt(Math.pow(p, 2) - 16 * a);
}