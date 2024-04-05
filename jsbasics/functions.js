function empDetails(name, salary) {
    console.log(`Employee name is ${name} and Salary is ${salary}`);
}

const empDetailsAsVar = function(name, salary) {
    console.log(`Employee name is ${name} and Salary is ${salary}`);
}

const empDetailsAsArrowFun = (name, salary) => {
    console.log(`Employee name is ${name} and Salary is ${salary}`);
}

empDetails("Irfan", 120000000);
empDetailsAsVar("Aman", 10000000);
empDetailsAsArrowFun("Ashish", 1000000);