// Apply tương tự như phương thức call nó chỉ khác mỗi việc truyền đối số.
// Phương thức này cho phép gọi 1 hàm với 1 this (bind) và truyền đối số cho hàm gốc dưới dạng mảng

// Ví dụ 1: Apply Method
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

function greet(greeting,message) {
    return `${greeting} ${this.firstName} ${this.lastName}. ${message}`;
}

// so sánh call() vs apply() 
let result = greet.apply(teacher, ["Em chào cô","Cô dạy môn gì thế ạ? (Đã xem cô livestream 1 tiếng)"]);
console.log(result); // Kết quả: Em chào cô Minh Thu. Cô dạy môn gì thế ạ? (Đã xem cô livestream 1 tiếng)

let answer = greet.call(teacher,"Em chào cô","Cô dạy môn gì thế ạ? (Đã xem cô livestream 1 tiếng)")
console.log(answer); // Kết quả: Em chào cô Minh Thu. Cô dạy môn gì thế ạ? (Đã xem cô livestream 1 tiếng)

// Ví dụ 2: Function borrowing
const student = {
    firstName: "Nguyễn", 
    lastName: "Kiên",
    isOnline: false,
    goOnline(){
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },
    goOffline(){
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}

const nnpm = {
    firstName: 'Phong',
    lastName: 'My',
    isOnline: false,
}

student.goOnline();
student.goOnline.apply(nnpm) // biến nnpm sẽ mượn hàm của student

// Vd3: (Extends)
function Animal(name,weight){
    this.name = name;
    this.weight = weight;
}

function Parrot(){
    Animal.call(this,arguments);
    this.speak = function(){
        console.log("Nhà có khách kìa!")
    }
}

const parrot = new Parrot('Con vẹt',300);
console.log(parrot)

// PHÂN BIỆT bind(), call(), apply()
// GIỐNG NHAU
// + Cú pháp giống nhau
// function fn(){}
// bind => fn.bind(), call => fn.call(), apply => fn.apply()

// + Là các method được thừa kế từ Function.prototype
// funtion fn(){}
// fn.bind === Function.prototype.bind
// fn.call === Function.prototype.call
// fn.apply === Function.prototype.apply

// KHÁC NHAU
// + Các đối số & Cách hoạt động
function fn(){}
// Bind Method
// - Trả ra hàm mới với `this` tham chiếu tới `thisArg`
// - Không thực hiện gọi hàm
// - Nếu được bind kèm `arg1, arg2,...` thì các đối số này sẽ được ưu tiên hơn
const newFn = fn.bind(thisArg,arg1,arg2,...)
newFn(arg1,arg2,...)

// Call Method
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
fn.call(thisArg,arg1,arg2,...)

// Apply Method
// - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
// - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1, arg2, ...]`
fn.call(thisArg,arg1,arg2,...)