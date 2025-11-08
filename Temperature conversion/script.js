const myinput = document.getElementById("myinput");
const convChoice1 = document.getElementById("conv-choice1");
const convChoice2 = document.getElementById("conv-choice2");
const output = document.getElementById("output");
const mysubmit = document.getElementById("mysubmit");


 document.getElementById("mysubmit").onclick = function(){
    let temp = Number(myinput.value);
    
    if (convChoice1.checked )
    {
        let result = 9/5 * temp + 32;
        output.innerHTML = Math.round(result);
    }
    else if (convChoice2.checked )
    {
        let result = 5/9 * (temp - 32);
        output.innerHTML = result;
    }
    else output.innerHTML = "Please select an option";
}