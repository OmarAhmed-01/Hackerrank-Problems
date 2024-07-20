function bonAppetit(bill, k, b) {
    // Write your code here
    let sumBill = 0;
    let itemsNotAnna = 0;
    for (let i = 0; i < bill.length; i++){
        sumBill += bill[i];
    }
    itemsNotAnna = sumBill - bill[k];
    let bActual = itemsNotAnna / 2;
    if(bActual === b){
        console.log("Bon Appetit");
    }
    else{
        console.log(b - bActual);
    }
}
bonAppetit([3,10,2,9], 1, 7);


