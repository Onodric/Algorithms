"use strict";
  // Given an unsorted array, determine if it has any duplicate items.
  // methods:
    // hasDuplicates -- takes an array return a boolean
    // listDuplicates -- takes an array return an array of duplicated entries
    // cleanArray -- takes an array return an array of unique members

let DuplicateDetector = (function (oldDupeDetector) {

  let duplicate_list = [];
  let clean_list = [];

  let test_array_member = function (element, index, array) {
    if (array.indexOf(element) !== array.lastIndexOf(element) && duplicate_list.indexOf(element) === -1) {
      duplicate_list.push(element);
    } else {
      clean_list.push(element);
    }
  };

  let validate_string_array = function (element, index, array) {
    if (typeof element !== 'string') {
      try {
        throw "myException";
      }
      catch (e) {
        document.getElementById("dupe_error").innerText = "Error at index" +
            " number " + index + ", value: " + element + " Array members" +
            " must be of type 'string'.";
      }
    }
  };

  oldDupeDetector.listDuplicates = function (testArray) {
    duplicate_list = [];
    clean_list = [];
    testArray.forEach(validate_string_array);
    testArray.forEach(test_array_member);
    console.log("duplicate List", duplicate_list);
    return duplicate_list;
  };

  oldDupeDetector.hasDuplicates = function(testArray) {
    oldDupeDetector.listDuplicates(testArray);
    return !!duplicate_list.length;
  };

  oldDupeDetector.cleanArray = function (testArray) {
    duplicate_list = [];
    clean_list = [];
    testArray.forEach(validate_string_array);
    testArray.forEach(test_array_member);
    console.log("clean List", clean_list);
    return clean_list;
  };

return oldDupeDetector;

})({});

