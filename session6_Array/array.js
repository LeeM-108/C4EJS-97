// let menu = [];
// console.log(menu);

// let menu = [`chao ga`];
// console.log(menu);

// let menu = [`Prison break`, `Spider-man`, `avengers`];
// console.log(menu);

// let newItem = prompt(`Enter new item`)
// menu.push (newItem);
// console.log(menu);

// console.log(menu[1]);

// let i = Number(prompt(`Enter a number`));
// console.log(menu[i]);

// console.log(menu[1]);

// let i = Number(prompt(`Enter a position that you want to change`));
// let item = prompt(`Enter a new value`)
// menu[i] = item;

// console.log(menu);

// let x = Number(prompt(`Xoa bat dau tu vi tri nao`));
// let y = Number(prompt(`Xoa bao nhieu`));
// menu.splice (x, y);

// console.log(menu);

// let menu = [`chao`, `Com`, `Burger`, `khoai`];

// for (let i = 0; i < menu.length; i++) {
//     console.log(`${i + 1}. ${menu[i]}`); 
// }


// Mảng chiều cao của 5 người:
let heights = [150, 155, 170, 145, 180];
// let aveHeight = 0;
// let sumHeight = 0;

// for (let i = 0; i < heights.length; i++) {
//     console.log(heights[i]);
//     sumHeight = sumHeight + heights[i];
//     aveHeight = sumHeight/(i+1);
// }
// for (let i = 0; i < heights.length; i++) {
//     if (heights[i] > aveHeight) {
//         console.log(`cao hơn trung bình: ${heights[i]}`);
//     }   
// }

// console.log(`Chieu cao trung binh: ${aveHeight}`);

//in ra cao nhất (hay thấp nhất):

let max = heights[0];
for (let i = 0; i < heights.length; i++) {
    if (heights[i] > max) {
        max = heights[i];
    }
}
console.log(`Cao nhất: ${max}`);

//
// for (let i = 0; i < heights.length - 1; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//         if (heights[i] > heights[j]){
//             let temp = heights[i];
//             heights[i] = heights[j];
//             heights[j] = temp;
//         } 
//     }  
//     console.log(heights[i])}


// có baonh thấp hơn 160
// let a = [];

// for (let i = 0; i < heights.length; i++) {
//     const height = heights[i];
//     if (height < 160) {
//         a.push(height);
//     }   
// }
// if (a.length > 0){
// console.log(`Có ${a.length} người ${a}`);
// }
// else {
// console.log(`Không có ai.`);
// }
