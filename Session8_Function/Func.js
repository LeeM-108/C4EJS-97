// function hello() {
//     console.log("Hello World"); 
// }

// hello();
// hello();
// hello();

// function xinChao(s) {
//     console.log(s);
// }

// xinChao("à thế làm sao mà à");

// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// console.log(sum(11,23)/2);

// Bài 1: Viết F nhận vào số N, trả ra tổng S = 1 + 2 + 3 + ... + N
// Bài 2: Viết F nhận vào số N, trả ra giai thừa của N
// Bài 3: Viết F nhận vào số N, trả ra mảng chứa các ước của N
// Bài 4: Viết F nhận vào số N, trả ra mảng chứa các số nguyên tố <= N
// Bài 5: Viết F nhận vào một mảng số, trả ra tổng của mảng
// Bài 6: Viết F nhận vào một mảng số, trả ra số lớn nhất
// Bài 7: Viết F nhận vào một mảng số, trả ra số bé nhất
// Bài 8: Viết F nhận vào một mảng và 1 số N, trả ra mảng chứa các giá trị < N
// Bài 9: Viết F nhận vào 2 mảng, trả ra là mảng là hợp của 2 mảng trên và loại đi các phần tử trùng
// Bài 10: Viết F nhận vào 2 mảng, trả ra là mảng là giao của 2 mảng trên

// Bài 1:
function sum(N) {
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum = sum + i;
    }
    return sum;
}

// Bài 2:
function factorial(N) {
    let product = 1;
    for (let i = 1; i <= N; i++) {
        product = product * i;
    }
    return product;
}

// Bài 3:
function divisor(N) {
    let divisors = [];
    for (let i = 0; i <= N; i++) {
        if (N % i == 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

// Bài 4:

function primeNumbers(M) {
    let primes = [];
    for (let i = 1; i <= M; i++) {
        divisor(i);
        if (divisor(i).length <= 2) {
            primes.push(divisor(i));
        }
    }
    return primes;
}

console.log(primeNumbers(6));

//Bài 5:

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        sum = sum + value;
    }
    return sum;
}

let list = [12, 13, 1, 4, 5, 7];
console.log(sumOfArray(list));

// Bài 6:

function maxOfArray(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (max < value) {
            max = value;
        }
    }
    return max;
}

console.log(maxOfArray(list));

// Bài 7: 
function minOfArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (min > value) {
            min = value;
        }
    }
    return min;
}
console.log(minOfArray(list));

// Bài 8:

function smallerOfNInArray(arr, N) {
    let smallerOfN = [];
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (value < N) {
            smallerOfN.push(value);            
        }
    } 
    return smallerOfN;   
}

console.log(smallerOfNInArray(list, 8));

// Bài 9:
function hopHaiMang(arr1, arr2) {
    result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push (arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        result.push (arr2[i]);
    }
    for (let i = result.length - 1;i >= 0; i++) {
        let value = result [i];
        if (result.indexOf(value) !== i) {
            result.splice (i, 1);
        }
    }
}

// Bài 11: Tính N! theo phương pháp đệ quy

function giaiThua(N) {
    if (N === 0 || N === 1) {
        return 1;
    }
    return N * giaiThua(N - 1);    
}

// Bài 12: Tìm số thứ N của Fibonacci

function soNFibonacci(n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return soNFibonacci (n - 1) + soNFibonacci (n - 2)
 }