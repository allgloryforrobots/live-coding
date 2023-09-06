// Преобразовать строку в объект, разделяя свойства по точке

const str = 'one.two.three.four.five';

// RESULT
/*
{
  one: {
    two: {
      three: {
        four: {
          five: {}
        }
      }
    }
  }
}
*/

function toObj(str) {

    const resultObj = {}
    let nextLvl = resultObj;

    const stack = str.split(".");

    while(stack.length > 0) {
        const node = stack.shift();
        nextLvl[node] = {};
        nextLvl = nextLvl[node];
    }

    return resultObj;

}

// console.log( JSON.stringify(toObj(str)) )

// вариант 2
const toObj2 = (str) => {

    const arr = str.split(".");

    const result = arr.reduceRight((acc, el) => {
        return { [el]: acc }
    }, {})

}
