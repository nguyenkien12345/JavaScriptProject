<!-- SCOPE - Phạm vi -->

- Các loại phạm vi:
    - Global - Toàn cầu
    - Code block - Khối mã: let, const (chỉ có thể truy cập bên trong khối mã, không thể truy cập bên ngoài khối mã)
    - Local scope - Hàm: var ,fuction (phạm vi nội bộ, nằm bên trong 1 cái hàm)
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
- Cách thức 1 biến được truy cập
- Khi nào một biến bị xoá khỏi bộ nhớ? 
  - Biến toàn cầu? -> Chỉ mất khi tắt trang web, hoặc f5 refresh trang
  - Biến trong code block & trong hàm? -> Khi hàm hoặc khối được thực thi xong thì biến sẽ được xoá khỏi bộ nhớ -> nên dùng
  - Biến trong hàm được tham chiếu bởi 1 hàm 