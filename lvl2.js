// https://code.mu/ru/javascript/tasker/stager/

// уровень 2 - очень легкий. потом будет сложнее

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

// 2.4
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
const str3 = "dj2ng4";

const splitted2 = str3.split("");

const isNum = (char) => typeof char === 'number' && isFinite(char);

let idx = null;
let count = 0;

for(let i of splitted2) {
    if (isNum(parseInt(i, 10))) {
        idx = count;
        break;
    }
    count++;
}

// console.log(count)
// Дано число. Выведите в консоль количество четных цифр в этом числе.

const num = 111122;
// console.log(num.toString().split("").filter(el => el % 2 === 0).length)

// #4
// Дана некоторая строка: 'abcde' 
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'

let str5 = "abcde";

const res = str5.split("").reduce((acc, el, idx) => {
    if (idx % 2 === 0) acc += el.toUpperCase();
    else acc += el;
    return acc;
}, "");

// console.log(res)

// #4 Дана некоторая строка со словами: 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

const str6 = 'aaa bbb ccc';

const res2 = str6.split(" ").reduce((acc, el) => {
    acc += ` ${el[0].toUpperCase()}${el.slice(1)}`;
    return acc;
}, "").trim();

// console.log(res2)

// Уровень 2.5
// №1 Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
let str251 = '023m0df0dfg0';
str251 = str251.split("").reduce((acc, el, idx) => {
    if (el === "0") acc.push(idx);
    return acc;
}, []);

// console.log(str251)

// №2 Дана некоторая строка: 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
let str252 = 'abcdefg';
let counter = 0;
str252 = str252.split("").reduce((acc, el, idx) => {
    // if (counter === 2) {
    //     counter = 0;
    // } else {
    //     acc += el;
    //     counter ++;
    // }

    if (!(idx >= 2 && (idx - 2) % 3 === 0)) acc += el;
    return acc;

}, "");

// console.log(str252)

// №3
// Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// нечетные 0, 2, 4
// четные 1, 3, 5

let arr253 = [1, 2, 3, 4, 5, 6];
let odd = 0;
let even = 0;

arr253.forEach((el, idx) => {
    if (idx % 2 === 0) odd += el;
    else even += el
});

// console.log(even / odd);

// Уровень 2.6
// №1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let str261 = "a0k3";

const res261 = str261.split("").reduce((acc, el, idx) => {
    const possibleNum = parseInt(el, 10);
    if (typeof possibleNum === 'number' && isFinite(possibleNum)) acc.push(idx);
    return acc;
}, []);

// console.log(res261)

// №2
// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

const res262 = [123, 456, 789].map(el => +el.toString().split("").reverse().join(""));
// console.log(res262)

// №3
// Дана некоторая строка с числом:
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'
const str263 = '1234567';
let counter263 = 0;
const res263 = str263.split("").reduceRight((acc, el) => {

    console.log('acc',acc, 'el', el, 'counter263', counter263)

    if (counter263 === 2) {
        acc = " " + el + acc;
        counter263 = 0;
    } else {
        acc = el + acc;
        counter263++;
    }

    return acc;
    
}, "");

// console.log(res263);



