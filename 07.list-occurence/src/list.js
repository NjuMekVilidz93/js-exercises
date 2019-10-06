/**
 * Write a function that checks whether an element occurs in a list.
 */
var List = function() {
  'use strict';

  function has(list, element) {
     list.find(element);
      return element > 3;


  }

  return {
    has: has
  };
};