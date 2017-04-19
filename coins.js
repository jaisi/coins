console.log("i am here");

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  var inputValue=0.67;

  /*
  var a = document.getElementById("convert");
  a.addEventListener("click",handleEvent);

  function handleEvent(event){
    console.log("within handleEvent function");
    inputValue=document.getElementById("amount").value;
  */
  console.log("inputValue", inputValue);

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
  
  remainder=inputValue;
  
  for(remainder = remainder-0.25;remainder>0;remainder=remainder-0.25){
    coinPurse.quarters++;
    console.log("remainder",remainder);
    console.log("# of quarters",coinPurse.quarters);
  }
  console.log("i am here");
  console.log("remainder now", remainder);
  remainder=remainder+0.25;
 
  for(remainder = remainder-0.10;remainder>0;remainder=remainder-0.10){
    coinPurse.dimes++;
    console.log("dimes remainder",remainder);
    console.log("# of dimes",coinPurse.dimes);
  }
  remainder=remainder+0.10;
  console.log("nickles remainder", remainder);

  for(remainder = remainder-0.05;remainder>0;remainder=remainder-0.05){
    coinPurse.nickels++;
    console.log("remainder",remainder);
    console.log("# of nickles",coinPurse.nickles);
  }
  remainder=remainder+0.05;

  for(remainder = remainder-0.01;remainder>0;remainder=remainder-0.01){
    coinPurse.pennies++;
    console.log("remainder",remainder);
    console.log("# of pennies",coinPurse.pennies);
  }
  remainder=remainder+0.01;
  

  return coinPurse;
}

var coins = coinCounter()
console.log(coins);