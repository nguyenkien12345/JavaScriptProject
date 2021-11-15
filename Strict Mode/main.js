"use strict";

// Không thể khai báo biến mà không sử dụng từ khoá var, let, const
// Vd1
// fullName = 'Nguyễn Trung Kiên';
// function testFunc(){
//     age = 18
// }
// testFunc()
// ----------------------------------------------------------------------------------------------------------------

// Báo lỗi khi gán lại giá trị cho thuộc tính có writable: false
// Vd2a
// const student = Object.freeze({fullName: 'Nguyễn Văn A'}); // Đóng băng giá trị này không cho chỉnh sửa
// student.fullName = 'Nguyen Van B'
// console.log(student)

// Vd2b
// const student = {}
// Object.defineProperty(student, 'fullName', {
//     value: 'Nguyen Van A',
//     writable: false,
// })
// student.fullName = 'Nguyen Van B'
// console.log(student)
// ----------------------------------------------------------------------------------------------------------------

// Báo lỗi khi xoá những thứ không được xoá
// Vd3
// const student = {
//     fullName: 'Nguyen Trung Kien'
// }
// delete student
// console.log(student)
// => Không thể xoá object, chỉ có thể xoá thuộc tính của object
// ----------------------------------------------------------------------------------------------------------------

// Báo lỗi khi hàm có tham số trùng tên
// Vd4
// function sum(a, a){
//     return a + a;
// }
// console.log(sum(10,21));                    // Nếu không có strict mode thì kq là 42
// ----------------------------------------------------------------------------------------------------------------

// Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
// Vd5
// {
//     function minus(a, b){
//         return a - b;
//     }
// }
// console.log(minus(22,12));  
// => Khi dùng strict mode thì nó sẽ coi hàm được khai báo trong code block giống như là let và const           