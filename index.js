let randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png"; 
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.random();
randomNumber2 = (randomNumber2*6)+1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML = "Drew!";
}