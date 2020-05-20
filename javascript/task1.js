var CountBs = function (String) {
    var count = 0
    for (var i = 0; i < String.length; i++) {
        if (String[i] === "B") {
            count++;
        }
    }
    return count;
}

var CountChar = function (Str, char) {
    var count1 = 0
    for (var i = 0; i < Str.length; i++) {
        if (Str[i] === char) {
            count1++;
        }
    }
    return count1;
}

console.log(CountBs("Bob"))
// It returns 1
// It returns 2
console.log(CountChar("Bob", "a"))