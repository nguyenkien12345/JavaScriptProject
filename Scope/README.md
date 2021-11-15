- Các loại phạm vi:
    - Global - Toàn cầu, toàn cục (Tính từ khi các bạn khai báo ra các cái biến hoặc các cái hàm thì ở bất cứ đâu trong chương trình đều có thể truy cập và sử dụng các biến và hàm đó)
    - Code block - Khối mã: let, const (Tính từ khi các bạn khai báo ra các biến thì chỉ có thể truy cập bên trong khối mã, không thể truy cập bên ngoài khối mã) (bất cứ cái gì có cặp {} đều là code block. VD: if else, for, while, ....)
    - Local scope - Hàm: var ,fuction (phạm vi nội bộ được tạo ra bởi phần thân của 1 hàm hay còn gọi là phạm vi hàm, nằm bên trong 1 cái hàm, bên ngoài hàm không thể gọi vào bên trong hàm)

- Khi khai báo hàm thì cái hàm đó nó sẽ chỉ thuộc cái phạm vi mà nó được khai báo thôi chứ nó chưa tạo ra phạm vi của hàm

- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra

- Cho dù là 1 hàm giống nhau nhưng gọi đi gọi lại 3 lần thì nó sẽ tạo ra 3 phạm vi mới, hoàn toàn riêng biệt nhau

- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

- Biến hay hàm mà được tạo ra ở cái hộp lớn hơn thì có thể truy cập được ở cái hộp nhỏ hơn, Biến hay hàm mà được tạo ra ở cái hộp nhỏ hơn sẽ không thể truy cập ở cái hộp lớn hơn -> Theo chiều xuôi 

- Cách thức 1 biến được truy cập ? -> Nó sẽ luôn lấy cái biến ở phạm vi gần nhất nếu có nhiều biến trùng nhau. Nếu không tìm thấy thì nó cứ nhảy ra ngoài để tìm, tìm không thấy thì báo lỗi

- Khi nào một biến bị xoá khỏi bộ nhớ? 
  - Biến toàn cầu? -> Chỉ mất khi tắt trang web, hoặc f5 refresh trang (Giả sử ta tạo ra 1 biến global nhưng nhu cầu sử dụng biến đó không cao, chỉ dùng có 1 lần thì nó sẽ bị lãng phí bộ nhớ nên cần hạn chế tối đa việc sử dụng biến global)
  - Biến trong code block & trong hàm? -> Khi hàm hoặc khối được thực thi xong thì biến sẽ được xoá khỏi bộ nhớ -> Nên dùng
  - Biến trong hàm được tham chiếu bởi 1 hàm 