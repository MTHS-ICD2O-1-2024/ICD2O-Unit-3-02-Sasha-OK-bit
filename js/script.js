// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: March-April 2025
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function calculatehoursworkedAndhourlywage() {
  // input
  const TaxAmount= 3 
  const hoursWorked = parseFloat(document.getElementById("length").value);
  const hoursworked = parseFloat(document.getElementById("width").value)
  const hourlyWage = parseFloat(document.getElementById("height").value);
  let Incometax = hoursWorked * hoursworked * hourlyWage
  let takeHomeSalary = (Incometax) / TaxAmount
  
  document.getElementById('answer1').innerHTML = 
    `L * W * H: ${Incometax.toFixed(2)} <br>
    V / 3: ${takeHomeSalary.toFixed(2)}`

}
