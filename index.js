var randomNumber1= Math.floor(Math.random()*6)+1;

var randomNumber2=Math.floor(Math.random()*6)+1;;
console.log("Javascript functioning");
var r= document.getElementsByClassName("img1");

var s= document.getElementsByClassName("img2");
// for 1st dice

if(randomNumber1==1)
{
    r[0].setAttribute("src", "./images/dice1.png");
}

else if(randomNumber1==2)
{
    r[0].setAttribute("src","./images/dice2.png");
}

else if(randomNumber1==3)
{
    r[0].setAttribute("src","./images/dice3.png");
}

else if(randomNumber1==4)
{
    r[0].setAttribute("src","./images/dice4.png");
}

else if(randomNumber1==5)
{
    r[0].setAttribute("src","./images/dice5.png");
}

else{
    r[0].setAttribute("src","./images/dice6.png");
}


//for 2nd dice..

if(randomNumber2==1)
{
    s[0].setAttribute("src", "./images/dice1.png");
}

else if(randomNumber2==2)
{
    s[0].setAttribute("src","./images/dice2.png");
}

else if(randomNumber3==3)
{
    s[0].setAttribute("src","./images/dice3.png");
}

else if(randomNumber2==4)
{
    s[0].setAttribute("src","./images/dice4.png");
}

else if(randomNumber2==5)
{
    s[0].setAttribute("src","./images/dice5.png");
}

else{
    s[0].setAttribute("src","./images/dice6.png");
}


if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}

else{

    document.querySelector("h1").innerHTML="Draw!";
}

