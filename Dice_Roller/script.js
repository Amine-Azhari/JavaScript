const title = document.getElementById("title");
const input = document.getElementById("NOfDices");
const submit = document.getElementById("mysubmit");
const output = document.getElementById("output");
const dice_container = document.getElementById("dice-container");


submit.onclick = function() {DiceRoller(Number(input.value))};


function DiceRoller(n)
{
    let values = [];
    let images = [];
    dice_container.innerHTML = "";

    for (let i=0; i<n;i++)
    {
        values.push(Math.round(Math.random()*5 +1));
    }

    const values_dis = [...values].join(",");
    output.innerHTML = "Dices: " + values_dis;

    for (let value of values)
    {
        const img = document.createElement("img");
        img.src = `dice_images/Dice_${value}.png`;
        img.alt = `Dice ${value}`;
        img.className = "image";

        dice_container.appendChild(img);
    }


}