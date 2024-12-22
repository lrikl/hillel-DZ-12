'use strict';

function getSumArrNumbers(arrUser) {
    if (!Array.isArray(arrUser) || arrUser.length === 0) {
        return "задайте масив із даними";
    }

    let result = 0;
    let totalNumbers = 0;

    for (let i = 0; i < arrUser.length; i++) {
        if (typeof arrUser[i] === "number" && !isNaN(arrUser[i])) {
            result += arrUser[i];
            totalNumbers++;
        }
    }

    if (totalNumbers === 0) {
        return "у масиві немає чисел";
    }

    return result/totalNumbers;
}

console.log(getSumArrNumbers([1, NaN, 12, '123', 2, null, { a: 10 }]));
