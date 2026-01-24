// Hiển thị dữ liệu ra console
console.log('Hello world');

// Thông báo (popup)
// alert('MK-JSA29');

// Variables - Biến số
    // Dùng để lưu trữ dữ liệu
    // Có thể thay đổi giá trị trong khi lập trình

        // var: global scope (dùng được mọi nơi)
var name = "Duc Trung";
        // let: block scope (dùng được trong cặp ngoặc nhọn {})
let age = 2;

// Constants - Hằng số
    // Dùng để lưu trữ dữ liệu
    // Không thể thay đổi giá trị
const PI = 3.14;

// Data Types - Kiểu dữ liệu
    // Primitive - Kiểu dữ liệu nguyên thủy
        // String - Chuỗi ký tự '' "" ``
let address = "Hanoi";
        // Number - Số (N, R, Infinity, NaN - Not a Number)
let height = 1.75;
        // Boolean - Logic (true, false)
let isStudent = false;
        // Null - rỗng, thường dùng để xóa/reset giá trị
let empty = null;
        // Undefined - chưa được định nghĩa giá trị
let unDefined;
        // Symbol: giá trị duy nhất k thể thay đổi (ES6)
        // BigInt: số nguyên lớn hơn giá trị của number (ES11)

    // Non-Primitive - Kiểu dữ liệu phức tạp
        // Array - Mảng 
let numbers = [1, 2, 3, 4, 5];
        // Object - Đối tượng, tập hợp các cặp key-value
let student1 = {
    name: "Duc Trung",
    age: 2,
    isStudent: false
}
console.log(student1);
console.log(student1.name);
        // Function - hàm, tập hợp nhiều câu lệnh (tái sử dụng)
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
console.log(add(4, 5));
console.log(add(10, 15));

// Xác định và chuyển đổi kiểu dữ liệu
    // Xác định data types
console.log(typeof address);    // string
console.log(typeof height);     // number
    // Chuyển đổi data types
let x1 = "pizza";
let x2 = "pizza";
let x3 = "pizza";
x1 = Number(x1);   // NaN
x2 = Boolean(x2);  // true
x3 = String(x3);   // "pizza"
console.log(x1, typeof x1);
console.log(x2, typeof x2);
console.log(x3, typeof x3);

// String mothods - các phương thức hay dùng với string
let str = 'Hoang Nam';
    // length - độ dài chuỗi
console.log('length:', str.length);
    // toUpperCase() - chuyển thành chữ in hoa
console.log('toUpperCase:', str.toUpperCase());
    // toLowerCase() - chuyển thành chữ in thường
console.log('toLowerCase:', str.toLowerCase());
    // charAt(index) - lấy ký tự tại vị trí index
console.log('charAt(7):', str.charAt(7));
console.log('charAt(7):', str[7]); 
    // indexOf(substring) - tìm vị trí của chuỗi con 
console.log('indexOf("Nam"):', str.indexOf('Nam')); // 6

// Toán tử số học - các phép toán
    // Cơ bản: + - * /
    // Chia lấy dư: %
    // Lũy thừa: **
console.log(' 7 / 3 =', 7 / 3);
console.log(' 7 % 3 =', 7 % 3);
console.log(' 2 ** 3 =', 2 ** 3);

// Toán tử gán
let a1 = 20;
a1 += 5;  // a1 = a1 + 5
console.log('a1 += 5 =>', a1);

a1++;  // a1 = a1 + 1
console.log('a1++ =>', a1);

// Toán tử so sánh & Biểu thức logic => Kết quả true/false
    // So sánh: == != > < >= <=
console.log('5 == 5', 5 == 5);       // true
console.log('5 != 3', 5 != 3);       // true
console.log('5 < 3', 5 < 3);         // false
    // Biểu thức logic: && (AND), || (OR), ! (NOT)
        // Ví dụ trà sữa - gà rán

// Câu điều kiện (3 dạng)
    // Dạng thiếu: if
age = 5;
if (age >= 18) {
    console.log('Bạn đã đủ 18 tuổi');
}

    // Dạng đủ: if - else
age = 5;
if (age >= 18) {
    console.log('Bạn đã đủ 18 tuổi');
} else {
    console.log('Bạn chưa đủ 18 tuổi');
}

    // Dạng đa nhánh
let score = 7;
if (8 <= score && score <= 10){
    console.log('Học lực: Giỏi');
} else if (6.5 <= score && score < 8){
    console.log('Học lực: Khá');
} else if (5 <= score && score < 6.5){
    console.log('Học lực: Trung bình');
} else if (0 <= score && score < 5) {
    console.log('Học lực: Yếu');
} else {
    console.log('Điểm không hợp lệ');
}

