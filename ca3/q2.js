// 2. Consider this array: Students= [‘Kamna’, ’Karunesh’, ’Vishal’, ’Ankit’, ’Karan’] and perform the given operation on this:
// Find the length of the given array (students)
// Insert (–) after each element.
// Replace 'Kamna' with ‘Abhishek’ using splice method
// Check if ‘Karan’ is present in the array.
// Return the position of Abhishek from the array.
// Insert ‘Aayush’ at index 0 and ‘Aman’ at the last
// Remove ‘Aayush’ from index 0 and ‘Aman’ from last
// Return String Karunesh, Abhishek, Karan from array student   

let students= ['Kamna', 'Karunesh', 'Vishal', 'Ankit', 'Karan'];

// length of the array
let len = students.length;
console.log(len);

// Insert (–) after each element.
for(let i = 0; i < students.length; i+=2) {
    students.splice(i, 1, students[i], '-');
}
console.log(students);

// Replace Komal with ‘Abhishek’ using splice method
students.splice(0, 1, 'Abhishek');
console.log(students);

// Check if ‘Karan’ is present in the array.
let ispresent = students.includes('Karan'); 
console.log("Is Karan present: ", ispresent);

// Return the position of Abhishek from the array.
let position = students.indexOf("Abhishek"); // returns the index of the element if present otherwise -1
console.log("Poition of Abhishek in the array is (-1 means not present): ", position+1);

// Insert ‘Aayush’ at index 0 and ‘Aman’ at the last
students.unshift('Aayush');
students.push('Aman');
console.log(students);

// Remove ‘Aayush’ from index 0 and ‘Aman’ from last
students.shift();
students.pop();
console.log(students);

// Return String Karunesh, Abhishek, Karan from array student   
let flt = [ "Karunesh", "Abhishek", "Karan"];
let finalstring = students.filter(n => flt.includes(n)).join(', ');

console.log(finalstring);