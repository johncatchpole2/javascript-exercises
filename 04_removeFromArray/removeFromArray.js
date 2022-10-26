const removeFromArray = function(...args) {
    //the very first item  in our list of arguments is the array,
    //we will pull it out with args[0]
    const array = args[0];
    //create a new empty array
    const newArray = [];
    
    array.forEach(element => {
        //push every element into the new array
        //UNLESS it is included in the function arguments
        //so we create a new array with every item, except those that should be removed
        if(!args.includes(element)){ //if args doesn't include element
            newArray.push(element) //push(add)it to the new array
        }
    });
    //and return that array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
