function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > max) {
       max = arr[i];
    }
     
    if (arr[i] < min) {
      min = arr[i]
    }
      
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = Number(avg. toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i=0; i < arr.length; i++) {
        
    sum += arr[i];
  }
    return sum;
}

function differenceMaxMinWorker(...arr) {
if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > max) {
       max = arr[i];
    }
     
    if (arr[i] < min) {
      min = arr[i]
    }
      
    difference = max - min;
  }
  
  return difference;
}

function differenceEvenOddWorker(...arr) {
if (arr.length === 0) {
    return 0;
  }
  let diff = 0;
  let sumEvenElement = 0;
  let sumOddElement = 0; 

  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
       sumEvenElement += arr[i];
    }
     
    else {
      sumOddElement += arr[i]
    }
  }    
  diff = sumEvenElement - sumOddElement;
  
  return diff;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let average = 0;
  let sumEvenElement = 0;
  let countEvenElement = 0; 

  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
       sumEvenElement += arr[i];
       countEvenElement +=1
    }         
  }    
  average = sumEvenElement / countEvenElement;
  
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i=0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;

}

