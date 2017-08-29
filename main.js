"use strict";

let numberArray = [1, 2, 3, 4, 5, 6, 7];
let cleanStringArray = ["Nashville", "Boston", "Los Angeles", "New York", "Raleigh", "Jacksonville"];
let duplicateStringArray = ["Nashville",
                            "Boston",
                            "Los Angeles",
                            "New York",
                            "Raleigh",
                            "Boston",
                            "Los Angeles",
                            "New York",
                            "Jacksonville"];

let numBtn = document.getElementById("duplicate_error");
let dirtyBtn = document.getElementById("duplicate_dupes");
let cleanBtn = document.getElementById("duplicate_clean");

let dupeBool = document.getElementById("dupe_bool");
let dupeError = document.getElementById("dupe_error");
let dupeArrays = document.getElementById("dupe_arrays");

let activateDupe = function (arr) {
  return {
          'hasDuplicates': DuplicateDetector.hasDuplicates(arr),
          'listDuplicates': DuplicateDetector.listDuplicates(arr),
          'cleanArray': DuplicateDetector.cleanArray(arr)
          };
};

numBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let results = activateDupe(numberArray);
    dupeBool.innerText = "This array has Duplicates? " + results.hasDuplicates;
    dupeArrays.innerHTML = `<p>Original Array: ${numberArray}</p><p>Duplicates Array: ${results.listDuplicates}</p><p>Clean Array: ${results.cleanArray}</p>`;
});

dirtyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let results = activateDupe(duplicateStringArray);
    dupeBool.innerText = "This array has Duplicates? " + results.hasDuplicates;
    dupeArrays.innerHTML = `<p>Original Array: ${duplicateStringArray}</p><p>Duplicates Array: ${results.listDuplicates}</p><p>Clean Array: ${results.cleanArray}</p>`;
});

cleanBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let results = activateDupe(cleanStringArray);
    dupeBool.innerText = "This array has Duplicates? " + results.hasDuplicates;
    dupeArrays.innerHTML = `<p>Original Array: ${cleanStringArray}</p><p>Duplicates Array: ${results.listDuplicates}</p><p>Clean Array: ${results.cleanArray}</p>`;
});
