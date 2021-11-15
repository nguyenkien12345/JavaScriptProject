// Tham trị
// VÍ DỤ
// let a = 1      
// let b = a      
// a = 2          
// console.log(b) // Kết quả là 1

// Giải thích:
// - Với let a = 1: Tạo ra biến a, cấp 1 ô nhớ, lưu 1 vào ô nhớ
//Biến      Giá trị     Ô nhớ
//a         1           1
// - Với let b = a: Tạo ra biến b, cấp 1 ô nhớ khác, sao chép giá trị của a (là 1) vào ô nhớ mới
//Biến      Giá trị     Ô nhớ
//a         1           1
//b         1           1
// - Với a = 2: Sửa giá trị trong ô nhớ của a thành 2
//Biến      Giá trị     Ô nhớ
//a         2           2
//b         1           1
// Kết luận: a và b được cấp 2 ô nhớ khác nhau nên việc sửa a = 2 không ảnh hưởng tới ô nhớ của biến b. Nên kết quả cuối cùng console.log(b) vẫn là 1


// Tham chiếu
// VÍ DỤ
// const c = {
//     name: "Nguyễn Trung Kiên" 
// }
// const d = c
// c.name = "Nguyễn Hương Giang"
// console.log(d) // Kết quả là: { name: 'Nguyễn Hương Giang' }

// Giải thích:
// - Với const c = {name: "Nguyễn Trung Kiên"}: Tạo ra biến c, cấp 1 ô nhớ, lưu {name: 'Nguyễn Trung Kiên'} vào ô nhớ, trả về địa chỉ đã lưu và gán địa chỉ đó cho biến c
//Biến      Giá trị     Địa chỉ        Ô nhớ
//c         <#001>      #001           {name: 'Nguyễn Trung Kiên'}
// - Với const d = c: Tạo ra biến d, trỏ biến d tới cùng địa chỉ ô nhớ của biến c (Gán địa chỉ vùng nhớ của biến c vào giá trị của biến d)
//Biến      Giá trị     Địa chỉ        Ô nhớ
//c         <#001>      #001           {name: 'Nguyễn Trung Kiên'}
//d         <#001>      
// - Với c.name = "Nguyễn Hương Giang": Sửa giá trị của key name trong ô nhớ thành 'Nguyễn Hương Giang'
//Biến      Giá trị     Địa chỉ        Ô nhớ
//c         <#001>      #001           {name: 'Nguyễn Hương Giang'}
//d         <#001>      
// Kết luận: cuối cùng console.log(d) kết quả là: { name: 'Nguyễn Hương Giang' }. Vì c và d được trỏ cùng tới 1 ô nhớ nên việc sửa đổi giá trị của object thông qua biến c và d là như nhau

// Vậy điều gì sẽ xảy ra với đoạn mã sau?
// let a = {
//     name: 'Mercedes'
// }
// a = {
//     name: 'BMW',
//     model: 'i8'
// }
// console.log(a) // Kết quả là { name: 'BMW', model: 'i8' }
// => Có 2 vùng nhớ được tạo ra
//Biến      Giá trị     Địa chỉ        Ô nhớ
//a         <#002>      #001           {name: 'Mercedes'}
//                      #002           {name: 'BMW', model: 'i8' }
// Giải thích
// let a = {
//     name: 'Mercedes' => Lưu vào 1 vùng nhớ trả ra địa chỉ là #001. Lưu #001 vào a => 1 vùng nhớ được tạo ra
// }
// a = {
//     name: 'BMW',     => Lưu vào 1 vùng nhớ trả ra địa chỉ là #002. Lưu #002 vào a => 1 vùng nhớ nữa được tạo ra
//     model: 'i8'
// }
// Kết luận: Khi 1 cái biến nó được gán lại bằng 1 cái object mới, array mới, function mới thì cái object mới, array mới, function mới luôn luôn có 1 vùng nhớ mới được tạo ra

// TRƯỜNG HỢP OBJECT CHỨA OBJECT CON
// Các bạn chỉ cần nhớ mỗi object sẽ được lưu trữ tại 1 vùng nhớ khác nhau, cho dù đó là object cha hay con, cháu, v.v.
// VÍ DỤ
// const student = {
//     name: "Nguyễn Trung Kiên", 
//     profile: {
//         firstName: "Nguyễn",
//         lastName: "Kiên", 
//         middleName: "Trung"
//     }
// }
// Trong ví dụ trên chúng ta đã tạo ra 2 objects, object thứ nhất được gán cho student, object thứ 2 được gán cho key profile
// Vì nó luôn đọc từ trên xuống nên thằng nào có cặp ngoặc {} trước sẽ được gán trước
//Biến      Giá trị     Địa chỉ        Ô nhớ
//                      #001           {firstName: "Nguyễn", lastName: "Kiên", middleName: "Trung"}
//student   <#002>      #002           {name: 'Nguyễn Trung Kiên',profile: <#001> }

// VD
const x = {
    name: 'BMW'
}
x.name = "Audi"
console.log(x)

// Giả sử lúc này địa chỉ trả về là #001 lưu vào x là #001 thì khi ta lấy x.name là ta đang trỏ vào địa chỉ vùng nhớ đang lưu trữ cái object x mà chúng ta tạo ra và sửa cái key là name ở trong vùng nhớ đó chứ ta không hề sửa địa chỉ nhớ của biến x
