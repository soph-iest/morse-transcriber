// Unused -- this was just to translate the JSON in intial building.
let newDict = {};

for (let key in dictionary) {
  let val = dictionary[key];
  newDict[val] = key;
}
let newlol = JSON.stringify(newDict);
console.log(newlol);
