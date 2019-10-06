/**
 * Write a function that tests whether a string is a palindrome.
 */
var Palindrome = function() {
  'use strict';

  function is(word) {
      let length = word.length;
      let mid = Math.floor(length/2);
      for(let i = 0; i < mid; i++){
        if(word[i] !== word[length - 1 - i]) {
          return false;
        }
      }
      return true;
  }

  return {
    is: is
  };
};