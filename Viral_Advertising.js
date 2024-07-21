function viralAdvertising(n) {
    // Write your code here
    let interest_counter = 0;
    let recepients = 5;
    for (let i = 0; i < n; i++) {
        let interested = Math.floor(recepients / 2);
        interest_counter += interested;
        recepients = interested * 3;
    }
    return interest_counter;
}
viralAdvertising(3);