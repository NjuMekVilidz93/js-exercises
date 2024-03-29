/**
 * Write a function that returns the largest element in a list.
 */
var List = function() {
  'use strict';

  function findLargest(list) {
        return Math.max.apply(Math, list);
  }

  return {
    findLargest: findLargest
  };
};