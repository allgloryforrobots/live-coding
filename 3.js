const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {

    let stack = intervals;
    let isMerged = false;

    do {

        let result = [];

        while(stack.length > 0) {
            const wasSplittedIndexes = []
            const iterable = stack.pop();
            let [fi, li] = iterable;

            let count = 0;
            for (let i of stack) {
                count++;
                if (wasSplittedIndexes.indexOf(count)) {
                    continue;
                }

                // присоединяем второй элемент к первому
                const [fi2, li2] = i;
                

            }
            
        }

        stack = result;

    } while (isMerged);

}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
