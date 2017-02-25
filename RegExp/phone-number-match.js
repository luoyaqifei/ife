var matchPhoneNumber = function (number) {
    var regExp = /\b1[3578]\d{9}\b/;
    var isMatched = regExp.test(number);
    return isMatched;
};

var phone1 = "18812011232";
var phone2 = "18812312";
var phone3 = "12345678909";

var results = [
    matchPhoneNumber(phone1),
    matchPhoneNumber(phone2),
    matchPhoneNumber(phone3)
];

console.log(results);
