// Using Set
const removeduplicates = (arr) => {
    let res = new Set(arr);
    let finalres = new Array(...res);

    return finalres;
}

let res = removeduplicates([1, 1, 2, 3, 3, 4, 5, 4, 6, 5, 1, 2, 3]);
console.log("Using set : ", res)


// Using includes and loop
const removeduplicateswithincludes = (arr) => {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }

    return res;
}

let res2 = removeduplicateswithincludes([1, 1, 2, 3, 3, 4, 5, 4, 6, 5, 1, 2, 3]);
console.log("Using includes : ", res2);


// Using filter 
const removeduplicateswithfilter = (arr) => {
    let res = arr.filter((item, index) => arr.indexOf(item) == index);
    return res;
}

let res3 = removeduplicateswithfilter([1, 1, 2, 3, 3, 4, 5, 4, 6, 5, 1, 2, 3]);
console.log("Using filter : ", res3);