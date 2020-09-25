let O_empty = {};

//Tên, tuổi, trường

// let myInfo = {
//     tên: `Minh`,
//     tuổi: 18,
//     trường: `FTU`,
// }
// console.log(myInfo);

// myInfo.favourite = ['Oánh nhau', 'oánh đàn'];

// console.log(myInfo);

// myInfo.tuổi++;

// console.log(myInfo);

// for (const key in myInfo) {
//     console.log(`${key}: ${myInfo[key]}`);
// }

//===============//
// Tạo một mảng chứa thông tin của 5 điện thoại
// mỗi điện thoại chứa 3 thông tin
// Tên, Giá, Hãng

// In danh sách mảng này:
//cú pháp:
//1. Tên
// Giá
// Hãng
//2...3...
let listPhones = [
    {
        Name: `Iphone11`,
        price: 25e6,
        branch: `Apple`,
    },
    {    
        Name: `Galaxy Fold`,
        price: 30e6,
        branch: `Samsung`,

    },
    {
        Name: `B15`,
        price: 4e6,
        branch: `Bphone`,
    },
    {
        Name: `Cục gạch`,
        price: 1e6,
        branch: `Nokia`,
    },
    {
        Name: `chuối`,
        price: 2e6,
        branch: `Nokia`,
    },

];
//  for (let i = 0; i < listPhones.length; i++) {
//     console.log(`${i + 1}.`);
//     const phone = listPhones[i]
//     for (const key in phone) {
//         console.log(`${key}: ${phone [key]}`);
//     }   
//  }
// Cho người dùng nhập thêm một điên thoại mới với 3 thông tin và in ra:

let newphone = {};

listPhones.push (newphone);

let newName = prompt("Nhập tên một điện thoại mới");
newphone.name = newName;
let newPrice = Number(prompt("Nhập giá điện thoại mới"));
newphone.price = newPrice;
let newBranch = prompt("Nhập hãng điện thoại mới");
newphone.branch = newBranch;
 
print(listPhones);

// Cho người dùng nhập vào giá, in ra các điện thoại có giá lớn hơn nhập vào:

// let enteredPrice = Number(prompt("Những điện thoại có giá lớn hơn: "));
// let sPhones = [];

// for (let i = 0; i < listPhones.length; i++) {
//     const phone = listPhones[i];
//     if (phone.price > enteredPrice) {
//         sPhones.push(phone);      
//     } 
// }
// if (sPhones.length > 0) {
    
// console.log(`Có ${sPhones.length} kết quả`);
// console.log(sPhones);
// }
// else if (sPhones.length == 0) {
//     console.log("Không có tìm kiếm phù hợp.");
// }


// Cho người dùng nhập vào tên và in ra điện thoại:

let enteredName = prompt("Nhập tên điện thoại: ");
let namePhone = [];

for (let i = 0; i < listPhones.length; i++) {
    const phone = listPhones [i];
    if ( phone.Name.toLowerCase().indexOf(enteredName.toLowerCase()) >= 0  ) {
        namePhone.push(phone.Name);   
    }   
}
console.log(namePhone);

//In tất cả điện thoại của hãng 1 hãng:

let enteredBranch = prompt("Nhập tên hãng: ");
let branchPhones = [];

for (let i = 0; i < listPhones.length; i++) {
    const phone = listphone [i];
    if (phone.branch.toLowerCase()) {
        
    }
}

function print(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`${i + 1}.`);
        const phone = list[i]
        for (const key in phone) {
            console.log(`${key}: ${phone [key]}`);
        }   
     }
}