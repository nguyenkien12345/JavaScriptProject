// Decorators Function
function logger(log){
    console.log(log);
}

// Arrow Function
var sayHello = (log) => {
    console.log("Say Hello " + log)
}

var sum = (a, b) => {
    return a + b;
}

// Nếu viết code mà không có cặp ngoặc {} thì nó có nghĩa là return luôn
var minus = (a, b) => a - b;

// Nếu muốn trả về 1 object thì bắt buộc phải có ()
var obj = (a, b) => ({a: a, b: b})

const course = {
    name: 'Python',
    getName: function(){
        return this.name; 
        // this có nghĩa là context
    }
}