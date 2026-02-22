function randomNumberGenerator(){
    return Math.floor(Math.random()*6)+1;
}

var randomNumber1 = randomNumberGenerator();
var randomNumber2 = randomNumberGenerator();

var imgChanger1 = document.getElementsByTagName("img")[0];//as if it passes set of html we used[0]
var imgChanger2 = document.getElementsByTagName("img")[1];

imgChanger1.setAttribute("src","./images/dice"+randomNumber1+".png");
imgChanger2.setAttribute("src","./images/dice"+randomNumber2+".png");

var mainHeading = document.getElementsByTagName("h1")[0];

if(randomNumber1>randomNumber2){
    mainHeading.textContent = "Player 1 Win 🏆";
}
else if(randomNumber1<randomNumber2){
    mainHeading.textContent = "Player 2 Win 🏆";
}
else{
    mainHeading.textContent = "Draw ☹️";
}