function sum1(){
    var result = 0;
    for(var i = 0; i < arguments.length; ++i){
        result += arguments[i];
    }
    return result;
}

function sum2(){
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, num){
        return sum + num;
    },0)
}

console.log(sum1(1,2,3,4,5,20))

console.log(sum2(1,2,3,4,5,10))

// Lý thuyết

// arguments là 1 cái biến tồn tại bên trong của 1 cái hàm có thể nhận bao nhiêu tham số cũng được