/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

const obj = {
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: 4
};


// рекурсия
const flattenObject = (obj) => { 

    const clone = structuredClone(obj);

    const result = {};

    _next(clone, "");

    function _next(node, path) {
        for (let key in node) {
            const child = node[key];
            const p = path + key.toString();

            if (typeof child === 'object' && key !== null) {
                _next(child, p)
            } else {
                result[p] = child;
            }

        }
    }

    return result;

}

// стек

const flattenObject1 = (obj) => {

    const result = {};

    const stack = [ { node: obj, prefix: "" } ];

    while (stack.length > 0) {
        const { node, prefix } = stack.pop();
        for (let key in node) {
            const child = node[key];
            const childPrefix = prefix ? prefix + "." + key : key.toString();
            if (typeof child === 'object' && child !== null) {
                stack.push({ node: child, prefix: childPrefix })
            } else {
                result[childPrefix] = child;
            }
        }
    }


    return result;
}

// const flattenedObj = flattenObject(obj);
// console.log('******* flattenedObj', flattenedObj);
  // Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

  
const flattenedObj = flattenObject1(obj);
console.log('******* flattenedObj1', flattenedObj);