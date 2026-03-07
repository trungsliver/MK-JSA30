// Bài 1: Lấy dữ liệu từ API
    // Gọi dữ liệu
fetch('https://jsonplaceholder.typicode.com/todos')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript (JSON)
    .then(response => response.json())
    // Xử lý dữ liệu (hiển thị lên website)
    .then(data => {
        // Dùng DOM lấy container
        const container = document.getElementById('todo-list');

        // Duyệt dữ liệu 
        for (let i=0; i <20; i++) {
            // Tạo thẻ card cho mỗi todo
            const card = document.createElement('div');
            card.classList.add('todo-card');

            // Thêm nội dung vào card
            card.innerHTML = `
                <h3>${data[i].title}</h3>
                <p>ID: ${data[i].id}</p>
                <p>Completed: ${data[i].completed }</p>
            `;
            // Thêm card vào container
            container.appendChild(card);
        }
    });

// Bài 2: Post list
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('post-list');

        for (let i=0; i <20; i++) {
            const card = document.createElement('div');
            card.classList.add('post-card');
            card.innerHTML = `
                <h3>${data[i].title}</h3>
                <p>${data[i].body}</p>
            `;
            container.appendChild(card);
        }
    });

// Bài 3: Dark mode - Light mode
const themeBtn = document.getElementById('themeBtn');

    // Khi ấn nút
themeBtn.onclick = () => {
    // Thêm hoặc xóa class 'dark' cho body
    document.body.classList.toggle('dark');
    // Lưu trạng thái hiện tại vào localStorage
    if (document.body.classList.contains('dark')) {
        // Lưu trạng thái dark vào localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

    // load theme từ loacalStorage khi reload trang
        // Lấy theme đã lưu từ localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}