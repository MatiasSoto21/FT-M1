'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
    var array = num.split('');
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
       sum = sum +num[i] * Math.pow(2, array.length - 1 - i);
    }
    return sum;
  
}

function DecimalABinario(num) {
  // tu codigo aca
var array = [];
while (num > 0){
  array.unshift(num%2);
  num = Math.floor(num/2);
}
return array.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}