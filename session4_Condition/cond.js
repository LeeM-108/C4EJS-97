// let songaunhien = Number(prompt("Nhập một số ngẫu nhiên: "));

// if (songaunhien == 10) {
//     console.log("Số bạn vừa nhập bằng 10");
// }
// else if(songaunhien < 10) {
//     console.log("Số bạn vừa nhập bé hơn 10");
    
// }
// else if( songaunhien > 10){
//     console.log("Số bạn vừa nhập lớn hơn 10");
// }


// Tính BMI

// let cannang = Number(prompt("Nhập cân nặng của bạn (kg): "));
// let chieucao = Number(prompt("Nhập chiều cao của bạn (m): "));

// let BMI = (cannang / (chieucao ** 2)).toFixed(1);

// if (BMI < 18.5) {
//     console.log(`BMI cùa bạn là: ${BMI} và bạn đang quá gầy, cần được cho căn cực mạnh.`);    
// }
// else if (BMI < 25 ){
//     console.log(`BMI của bạn là: ${BMI} và bạn có một cơ thể đẹp.`);
// }
// else if (BMI >= 25 && BMI <= 35) {
//     console.log(`BMI của bạn là: ${BMI} và bạn đang hơi béo rồi đấy.`);   
// }
// else if (BMI > 35){
//     console.log(`BMI của bạn là : ${BMI} và bạn béo vaicut.`);
// }

//Nhập vào tháng, in ra số ngày của tháng đó.
//  let thang = Number(prompt("Nhập 1 tháng bất kì: "));

//  if (thang == 2) {
//      console.log("Tháng bạn vừa nhập có 28 ngày.");
//  }
//  else if (thang % 2 == 0 && thang <= 6){
//      console.log("Tháng bạn vừa nhập có 30 ngày.");
//  }
// else if (thang % 2 == 0 && thang >= 8){
//     console.log("Tháng bạn vừa nhập có 31 ngày.");
// }
// else if (thang % 2 == 1 && thang >= 8) {
//     console.log("Tháng bạn vừa nhập có 30 ");
// }
// else {
//     console.log("Tháng bạn vừa nhập có 31 ngày.");
// }

switch (month){
    case 1:
        case 3:
            case 5:
                case 7:
                    case 8:
                        case 10:
                            case 12:

                                console.log(`31 ngày`);
    break;
    case 2:
        console.log(`28 hoặc 29 ngày`);
    break;
    
    case 2:
        case 4:
            case 6:
                case 9:
                    case 11:
                        console.log(`30 ngày`);
    break;
}