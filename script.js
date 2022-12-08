let firstInterval = document.getElementById('firstInterval');
let secondInterval = document.getElementById('secondInterval');
let update = document.getElementById('update');
let timer = document.getElementById('timer');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('res');
let body = document.querySelector('body');
let section = document.querySelector('section');
let test;
let test2;
let timeValue;
let x;
let testSecondInterval = false;
function up(){
    timeValue = firstInterval.value;
    Number(timer.value)
    timer.innerHTML = timeValue;
    x = secondInterval.value;
    Number(x);
}
up();
const inter1 = () => {
    reset.innerHTML = testSecondInterval ? "Reset" : "Go";
    test = setInterval(function(){
        timer.innerHTML -= 1
        if(timer.innerHTML == 0){
            testSecondInterval = true;
            clearInterval(test)
            x = secondInterval.value;
            inter2();
        }
    },1000)
}
const inter2 = () => {
    reset.innerHTML = "Reset";
    test2 = setInterval(function(){
        timer.innerHTML = x--;
        if(timer.innerHTML == 0){
            testSecondInterval = false;
            clearInterval(test2)
            timer.innerHTML = firstInterval.value;
            inter1();
        }
    },1000)
}
function sta(){
    inter1();
}
function ps(){
    if(testSecondInterval == true){
        clearInterval(test2)
    } else {
        clearInterval(test2)
    } 
}

function supp(){
    clearInterval(test2);
    clearInterval(test2);
    timer.innerHTML = firstInterval.value;
    reset.innerHTML = "Reset";
}




