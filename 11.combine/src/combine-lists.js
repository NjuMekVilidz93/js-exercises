/**
 * Write a function that concatenates two lists.
 */
var List = function() {
  'use strict';

  function combine(list1, list2) {
      let result = list1.slice(0);
      for(let i = 0, j = 1; i < list2.length; i++){
        result.splice(j, 0, list2[i]);
        j += (j < 4) ? 2 : 1;
      }
      return result;
  }

  return {
    combine: combine
  };
};