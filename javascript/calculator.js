let current = 0;
let x = document.getElementsByClassName("btn operator");
let y = document.getElementById("btn operator");
let operation = document.getElementsByClassName("btn operator");

switch(operation){
    case "+":
        let sum = x+y;
    case "-":
        let diff = x-y;
    case "/":
        let div = x/y;
    case "*":
        let mul = x*y;
    default:
}

function updateDisplay() {
    display.textContent = currentInput;
}

function clearall(){
    document.getElementById("clear").addEventListener("click", clearAll);
}

function equalto(){}