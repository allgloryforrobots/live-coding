// https://code.mu/ru/javascript/tasker/stager/

// уровень 2 - очень легкий

//  2.1 
// 1 Дана некоторая строка. Найдите позицию первого нуля в строке

const str = "super0string0";
// console.log(str.indexOf("0"))

// 2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти

const fiveSumArr = [];

for (let i = 0; i <= 1000; i++) {

    if (i < 10) continue;

    const secNum = Math.floor(i / 10);
    const firstNum = i % 10;

    if (secNum + firstNum === 5) {
        fiveSumArr.push(i);
    }
    
}

// console.log(fiveSumArr) // [ 14, 23, 32, 41, 50 ]

// 3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива

const srcArr1 = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < srcArr1.length / 2; i++) {
    sum += srcArr1[i];
}

// console.log('sum', sum)

// 2.2
// Дана строка. Удалите предпоследний символ из этой строки
let str2 = "12345"

// splice
let splitted = str2.split("");
splitted.splice(splitted.length - 2, 1);
const output1 = splitted.join("");
// console.log(output1)

// slice
const part1 = str2.slice(0, str2.length - 2);
const endChar = str2.slice(str2.length - 1, str2.length);
const output2 = part1 + endChar;
// console.log(output2)

// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов
const inputArr = [1, 2, 3, 4, 5, 6];
let firstSum = 0;
let secondSum = 0;

for (let i = 0; i <= inputArr.length - 1; i++) {
    if (i < inputArr.length / 2) firstSum += inputArr[i];
    else secondSum += inputArr[i];
}

let result = firstSum / secondSum;
// console.log(result)


