let randomNum = Math.round(Math.random()*100);

document.getElementById("stuff").innerHTML = randomNum;


document.getElementById("guess").onclick = function(){
    guess = document.getElementById("input").value; 
    guess = Number(guess);
    console.log("guess: ", guess,"randomNum: ", randomNum);
    if (randomNum == guess)
    {
        document.getElementById("response").textContent = "YOUU WON!!";
    }
    else if(randomNum > guess)
    {
        document.getElementById("response").textContent = "TOO LOW!";
    }
    else document.getElementById("response").textContent = "TOO HIGH!";
}