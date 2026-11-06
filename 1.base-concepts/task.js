"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x;
  let y;

  if (d < 0) {
  } else if (d === 0) {
    x = -b / (2 * a)
    arr.push(x)
  } else if (d > 0) { 
    x = (-b + Math.sqrt(d) ) / (2 * a)
    y = (-b - Math.sqrt(d) ) / (2 * a)
    arr.push(x)
    arr.push(y)
  }


  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let perc = percent / 100 / 12;
  let body = amount - contribution;

  if (body <= 0 ) {
    return 0;
  }
  
  let fee;
  fee = body * (perc + (perc / (((1 + perc) ** countMonths) - 1)))
  let total = fee * countMonths;
  
  return Number(total.toFixed(2)); 
}


