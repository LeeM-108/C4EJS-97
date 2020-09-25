// Bài 5: Tìm số lớn thứ hai, nhỏ thứ hai của mảng:

let soTien = [150, 160, 230, 540, 450];
let max = soTien[0];

for (let i = 0; i < soTien.length; i++) {
    if (soTien[i] > max) {
        max = soTien[i];
    }
}
soTien.splice(soTien.indexOf(max), 1);

let max2 = soTien[0];
for (let j = 0; j < soTien.length; j++) {
    if (soTien[j] > max2) {
        max2 = soTien[j];
    }
}

console.log(`Số lớn nhất thứ 2 là: ${max2}`);

//Nhỏ thứ 2 tương tự cách làm trên:
