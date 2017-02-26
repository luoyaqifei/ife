var hasNeighborDuplication = function (str) {
    var regExp = /\w*\b(\w+)\s+\b\1\w*/;
    var isMatched = regExp.test(str);
    return isMatched;
};

var str1 = "foo foo bar";
var str2 = "foo bar foo";
var str3 = "foo  barbar bar";
var str4 = "bar foo foo bar";

var results = [
    hasNeighborDuplication(str1),
    hasNeighborDuplication(str2),
    hasNeighborDuplication(str3)    ,
    hasNeighborDuplication(str4)
];

console.log(results);