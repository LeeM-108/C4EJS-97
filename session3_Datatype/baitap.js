// let bankinh = Number(prompt("Nhập bánh kính hình tròn: "));

// console.log(`Chu vi hình tròn là: ${bankinh*2*Math.PI.toFixed(2)}`);
// console.log(`Diện tích hình tròn là: ${bankinh**2*Math.PI.toFixed(2)}`);

// let chieuDai = Number(prompt("Nhập chiều dài:"));
// let chieuRong = Number(prompt("Nhập chiều rộng"));
// let chuvi = [chieuDai + chieuRong]*2;
// let dientich = chieuDai * chieuRong;

// console.log(`Chu vi hình chữ nhật là: ${chuvi}`);
// console.log(`Diện tích hình chữ nhật là: ${dientich}`);

//Bài 4:

// let sotien = Number(prompt("Nhập số tiền muốn đổi: "));

// let soto100k = Math.floor(sotien / 100000);
// let sotienconlai1 = sotien - (soto100k * 100000);
// let soto50k = Math.floor(sotienconlai1 / 50000);
// let sotienconlai2 = sotienconlai1 - (soto50k * 50000);
// let soto20k = Math.floor(sotienconlai2 / 20000);
// let sotienconlai3 = sotienconlai2 - (soto20k * 20000);
// let soto10k = sotienconlai3 / 10000;

// console.log(`Số tờ 100k nhiều nhất có thể đổi là: ${soto100k}`);
// console.log(`Số tờ 50k nhiều nhất có thể đổi là: ${soto50k}`);
// console.log(`Số tờ 20k nhiều nhát có thể đổi là: ${soto20k}`);
// console.log(`Số tờ 10k nhiều nhất có thể đổi là: ${soto10k}`);

//Bài 5:

let so3chuso = Number(prompt("Nhập một số có 3 chữ số bất kỳ: "));

let hangtram = Math.floor(so3chuso/100);
let M1 = so3chuso - (hangtram * 100);
let hangchuc = Math.floor(M1 / 10);
let M2 = M1 - (hangchuc * 10);
let tong = hangtram + hangchuc + M2;

console.log(`Tổng các chữ số của số vừa nhập là: ${tong}`);