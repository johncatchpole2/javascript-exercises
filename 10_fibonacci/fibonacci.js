const fibonacci = function(fibNum) {
  let a = 0;
  let b = 1;    
    
      if(fibNum < 0){
            return 'OOPS';
        }
      if(fibNum === 0){
            return 0;
        }

      for(let i = 1;i < fibNum; i++){
        const reg = b; //1
        b = a + b;//First ite: 0+1 = 1
        a = reg;// 1
      }
      return b;
}; 

// Do not edit below this line
module.exports = fibonacci;
