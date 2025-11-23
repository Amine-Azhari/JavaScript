const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const curr = document.getElementById("curr");
const pre = document.getElementById("pre");

const btnAC = document.getElementById("AC");
const btnDEL = document.getElementById("DEL");
const btnDivide = document.getElementById("divide");

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btnMultiply = document.getElementById("multiply");

const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btnPlus = document.getElementById("plus");

const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btnMinus = document.getElementById("minus");

const btnDot = document.getElementById("dot");
const btn0 = document.getElementById("0");
const btnEquals = document.getElementById("equals");


let result = 0.0;


btn0.onclick = function() {
    curr.innerHTML += "0"
}
btn1.onclick = function() {
    curr.innerHTML += "1"
}
btn2.onclick = function() {
    curr.innerHTML += "2"
}
btn3.onclick = function() {
    curr.innerHTML += "3"
}
btn4.onclick = function() {
    curr.innerHTML += "4"
}
btn5.onclick = function() {
    curr.innerHTML += "5"
}
btn6.onclick = function() {
    curr.innerHTML += "6"
}
btn7.onclick = function() {
    curr.innerHTML += "7"
}
btn8.onclick = function() {
    curr.innerHTML += "8"
}
btn9.onclick = function() {
    curr.innerHTML += "9"
}
btnAC.onclick = function() {
    curr.innerHTML = ""
}
btnDEL.onclick = function() {
    let value = curr.innerHTML.slice(0,-1);
    curr.innerHTML = value;
}
btnPlus.onclick = function() {
    pre.innerHTML = curr.innerHTML;
    result = Number(curr.innerHTML);
    curr.innerHTML = "+";
}
btnMultiply.onclick = function() {
    pre.innerHTML = curr.innerHTML;
    result = Number(curr.innerHTML);
    curr.innerHTML = "*";
}
btnMinus.onclick = function() {
    pre.innerHTML = curr.innerHTML;
    result = Number(curr.innerHTML);
    curr.innerHTML = "-";
}
btnDivide.onclick = function() {
    pre.innerHTML = curr.innerHTML;
    result = Number(curr.innerHTML);
    curr.innerHTML = "/";
}




btnEquals.onclick = function() {
    if (curr.innerHTML[0] == "+") result+= Number(curr.innerHTML.slice(1))
    else if (curr.innerHTML[0] == "*") result*= Number(curr.innerHTML.slice(1))
    else if (curr.innerHTML[0] == "-") result-= Number(curr.innerHTML.slice(1))
    else if (curr.innerHTML[0] == "/")
    {
        result/= Number(curr.innerHTML.slice(1))
    }
    curr.innerHTML = result
}


