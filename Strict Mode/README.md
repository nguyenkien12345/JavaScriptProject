STRICT MODE - Nghiêm ngặt

- Báo lỗi hoặc ngăn chặn khi sử dụng đoạn mã không an toàn hay dễ gây nhầm lẫn

+ Cách sử dụng 
  - Thêm "use strict"; vào đầu file.js
  - Thêm "use strict"; vào ngay sau thẻ mở <script>
  - Thêm "use strict"; vào phạm vi đầu hàm

+ Đặc trưng
  - Không thể khai báo biến mà không sử dụng từ khoá var, let, const
  - Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
  - Báo lỗi khi hàm có tham số trùng tên
  - Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
  - Không đặt tên biến, tên hàm bằng 1 số từ khoá "nhạy cảm" của ngôn ngữ
  
+ Công dụng
  - Tránh "quên" từ khoá khai báo biến
  - Tránh trùng tên biến lẫn tới lỗi logic
  - Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global