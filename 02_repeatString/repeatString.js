const repeatString = function(string, num) {
let concatedString = '';

  if(num < 0)
  {
    return 'ERROR';
  }  
    for(let i = 0; i < num; i++)
    {        
        //Add the string input to the variable to hold the result
        concatedString += string
    }
    return concatedString;
};

// Do not edit below this line
module.exports = repeatString;
