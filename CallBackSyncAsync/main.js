//// CALLBACK

//// Đồng Bộ

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
var MinusResult = Calculator(100, 20, Minus);
var MultiplyResult = Calculator(10, 20, Multiply);
var DivideResult = Calculator(30, 10, Divide);

// +++++ VD2 +++++
const numbers = [1,2,3,4,5,6,7,8];

function filterEvenNumber(number){
    return number % 2 === 0;
}

function filterOddNumber(number){
    return number % 2 !== 0;
}

// (filterEvenNumber và filterOddNumber chính là 2 callback)
const evenNumbers = numbers.filter(filterEvenNumber);
const oddNumbers = numbers.filter(filterOddNumber);

const result = numbers.filter(function(number){
    return number >= 3;
})

// // +++++ VD3 +++++
function SaySomeThing(name, age, callback){
    return callback(name,age);
}

var NTK = SaySomeThing("Trung Kiên", 21, function(ts1, ts2){
    return `Xin chào ${ts1}. Năm nay tôi ${ts2} tuổi`;
})

// Bất Đồng Bộ

// +++++ VD1 +++++
// var btn = document.querySelector("#btnExample");
// btn.addEventListener('click', function(){
//     console.log("HELLO");                           // EventListener chính là bất đồng bộ
// });

// console.log("START");
// let ketqua = 0;
// for(var i = 1; i <= 1000; i++){
//     ketqua = ketqua + i;
// }
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

function after(){
    setTimeout(function(){
        console.log("Task 3")
    },1000)
}

console.log("Task 4");

// Nếu muốn gọi task 2 chạy trước task 3 thì truyền task 3 (coi như là 1 callback) vào task 2
before(after);