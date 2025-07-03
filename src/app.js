import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardValue = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

  let cardSuit = ['♦', '♥' ,'♠' ,'♣']

  

  function getRandomValue(Array){
    return Array[Math.floor(Math.random()* cardSuit.length)]
   }
   let suitPrint = getRandomValue(cardSuit)

    let upperSuit =  document.getElementById('upperSuit')
   let bottomSuit =  document.getElementById('bottomSuit')

   if (suitPrint == '♦' || suitPrint =='♥'){
    upperSuit.style.color = 'red';
    bottomSuit.style.color = 'red';

   }


  console.log(getRandomValue(cardValue),getRandomValue(cardSuit));
  document.getElementById('cardNumber').textContent = getRandomValue(cardValue)
    document.getElementById('upperSuit').textContent = suitPrint
    document.getElementById('bottomSuit').textContent = suitPrint

  
};
