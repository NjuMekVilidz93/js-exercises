/**
 * Write a function that sums the numbers from 1 to n.
 */
var Sum = function() {
  'use strict';

  function sumNumbers(n) {
      // n = (n < 0) ? n*-1 : n;
      // let digits = (""+n).split("");
      // let sum = 0;
      // for( let i = 0; i < digits.length; i++){
      //
      //     let test = parseInt(digits[i]);
      //     sum = sum + test;
      // }
      // return sum;
      let sum = 0;
      for(let i = 0; i <= n; i++){
          sum = sum+ i;
      }
      return sum;


  }

  return {
    sumNumbers: sumNumbers
  };
};