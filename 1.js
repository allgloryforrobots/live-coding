// Найти наибольший и наименьший элемент в массиве, не используя Math.max и Math.min

const arr = [1, 2, 3, 5, 6, 12, 1, 2, 0, 4];


let min = arr.at(0);
let max = arr.at(0);

for (let i of arr) {
    if (min > i) min = i;
    if (max < i) max = i;
}

console.log(min, max)


