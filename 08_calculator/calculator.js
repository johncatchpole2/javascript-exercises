const add = function(para1,para2) {

	if(para1 === 0 || para2 ===0){
    return para1 + para2;
  }
  let result = para1 + para2;
  return result;
};

const subtract = function(para1,para2) {
  let result = para1-para2;
	return result;
};

const sum = function(array = []) {
return array.reduce((total,current) => total + current, 0);
};

const multiply = function(array = []) {
  return array.length //ternary Conditional
  ? array.reduce((accumlator, nextItem) => accumlator * nextItem)
  : 0 ;
};

const power = function(num,powerOf) {
	return Math.pow(num,powerOf);
};

const factorial = function(num) {
  //Recursive Factorial
	if(num === 0)
  {
    return 1;
  }
  return num * factorial (num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
