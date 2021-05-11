// Check if the Answer matches for Security Questions


var securityQuestions = [{
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
];

function chksecurityQuestions(securityQuestions, question, answer) {
    for (var i in securityQuestions) {
        if ((securityQuestions[i].question === question) && (securityQuestions[i].expectedAnswer === answer)) {
            return true;
        } else {
            return false;
        }
    }
}
var ques = "What was your first pet’s name?";
var ans = "FlufferNutter";
var state = chksecurityQuestions(securityQuestions, ques, ans);
console.log(state);
var ques1 = "What was your first pet’s name?";
var ans1 = "DufferNutter";
var state1 = chksecurityQuestions(securityQuestions, ques1, ans1);
console.log(state1);