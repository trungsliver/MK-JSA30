// Bài 1: Note List
    // Lấy danh sách notes từ localStorage hoặc khởi tạo nếu chưa có
const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Hàm hiển thị ghi chú lên giao diện
function displayNotes() {
    // Dùng DOM lấy container (thẻ div)
    const container = document.getElementById('note-list');
    // Xóa nội dung cũ trong container
    container.innerHTML = '';
    // Duyệt danh sách notes vào tạo thẻ <p> cho mỗi note
    notes.forEach((note, index) => {
        container.innerHTML += `<p>${note}</p>`;
    });
}
displayNotes(); // Gọi hàm hiển thị khi trang được tải

    // Xử lý sự kiện ấn nút 'Thêm'
const addBtn = document.getElementById('addNote');
addBtn.onclick = () => {
    // Lấy nội dung từ ô input
    let content = document.getElementById('noteContent').value.trim();
    if (content) {
        // Thêm ghi chú vào danh sách notes
        notes.push(content);
        // Lưu lại danh sách notes vào localStorage
        localStorage.setItem('notes', JSON.stringify(notes));
        // HIển thị lại danh sách ghi chú
        displayNotes();
        // Xóa nội dung trong ô input sau khi thêm
        document.getElementById('noteContent').value = '';
    }
};