//// ---------------------------------------------------------------CALLBACK---------------------------------------------------------------

//// ------------------------------------------------------------Đồng Bộ------------------------------------------------------------

// +++++ VD1 +++++
function Plus(a, b){
    return a + b;
}

function Minus(a, b){
    return a - b;
}

function Multiply(a, b){
    return a * b;
}

function Divide(a, b){
    return a / b;
}

function Calculator(a, b, callback){
    return callback(a, b);
}

var PlusResult = Calculator(10, 20, Plus);
// console.log(PlusResult);

var MinusResult = Calculator(100, 20, Minus);
// console.log(MinusResult);

var MultiplyResult = Calculator(10, 20, Multiply);
// console.log(MultiplyResult);

var DivideResult = Calculator(30, 10, Divide);
// console.log(DivideResult);

// +++++ VD2 +++++
function SaySomeThing(name, age, callback){
    return callback(name,age);
}

var NTK = SaySomeThing("Trung Kiên", 21, function(ts1, ts2){
    return `Xin chào ${ts1}. Năm nay tôi ${ts2} tuổi`;
})
// console.log(NTK);

// +++++ VD3 +++++
const numbers = [10,15,20,25,30,35,40,45,50];

function Even(number){
    return number % 2 == 0;
}

function Odd(number){
    return number % 2 != 0;
}

// console.log(numbers.filter(Even));
// console.log(numbers.filter(Odd));

// This is an example about callback
const result = numbers.filter(function(number){
    return number >= 20;
})
// console.log(result);

//// ------------------------------------------------------------Bất Đồng Bộ------------------------------------------------------------

//// Lý thuyết

//// Ưu tiên macro task (browser API như setTimeout, setInterval, event. Luôn luôn chạy sau cùng) hay micro task (promise)

//// Dùng callback, promise để bắt output và sắp xếp thứ tự kết quả theo ý đồ mong muốn

// +++++ VD1 +++++
var btn = document.querySelector("#btnExample");
btn.addEventListener('click', function(){
    console.log("HELLO");
})

// console.log("START");
let ketqua = 0;
for(var i = 1; i <= 1000; i++){
    ketqua = ketqua + i;
}
// console.log(ketqua);
// console.log("END");

// +++++ VD2 +++++
console.log("Task 1");

function before(callback){
    setTimeout(function(){
        console.log("Task 2");
        callback();
    },2000);
}
// before();

function after(){
    setTimeout(function(){
        console.log("Task 3")
    },1000)
}
// after();

console.log("Task 4");

// Nếu muốn gọi task 2 chạy trước task 3 thì truyền task 3 (coi như là 1 callback) vào task 2
before(after);