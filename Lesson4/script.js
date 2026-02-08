// DOM - Document Object Model
    // Cấu trúc mô phỏng HTML dưới dạng cây (tree)

    // Lấy phần tử theo id
const header = document.getElementById('myH1');
console.log(header);

    // Lấy phần tử theo class name
const classElements = document.getElementsByClassName('myClass');
console.log(classElements);

    // Lấy phần tử theo tag name
const pElements = document.getElementsByTagName('p');
console.log(pElements);

    // lấy tất cả phần tử theo selector (css)
const queryElements = document.querySelectorAll('.myClass');
console.log(queryElements);

    // lấy phần tử đầu tiên theo selector (css)
const firstQueryElement = document.querySelector('.myClass');
console.log(firstQueryElement);

    // innerHTML: lấy hoặc gán nội dung (bao gồm cả tên thẻ)
console.log(document.getElementById('myH1').innerHTML);
header.innerHTML = '<h1 id="myH1">JSA30</h1>';
console.log(header.innerHTML);

    // textContent: lấy hoặc gán nội dung (chỉ có text)
firstQueryElement.textContent = 'Nội dung class 1 mới'

    // style: thay đổi css của phần tử
header.style.color = 'darkred';
header.style.backgroundColor = 'lightblue';
header.style.fontFamily = "Momo Signature, cursive";

    // setAttribute: thêm hoặc sửa thuộc tính của phần tử
firstQueryElement.setAttribute('class', 'myClass test1')

    // Tạo phần tử mới
const newDiv = document.createElement('div');
newDiv.setAttribute('class', 'container');

    // Thêm phần tử vào container
document.body.appendChild(newDiv);
newDiv.textContent = 'Đây là container'

// =============== THỰC HÀNH ===================
    // btn1: thay đổi text của h1
function changeText() {
    const h1 = document.getElementById('myH1');
    h1.textContent = 'Text đã được thay đổi';
}

    // btn2: hiện alert
function showAlert() {
    alert('Bạn vừa nhấn nút!');
}

    // btn3: đổi màu nền của body
document.getElementById('btn3').onclick = function() {
    document.body.style.backgroundColor = 'salmon';
}

    // form: validate username, password
document.getElementById('myForm').onsubmit = function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Bắt buộc nhập dữ liệu trong ô username và password
    if (username.trim() === '' || password.trim() === '') {
        alert('Vui lòng nhập đầy đủ username và password!');
        event.preventDefault(); // Ngăn chặn việc submit form
        return;
    }

    // Kiểm tra độ dài username và password
    if (username.length < 3) {
        alert('Username phải có ít nhất 3 ký tự!');
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert('Password phải có ít nhất 6 ký tự!');
        event.preventDefault();
        return;
    }

    // regex: kiểm tra passwword có ký tự viết hoa, viết thường, số và ký tự đặc biệt

    // Nếu tất cả điều kiện đều hợp lệ, form sẽ được submit
    alert('Đăng nhập thành công!');
}

