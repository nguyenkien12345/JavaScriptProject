// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {}, ...  const và let chỉ có thể truy cập bên trong scope không truy cập bên ngoài scope được, var có thể truy cập bên ngoài scope cũng như bên trong scope
{
    const kien = "Nguyen Trung Kien";
    let my = "Ngo Nguyen Phong My";
    var linh = "Nguyen Hoai Gia Linh";
    {
        {
            console.log(kien);
            console.log(my);
            console.log(linh);
        }
    }
}
console.log(linh);

// Hosting (Chỉ có var hỗ trợ Hosting còn let và const thì không). Nó sẽ tự kiếm code được định nghĩa khai báo (var a) và đưa lên đầu chuyển thành var a = 1;
a = 1;
var a;
console.log(a)

// Assignment let và var có thể thay đổi giá trị bằng cách sử dụng toán tử gán lần thứ 2, còn const thì không
let a = 100;
var b = 200;
const c = 300;

a = 101;
b = 202;

console.log(a);
console.log(b);

const subject = {
    name: "Nguyen Kien",
    age: 20
}

// Có thể thay đổi giá trị, thuộc tính do ta đang gán lại thuộc tính của object chứ ta không thể gán lại subject
subject.name = "Phong My";
subject["age"] = 21;

console.log(subject.name);
console.log(subject['age']);

// Code thuần: Var
// Babel: Const, Let
// Khi định nghĩa biến và không gán lại biến đó: Const
// Khi cần gán lại giá trị cho biến thì dùng Let