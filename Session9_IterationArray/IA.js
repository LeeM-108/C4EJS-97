let A = [5, 7, 8, 9, 10, 2, 3, 11];
// 1. Tìm 1 số lẻ

let soLedautien = A.find (soLe);
console.log(soLedautien);
function soLe(value) {
    return value % 2 == 1;
}

//2. Tìm 1 số > 10

let firstBigger10 = A.find (bigger10);

function bigger10(value) {
    return value > 10;
}
console.log(firstBigger10);

//3. Tìm các số chẵn
 let soChan = A.filter (function (value) {
     return value % 2 === 0 ;    
 });
 console.log(soChan);

 //4. Tìm các số chia hết cho 8
 //5. Có số nào > 20 không?
 //6. Tất cả các số có chia hết cho 3 không ?
 //7. Tìm các số lẻ >5