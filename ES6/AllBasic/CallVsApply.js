function greeting1(name,age){
    console.log(`Hi My Name is ${name}. I am ${age} years old`);
};

function greeting2(){
    console.log(`I am ${this.name}. My age is ${this.age}` )
}

var user = {
    name: 'My',
    age: 21
}

// Cú pháp call: function.call(this, param1, param2, ...)
greeting1.call(null, 'Kiên', 20)    // Tham số đầu tiên luôn là của this. Nếu không có this thì để là null
greeting2.call(user);               // this lúc này chính là user

// Cú pháp apply: function.call(this, [param1, param2, ...])
greeting2.apply(user);

function sum(){
    const numbers = Array.from(arguments) // Chuyển đổi cái arguments từ 1 array like object thành array
    return numbers.reduce(function(sum, num){
        return sum + num;
    }, 0)
}

// Khi ta gọi 1 cái hàm mà không biết truyền bao nhiêu đầu vào thì nên dùng apply
function average(){
    // Sum
    const result = sum.apply(null, arguments);
    // Sum / arguments.length;
    return result/arguments.length; 
}

console.log(sum(10,20,30,40,50,22));
console.log(average(10,20,30,40,50,22));