// Cầu điều kiện (viết tắt)
    // condition ? codeIfTrue : codeIfFalse
let age = 20;

    // Cách viết bình thường
if (age >= 18) {
    console.log("Bạn đã đủ 18 tuổi");
} else {
    console.log("Bạn chưa đủ 18 tuổi.");
}

    // Cách viết rút gọn
let message = age >= 18 ? "Đủ 18 tuổi" : "Chưa đủ 18 tuổi.";
console.log(message);

// Vòng lặp for: (start; condition; step)
for (let i=1; i<=5; i++) {
    console.log("Vòng lặp for lần thứ: ", i);
}

// Vòng lặp while:
let j = 1;
while (j <= 10) {
    console.log("Vòng lặp while lần thứ:", j);
    j += 2;
}

// Mảng - Array (thao tác CRUD: Create, Read, Update, Delete)
    // Create - Khởi tạo
let arr1 = [];
let jsa30 = ['Ngọc', 'Minh', 'Dũng', 'Huy', 'Nam', 'Quân']

    // Read - Đọc phần tử
console.log('Danh sách JSA30:', jsa30);
console.log('Độ dài / số phần tử danh sách:', jsa30.length);
        // Truy cập phần tử qua chỉ số index
console.log('Phần tử đầu tiên:', jsa30[0]);
console.log('Phần tử cuối cùng:', jsa30[5]);

        // Duyệt mảng
            // Cách 1: dùng cả index và value
for (let i=0; i<jsa30.length; i++) {
    console.log(`Index: ${i}, Value: ${jsa30[i]}`);
}
            // Cách 2: chỉ dùng value
for (let item of jsa30) {
    console.log('Value:', item);
}

    // Update - Cập nhật dữ liệu
        // Thêm phần tử vào cuối 
jsa30.push('MindX');
        // Thêm phần tử vào đầu
jsa30.unshift('Trung');
        // Sửa phần tử
jsa30[0] = 'Imposter';

    // Delete - Xoá phần tử
        // Xoá phần tử cuối
jsa30.pop();
        // Xoá phần tử đầu
jsa30.shift();
        // Xoá phần tử ở vị trí bất kỳ
jsa30.splice(2, 1); // Xoá 1 phần tử từ vị trí index 2
console.log(jsa30);

    // Sắp xếp mảng
        // Sắp xếp theo thứ tự tăng dần A-Z
jsa30.sort();
console.log('Mảng sau khi sắp xếp tăng dần A-Z:', jsa30);
        // Sắp xếp theo thứ tự giảm dần Z-A
jsa30.reverse();
console.log('Mảng sau khi sắp xếp giảm dần Z-A:', jsa30);

// Hàm - Function
    // ý nghĩa: tập hợp các câu lệnh xử lý 1 nhiệm vụ, có thể tái sử dụng nhiều lần

    // Hàm không tham số, không trả về
function sayHello() {
    console.log('Xin chào các bạn, mình đang học ở MindX')
    console.log('Lớp: MK-JSA30')
}
sayHello();

    // Hàm có tham số, không trả về
function greet(name) {
    console.log(`Xin chào! Tôi tên là ${name}!`);
}
greet('Dũng');
greet('Minh');

    // Hàm có tham số, có trả về
function sum(a, b) {
    return a + b;
}
console.log('Tổng 2 số 5 và 10 là:', sum(5, 10));
console.log('Tổng 2 số 20 và 30 là:', sum(20, 30));

    // Arrow function (ES6) - lambda function
        // Cú pháp cơ bản
const multiply = (a, b) => a * b;
console.log('Tích 2 số 5 và 10 là:', multiply(5, 10));

        // Arrow function không tham số
const getPI = () => 3.14;
console.log('Giá trị PI là:', getPI());

        // Arrow function viết nhiều dòng
const show_info = (username, age, gender) => {
    console.log('--- User Info ---');
    console.log('Username:', username);
    console.log('Age:', age);
    console.log('Gender:', gender);
    console.log('-----------------');
}
show_info('Duc Trung', 2, 'Male');