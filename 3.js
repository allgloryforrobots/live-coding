const array1 = [[1, 3], [2, 6], [8, 10], [15, 18]]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [[1, 4], [4, 5]]; // [[1, 5]]
const array3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {

    let stack = intervals;
    let isMerged = false;

    do {

        isMerged = false;
        let result = [];

        while(stack.length > 0) {

            const i1 = stack.shift();
            let [fi1, li1] = i1;

            for (let c = 0; c <= stack.length - 1; c++) {
                
                const i2 = stack[c];
                const [fi2, li2] = i2;

                if ( li2 < fi1 || fi2 > li1) {
                    continue;
                }

                isMerged = true;
                stack.splice(c, 1);

                i1[0] = Math.min(fi1, fi2);
                i1[1] = Math.max(li1, li2);
                
            }

            result.push(i1);
            
        }

        // console.log("result", result)

        stack = result;

    } while (isMerged);

    stack = stack.sort((a, b) => a[0] - b[0]);

    return stack;

}

console.log(merge(array1));
console.log(merge(array2));
console.log(merge(array3));
