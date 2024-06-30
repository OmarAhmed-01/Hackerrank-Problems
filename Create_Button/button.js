var button = document.getElementById("btn");
var counter = 0;

button.addEventListener('click', function(){
    counter++;
    button.innerHTML = counter;
})