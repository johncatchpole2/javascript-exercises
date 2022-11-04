const caesar = function(string,shiftFac) {
    return string //return string
    .split('')  //take each individual character
    .map(char => shiftChar(char, shiftFac)) //map it to a variable called char which is
    .join(""); //join the newly
};
//Arrow function declaration:
const codeSet = code => (code < 97 ? 65: 97);
//codeset is the function name, code is the single parameter the function
//needs and since its single parameter no need for parentheses
//What the function executions is a ternary conditional check
//if(code < 97 and this is true return 65 else if its false return 97)

//this function just just a way of doing modulus so that it works with negative numbers
//https://stackoverflow.com/questions/44467539/javascript-modulo-gives-a-negative-result-for-negative-numbers

//function to perform modulus
const mod = (n,m) => (n % m + m) % m;

//function to shift char to correct char in caesar encryption
const shiftChar = (char, shiftFac) =>{
    const code = char.charCodeAt();

    if((code >= 65 && code <= 90)|| (code >= 97 && code <=122)){
        return String.fromCharCode(
            mod(code + shiftFac - codeSet(code), 26) + codeSet(code)
        );
    }
    return char;
}
// Do not edit below this line
module.exports = caesar;
