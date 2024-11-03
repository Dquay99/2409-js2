//Thực Hành : 
// 1 : 
let arr = [1,2,3 ,5 ,8,10,17]

//Tính tích của các phần tử trong mảng
let product = arr.reduce((acc, val) => acc * val, 1);
console.log("Tích của các phần tử trong mảng:", product);

//Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
let sonhonhat2 = arr.filter(num => num % 2 === 0).reduce((min, val) => Math.min(min, val), Infinity);
console.log("Số nhỏ nhất chia hết cho 2:", sonhonhat2);

//Tìm số lớn nhất mà chia hết cho 3 trong mảng
let solonnhat3 = arr.filter(num => num % 3 === 0).reduce((max, val) => Math.max(max, val), -Infinity);
console.log("Số lớn nhất chia hết cho 3:", solonnhat3);

//Tính giá trị trung bình của mảng
let gttb = arr.reduce((acc, val) => acc + val, 0) / arr.length;
console.log("Giá trị trung bình của mảng:", gttb);

//Lọc ra các số nguyên tố trong mảng
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let primeNumbers = arr.filter(isPrime);
console.log("Các số nguyên tố trong mảng:", primeNumbers);

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
let sonhohon10 = arr.some(num => num < 10);
console.log("Có số nhỏ hơn 10 không:", sonhohon10);

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
let solonhon20 = arr.every(num => num > 20);
console.log("Tất cả phần tử đều lớn hơn 20:", solonhon20);

//Nhập vào số n cho đến khi n là một số trong mảng

// Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần



// 2 : 
let s = ["banana", "grape" , "butterfly" , "empress" , "peaky blinder"]

// Tìm chuỗi đầu tiên có độ dài nhỏ nhất trong mảng
let shortestString = s.reduce((min, str) => (str.length < min.length ? str : min), s[0]);
console.log("Chuỗi có độ dài nhỏ nhất:", shortestString);

//Tìm những chuỗi trong mảng có chứa giá trị text


//Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s


// Tạo ra một chuỗi là sự kết hợp của các phần tử trong s, mỗi phần tử cách nhau bởi dấu '-'
let combinedString = s.join('-');
console.log("Chuỗi kết hợp các phần tử cách nhau bởi dấu '-':", combinedString);

// 3 :
let d1 = [1,3,5,7,9,10];
let d2 = [2,4,6,8,10,11];

//Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không
let allInD2 = d1.every(num => d2.includes(num));
console.log("Tất cả các giá trị trong d1 có nằm trong d2 không:", allInD2);

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không
let sumD1 = d1.reduce((acc, val) => acc + val, 0);
let hasDivisibleInD2 = d2.some(num => num % sumD1 === 0);
console.log("Có phần tử nào trong d2 chia hết cho tổng của d1 không:", hasDivisibleInD2);

//  Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1
let divisibleBy2InD1AndD2 = [...d1, ...d2].filter(num => num % 2 === 0);
console.log("Mảng gồm các số chia hết cho 2 trong d2 và d1:", divisibleBy2InD1AndD2);

// Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Tạo ra dãy số tăng dần bao gồm các số của d1 và d2




// 4: 
let growth = [
    [5, 8, 9, 16],
    [2, 7, 1, 9],
    [5, 6, 8, 12],
    [10, 2, 1, 8],
    [20, 4, 9, 1]
];

// Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (tính trung bình theo hàng)
let yearlyAverages = growth.map(year => year.reduce((acc, val) => acc + val, 0) / year.length);
console.log("Trung bình tăng trưởng của từng năm:", yearlyAverages);

//Tìm giá trị tăng trưởng trung bình theo năm lớn nhất
let maxYearlyAverage = Math.max(...yearlyAverages);
console.log("Giá trị tăng trưởng trung bình theo năm lớn nhất:", maxYearlyAverage);

//Tìm giá trị tăng trưởng theo quý lớn nhất
let maxQuarterGrowth = Math.max(...growth.flat());
console.log("Giá trị tăng trưởng theo quý lớn nhất:", maxQuarterGrowth);

// Tính giá trị tăng trưởng trung bình theo quý của các năm (tính trung bình theo cột)
let quarterlyAverages = growth[0].map((_, colIndex) =>
    growth.reduce((acc, row) => acc + row[colIndex], 0) / growth.length
);
console.log("Trung bình tăng trưởng theo quý của các năm:", quarterlyAverages);


// 5 : 
let array = [3, 5, 8, 12, 7, 9, 15, 4, 6];

// Tính tổng các số lẻ trong mảng
let sumOfOddNumbers = array.filter(num => num % 2 !== 0).reduce((acc, val) => acc + val, 0);
console.log("Tổng các số lẻ trong mảng:", sumOfOddNumbers);
