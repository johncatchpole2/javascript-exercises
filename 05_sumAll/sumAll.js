const sumAll = function(firstNum, lastNum) {
    //Create a variable to hold the final sum
    let finalSum = 0;
    //loop through the given numbers
    for(let i = 0; i<= lastNum; i++){
        //On each iteration add the number to the sum
        finalSum += i;
    }
    //return the sum after finishing the loop
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
