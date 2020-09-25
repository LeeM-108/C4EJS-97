// for (let index = 0; index < 100; index++) {
//     // console.log(`Heloo`);
//     console.log(index);
// }

//Bài 1: in ra từ 1 -> 10

// for (let index = 0; index <= 10; index++) {
//     console.log(index);
    
// }

//Bài 2: in ra số lẻ từ 1 -> 10
//    Cách 1:
// for (let index = 0; index < 10; index++) {
//     if (index % 2 == 1){
//         console.log(index);
//     }

// }

//    Cách 2:
// for (let index = 0; index <= 10; index += 2) {
//     console.log(index);
// }

//Bài 3: in ra số chẵn từ 1 -> 10

// for (let index = 0; index <= 10; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }
    
// }

//Bài 4: in từ 10 -> 1

// for (let index = 10; index >= 1; index--) {
//     console.log(index);
    
// }

//Bài 5: tính tổng từ 0 ->10
// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//     sum = sum + i;
    
// }
// console.log(sum);

// Bài 6:tính tổng số lẻ từ 0 -> N

// let n = Number(prompt("Nhập một số n bất kì: "));
// let sum = 0;

// for (let i = 0; i <= n ; i++) {
//     if (i % 2 == 1){
//         sum = sum + i;
       
//     }
// }
// console.log(sum); 

//Bài 8: Tính tổng 1/1 + 1/2 +...+1/n

// let n = Number(prompt("Nhập một số n bất kì: "));
// let sum = 0;

// for (let i = 1; i <= n ; i++) {
//     sum = sum + 1/i;
// }
// console.log(sum);


//Bài 9: Tính tổng 1/1*2 + ... + 1/(n-1)*n

// let sum = 0;
// let n = Number(prompt("Nhập một số n bất kỳ: "));

// for (let i = 2; i <= n; i++) {
//    sum = sum + 1/((i - 1) * i);
// }
// console.log(sum);

//Bài 10:

// let n = Number(prompt("Nhập số thứ n trong dãy Fibonacci."));

// let a = 0;
// let b = 1;
// let value = b;
// let sum = 0;

// for (let i = 1; i < n ; i++) {
//       console.log(value);  
//       sum = value + sum;
//       value = a + b;
//       a = b;
//       b = value;
//    }
// console.log(`Số thứ ${n}: ${value}`);
// console.log(`Tổng: ${sum}`);

//Bài 11:

let a = Number(prompt("Nhập chiều dài: "));
let b = Number(prompt("Nhập chiều rộng: "));
let chieuDai = [];

for (let i = 1 ; i <= a; i++) {
   chieuDai.push("*");
}
for (let j = 1; j <= b; j++) {
   console.log(`${chieuDai} `); 
}




//Nhập vào một số n. Nếu số đó nhỏ hơn 8 hay lớn hơn 10 nhập lại.
let n = Number(prompt("Nhập vào một số n: "));

while (n < 8 || n > 10) {
   n = Number(prompt("Nhập lại một số n khác: "));
   console.log("Số bạn vừa nhập nhỏ hơn 8 hoặc lớn hơn 10, yêu cầu nhập một số lớn hơn.");
}
console.log(`So ban vua nhập là: ${n}.`);

//Nhập password dài hơn 8 kí tự và chứa @, sai thì làm lại.

let n = prompt("Nhập một password: ");

while (!(n.lenght >= 8 && n.indexOf(`@`) >= 0 )) {
   n = prompt("Nhập lại pass >= 8 ký tự và có ký tự @: ")
}
console.log(n);


// Nhập một số tìm tất cả các ước của số đó, tìm xem số đó có là số nguyên tố không?

// let n = Number(prompt("Nhập mốt số n: "));
// let many = [];

// for (let i = 1 ; i <= n; i++){
//    if (n % i === 0){
//       many.push (i);
//    }
// }
// console.log(`Có ${many.length} và các ước là: ${many}`);

// if (many.length === 2) {
//    console.log("Số bạn vừa nhập là một số nguyên tố.");
// }

// //Kiểm tra có phải số nguyên tố hay k
// let n = Number(prompt("Nhập mốt số n: "));
// let many = [];

// for (let i = 1 ; i <= n; i++) {
//    if (n % i === 0) {
//       many.push (i);
//    }
// }
// if (many.length > 1) {
//    break;
// }