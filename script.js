function randomNumberGenerator(){
    return Math.floor(Math.random()*6)+1;
}

var randomNumber1 = randomNumberGenerator();
var randomNumber2 = randomNumberGenerator();

var imgChanger1 = document.querySelectorAll(".dice-img")[0];
var imgChanger2 = document.querySelectorAll(".dice-img")[1];

imgChanger1.setAttribute("src","./images/dice"+randomNumber1+".png");
imgChanger2.setAttribute("src","./images/dice"+randomNumber2+".png");

var mainHeading = document.querySelector(".result");

if(randomNumber1>randomNumber2){
    mainHeading.textContent = "Player 1 Win 🏆";
}
else if(randomNumber1<randomNumber2){
    mainHeading.textContent = "Player 2 Win 🏆";
}
else{
    mainHeading.textContent = "Draw ☹️";
}