//List to Object

var arr = [
    ["make", "Ford"],
    ["model", "Mustang"],
    ["year", 1964]
];

/*function objectify(array) {
    var object = {};
    array.forEach((element) => {
        object[element[0]] = element[1];
    });
    return object;
}*/

/*function objectify(array) {
    return array.reduce(function(p, c) {
        p[c[0]] = c[1];
        return p;
    }, {});
}*/
function fromListToObject(arr) {
    var newObject = {};
    newObject = Object.fromEntries(arr);
    return newObject;
}
console.log(fromListToObject(arr));