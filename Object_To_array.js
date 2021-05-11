// From Objects to Array

var object1 = { name: "RajiniKanth", age: 33, hasPets: false };
var printAllValues = (obj) => {
    var values = Object.values(obj);
    console.log(values.join(","));
}
let printAllKeys = (elem) => {
    var keys = Object.keys(elem);
    console.log(keys.join(","));
}
printAllKeys(object1);
printAllValues(object1);