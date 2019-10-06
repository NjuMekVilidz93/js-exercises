/**
 * Write function that reverses a list, preferably in place.
 */
var List = function() {
  'use strict';

  function reverseList(list) {
      let ret = new Array();
      for(let i = list.length-1; i >= 0; i--){
        ret.push(list[i]);
      }
      return ret;
  }

  return {
    reverseList: reverseList
  };
};