// Bài 1:

// let year = Number(prompt("Nhập một năm bất kì: "));

// if (year % 100 == 0) {
//     let year1 = Math.floor(year / 100);
//     if (year1 % 4 == 0) {
//         console.log("Năm bạn vừa nhập là năm nhuận.");
//     } 
//     else {
//         console.log("Năm bạn vừa nhập không phải năm nhuận.");
//     }   
// }
// else if (year % 4 == 0){
//     console.log("Năm bạn vừa nhập là năm nhuận.");
// }
// else {
//     console.log("Năm bạn vừa nhập không phải năm nhuận.");
// }

//Bài 2: Nhập tháng, tìm mùa

// let month = Number(prompt("Nhập một tháng bất kỳ: "));

// if (month == 3 || month == 4 || month == 5) {
//     console.log("Tháng bạn vừa nhập thuộc mùa xuân.");
// }
// else if (month == 6 || month == 7 || month == 8) {
//     console.log("Tháng bạn vừa nhập thuộc mùa hè.");
// }
// else if (month == 9 || month == 10 || month == 11) {
//     console.log("Tháng bạn vừa nhập thuộc mùa thu.");
// }
// else if (month == 12 || month == 1 || month == 2) {
//     console.log("Tháng bạn vừa nhập thuộc mùa đông.");
// }

//Bài 4: Nhập vào 3 số a, b, c in ra thứ tự tăng dần

// let a = Number(prompt("Nhập 1 số a: "));
// let b = Number(prompt("Nhập 1 số b: "));
// let c = Number(prompt("Nhập 1 số c: "));

// if ( a == b && a == c) {
//     console.log("3 số bạn vừa nhập bằng nhau.");
// }
// else if (a == b) {
//     if (a > c) {
//         console.log(`Thứ tự tăng dần: ${c}, ${b}, ${a}`);
//     }
//     else{
//         console.log(`Thứ tự tăng dần: ${b}, ${a}, ${c}`);
//     }
// }
// else if (a == c) {
//     if (a > b) {
//         console.log(`Thứ tự tăng dần: ${b}, ${a}, ${c}`);
//     }
//     else {
//     console.log(`Thứ tự tăng dần: ${a}, ${c}, ${b}`);
//     }
// }
// else if (b == c) {
//     if (b > a) {
//         console.log(`Thứ tự tăng dần: ${a}, ${b}, ${c}`);
//     }
//     else{
//         console.log(`Thứ tự tăng dần: ${b}, ${c}, ${a}`);
//     }
// }
// else if (a > b) {
//     if (a > c && b > c) {
//         console.log(`Thứ tự tăng dần: ${c}, ${b}, ${a}`);
//     }
//     else if (a > c && c > b) {
//         console.log(`Thứ tự tăng dần: ${b}, ${c}, ${a}`);
//     }
//     else if (a < c) {
//         console.log(`Thứ tự tăng dần: ${b}, ${a}, ${c}`);
//     }    
// }
// else if (a < b) {
//     if (c < a) {
//         console.log(`Thứ tự tăng dần: ${c}, ${a}, ${b}`);
//     }
//     else if (b > c) {
//         console.log(`Thứ tự tăng dần: ${a}, ${c}, ${b}`);
//     }
//     else if (b < c) {
//         console.log(`Thứ tự tăng dần: ${a}, ${b}, ${c}`);
//     }
// }

// Bài 6:

let elec = Number(prompt("Nhập lượng điện(kWh): "));
let value = 0;
let value1 = 50 * 1.687;
let value2 = value1 + (50 * 1.734);
let value3 = value2 + (100 * 2.014);
let value4 = value3 + (100 * 2.536);
let value5 = value4 + (100 * 2.834);

if (elec <= 50) {
    value = elec * 1.687; 
    console.log(`Giá tiền điện: ${value}`);
}
else if (elec >= 51 && elec <= 100) {
    value = value1 + ((elec - 50) * 1.734);
    console.log(`Giá tiền điện: ${value}`);
}
else if (elec >= 101 && elec <= 200){
    value = value2 + ((elec - 100) * 2.014);
    console.log(`Giá tiền điện: ${value}`);
}
else if (elec >= 201 && elec <= 300) {
    value = value3 + ((elec - 200) * 2.536);
    console.log(`Giá tiền điện: ${value}`);
}
else if (elec >= 301 && elec <= 400) {
    value = value4 + ((elec - 300) * 2.834);
    console.log(`Giá tiền điện: ${value}`);
}
else if (elec >= 401) {
    value = value5 + ((elec - 400) * 2.927);
    console.log(`Giá tiền điện: ${value}`);
}
























