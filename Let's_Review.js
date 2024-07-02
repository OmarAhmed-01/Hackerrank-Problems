function processData(input) {
    //Enter your code here
  let splitStr = input.split("\n").slice(1);
    for (let i of splitStr){
        let even = "";
        let odd = "";
        for (let j = 0; j < i.length; j++){
            if(j % 2 == 0){
                even += i[j];
            }
            else{
                odd += i[j];
            }
        }
        console.log(`${even} ${odd}`);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
