// Bài 1: Hiển thị dữ liệu từ data.js
    // Dùng DOM lấy container
const container1 = document.getElementById('studentList');
    // Duyệt danh sách students
students.forEach(student => {
    // Tạo thẻ li mới cho mỗi student
    const li = document.createElement('li');
    // Thêm thông tin student vào thẻ li
    li.textContent = `Name: ${student.name}, Age: ${student.age}`;
    // Thêm thẻ li vào container
    container1.appendChild(li);
});

// Bài 2: Hiển thị dữ liệu từ file data.json
    // Lấy dữ liệu từ file data.json
fetch('./data.json')
    // Chuyển đổi dữ liệu thành đối tượng javaScript
    .then(response => response.json())
    // Xử lý dữ liệu sau khi đã chuyển đổi
    .then(data => {
        // Dùng DOM lấy container
        const container = document.getElementById('productList');

        // Duyệt danh sách sản phẩm có trong data
        data.forEach(item => {
            // Tạo thẻ div có class="product-card"
            const card = document.createElement('div');
            card.className = 'product-card';
            

            // Lấy dữ liệu img
            const img = document.createElement('img');
            img.src = item.image;

            // Lấy dữ liệu name
            const name = document.createElement('h3');
            name.textContent = item.name;

            // Lấy dữ liệu price
            const price = document.createElement('p');
            price.textContent = `Price: ${item.price}`;

            // Thêm img, name, price vào card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);

            // Thêm card vào container
            container.appendChild(card);
        })
    });