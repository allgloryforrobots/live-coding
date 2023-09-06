/** 
 * Проверить, является ли заданная строка палиндромом. Сейчас популярно усложнять данную задачу. 
 * Добавим условие, которое будет игнорировать символы пробела, знаков препинания и пр. 
 * Также будем игнорировать регистр.
 */

//  А в Енисее - синева // true

// let str1 = 'Казак';
let str2 = 'Madam, I\'m Adam';
let str3 = 'А в Енисее - синева';
let str4 = 'О, духи, от уборки микробу-то и худо';
// let str5 = 'Не палиндром';

function pal(str) {
    const src = str.toLowerCase().trim().replaceAll(' ', '').replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
    const output = src.split('').reverse().join('');
    return output  === src;
}

// вариант 2

// Задача на палиндром
const isEqual = (str1 = '', str2 = '') => {
    return str1.toLowerCase() === str2.toLowerCase()
  }
  
  const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase()
  }
  
  const isPalindrome = (str = '') => {
    let start = 0
    let end = str.length - 1
  
    while(start < end) {
      const firstChar = str[start]
      const endChar = str[end]
  
      if (!isLetter(firstChar)) {
        start += 1;
        continue;
      }
  
      if (!isLetter(endChar)) {
        end -= 1;
        continue;
      }
  
      if (!isEqual(firstChar, endChar)) {
        return false
      }
  
      start += 1
      end -= 1
    }
  
    return  true
  }

// console.log('str1', pal(str1)) ++
// console.log('str2', pal(str2))
// console.log('str3', pal(str3))
// console.log('str4', pal(str4))
// console.log('str5', pal(str5)) ++ 

