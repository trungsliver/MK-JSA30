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
    