// Объект на вход
const object = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
};

// const addLevels = (obj, level) => {

//     if (typeof obj === 'object' && obj !== null) {
//         obj.level = level;

//         for (let key in obj) {

//             const node = obj[key];
//             if (Object.keys(node).length > 0) {
//                 addLevels(node, level + 1);
//             }
    
//         }

//     }

//     return obj;

// }

const addLevels = (obj) => {
    const newObj = JSON.parse(JSON.stringify(obj));
    const stack = [{ obj: newObj, level: 0 }];
  
    while (stack.length > 0) {
      const { obj, level } = stack.pop();
  
      for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          obj[key].level = level + 1;
          stack.push({ obj: obj[key], level: level + 1 });
        }
      }
    }
  
    newObj.level = 0
  
    return newObj
  }

const updatedObject = addLevels(object, 0);
console.log("updatedObject", updatedObject)


// WTF [Object]?? => лучше { level: X }

// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/
