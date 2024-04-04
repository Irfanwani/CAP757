window.onload = () => {
    let p1 = prompt("Enter the price of first item");
    let q1 = prompt("Enter the quantity");
    let p2 = prompt("Enter the price of second item");
    let q2 = prompt("Enter the quantity");
    let p3 = prompt("Enter the price of third item");
    let q3 = prompt("Enter the quantity");
    
    let res = (p1*q1) + (p2*q2) + (p3*q3);
    console.log(res);

}