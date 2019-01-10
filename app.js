//question 1
//Multiples of 3 and 5
//Find the sum of all the multiples of 3 and 5 below 1000

//helper function
var isDivisible = function (num, denominator) {
    return num % denominator == 0;
}

//answer
var problemOne = function () {
    var sol = 0;
    for (i = 0; i < 1000; i++) {
        if (isDivisible(i, 3) || isDivisible(i, 5)) {
            sol += i;
        }
    }
    console.log(sol);
}

problemOne();