// Проверить, является ли 2 переданных строки анаграммой

const anagram = (strA, strB) => {

    strA = strA.toLowerCase();
    strB = strB.toLowerCase();

    if (strA.length !== strB.length) return false;

    for(let letter of strA) {
        const idx = strB.indexOf(letter)
        if (idx === -1) {
            return false;
        }

        strB.slice(idx, 1);
    }

    return true;
}

console.log(anagram('finderF', 'FriendF')) // true
console.log(anagram('hello', 'olleh')) // false