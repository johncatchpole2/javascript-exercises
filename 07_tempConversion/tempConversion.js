//Farenheit to celsius
const ftoc = function(temp) {
  //Conversion from Cel to Farenheit(temp - 32 * 5/9 = result)
  let conv = (temp - 32) * 5/9;
  //Round number to one decimal place
  let roundedResult = Math.round(conv * 10) / 10;
  return roundedResult;
};
//Celsius to farneheit
const ctof = function(temp) {
//Conversion Forumla Cel to Faren(temp * 9/5 + 32)
let conversion = (temp * 9/5) + 32;
//Round number to one decimal place
let result = Math.round(conversion * 10) / 10;
return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
