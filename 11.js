// Найти сумму всех чисел в заданном диапазоне

const a = 1;
const b = 5;

function intervalSum(a, b) {

    let acc = 0;

    for (let i = a; i <= b; i++) {
        acc += i;
    }

    return acc;

}

console.log(intervalSum(-3, 3))

// 2. 3. 4