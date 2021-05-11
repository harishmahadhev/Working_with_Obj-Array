//Print the Students whose age is below 20


var students = [
    { name: "Siddharth Abhimanyu", age: 21 }, { name: "Malar", age: 25 },
    { name: "Maari", age: 18 }, { name: "Bhallala Deva", age: 17 },
    { name: "Baahubali", age: 16 }, { name: "AAK chandran", age: 23 }, { name: "Gabbar Singh", age: 33 }, { name: "Mogambo", age: 53 },
    { name: "Munnabhai", age: 40 }, { name: "Sher Khan", age: 20 },
    { name: "Chulbul Pandey", age: 19 }, { name: "Anthony", age: 28 },
    { name: "Devdas", age: 56 }
];

function returnMinors(arr) {
    var object1 = [];
    var object = arr.filter(e => e.age < 20);
    for (var i in object) {
        object1.push(object[i].name);
    }
    return object1;
}
console.log(returnMinors(students));