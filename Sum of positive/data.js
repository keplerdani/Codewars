function positiveSum(arr) {
  //create var for solution
  let solution = 0;
  
  //create var assign numbers to it
    
  //iterate over the array
  for (let number of arr) {
    //if the number is positive
    
    if (number > 0) {
      //add it to the solution variable
      solution = solution + number;
    }
  }
  return solution  
}

//input numbersOfArray = [1,-4,7,12]
//output solution = 20