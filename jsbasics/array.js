const readline = require("readline");

const rl = readline.createInterface({
    output: process.stdout,
    input: process.stdin
})

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

rl.question("Enter the position and number(space seperated): ", (str) => {
    let [a, b] = str.split(" ").map((x) => parseInt(x));
    arr.splice(a, 0, b);
    console.log(arr);
    rl.close();
})

