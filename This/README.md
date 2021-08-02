- Từ khoá this trong Javascript đề cập đến đối tượng mà nó thuộc về
- Đặc tính
  - 1. Trong 1 phương thức, this tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu .)
  - 2. Đứng ngoài phương thức, this tham chiếu tới đối tượng global
Lưu ý
  - this trong hàm tạo là đại diện cho đối tượng sẽ được tạo ra
  - this trong 1 hàm là undefined khi ở strict mode
  - Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
  - Arrow function không có this (không có context). Nó sẽ lấy cái this ở phạm vi bên ngoài của nó ở cái hàm gần nhất chứa nó