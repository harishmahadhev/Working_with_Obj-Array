//From Array of Arrays to Objects


var arr = [
    [
        ["firstName", "Vasanth"],
        ["lastName", "Raja"],
        ["age", 24],
        ["role", "JSWizard"]
    ],
    [
        ["firstName", "Sri"],
        ["lastName", "Devi"],
        ["age", 28],
        ["role", "Coder"]
    ]
];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    for (let i = 0; i < arr.length; i++) {
        var newobject = {};
        for (let j = 0; j < arr[i].length; j++) {
            newobject[arr[i][j][0]] = arr[i][j][1];
        }
        tranformEmployeeList.push(newobject);
    }
    return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));