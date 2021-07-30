// Đưa các khai báo biến với "var" và khai báo hàm lên đầu phạm vi được khai báo

// ---------------------------------------------------------------------------------------------------------------------------------------

// Ví dụ 1 Hoising với "var"
console.log(age);                                        // undefined
console.log(fullName);                                   // Uncaught ReferenceError: fullName is not defined
var age = 15;

// Tại sao console.log(age) ra là undefined mà không phải là 15. 

// var age = 15; Chúng ta cần phân biệt kĩ 2 phần (var age) và (= 15). (var age) chính là phần khai báo biến. Còn (= 15) chính là phần gán giá
// trị cho biến. Áp dụng vào ví dụ trên thì nó sẽ chỉ đưa phần var age lên trên đầu nội dung chứ không đưa phần = 15 lên. Lúc này code sẽ như sau
// var age;
// console.log(age)                                        
// console.log(fullName)                                   
// age = 15;

// Hoisting chỉ đưa phần + khai báo + lên trên đầu phạm vi chứ không hề đưa giá trị được gán vào biến lên trên đầu phạm vi

// ---------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------

// Ví dụ 2 Hoising với "function declaration"             
console.log(sum(6, 9));                                   // 15
function sum(a, b){
    return a + b;
}

// Hoisting chỉ đưa phần + khai báo + lên trên đầu phạm vi chứ không hề đưa giá trị được gán vào biến lên trên đầu phạm vi

// sum(a, b){
//     return a + b;         => Cả cụm hàm function chính là phần khai báo hàm luôn
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------

// Ví dụ 3 Hoising với let,const             

{
    console.log(name);
    let name = "Nguyễn Trung Kiên";                        // Uncaught ReferenceError: Cannot access 'name' before initialization
}

// const tương tự không khác gì let

// Lưu ý: Khai báo biến với let, const khi được hoisted không được tạo giá trị mặc định và được đưa vào "Temporal Dead Zone".
// Còn var khi hoisted lên sẽ được khởi tạo giá trị là undefined

// ---------------------------------------------------------------------------------------------------------------------------------------
