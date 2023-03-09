// Global access to all inputs 
const billInput = document.querySelector('#billTotalInput');
const tipInput = document.querySelector('#tipInput');
const numberOfPeopleDiv = document.querySelector('#numberOfPeople');
const perPersonTotalDiv = document.querySelector('#perPersonTotal');

// Number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerHTML)

// The total bill per person
const calculateBill = () => {
    // Bill from user input & converted to a number
    const bill = Number(billInput.value);
  
    // The tip from user converted to a percentage
    const tipPercentage =  Number(tipInput.value) / 100;

    // Total tip amount
    const tipAmount = bill * tipPercentage;
  
    // The total (tip amount + bill)
    const total = tipAmount + bill;
  
    // The per person total 
    const perPersonTotal = total/numberOfPeople;

    // The perPersonTotal on DOM & shown to user
  perPersonTotalDiv.innerHTML = `${perPersonTotal.toFixed(2)}`
  
 }

  // ** Splits the bill between more people **
  const increasePeople = () => {

    numberOfPeople += 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerHTML = numberOfPeople; 
  
    // calculate the bill based on the new number of people
    calculateBill();
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    
    if (numberOfPeople <= 1) {
      return
    }
    
    // decrement the amount of people
    numberOfPeople -= 1
  
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerHTML = numberOfPeople; 
  
    // calculate the bill based on the new number of people
    calculateBill();

  }

// For Toggle switch
  let icon = document.getElementById("icon");

  icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src = "icon/sun.png";
    }else {
      icon.src = "icon/moon.png";
    }
  }













