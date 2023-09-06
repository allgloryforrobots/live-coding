// Вычислить факториал заданного числа

const num = 5;

function factorial(num) {
    if (num === 0) return 0;

    let base = 1;
    let result = 1;

    while (base <= num) {
        result *= base++;
    }

    return result;

}

console.log(factorial(4))