/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function concatenate(list1, list2) {
       let result = list1.concat(list2);
       return result;
  }

  return {
    concatenate: concatenate
  };
};