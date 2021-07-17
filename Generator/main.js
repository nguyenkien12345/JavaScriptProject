// Ví dụ 1
function* Generator(i){
    yield i + 10;
    yield i + 20;
    yield i + 30;
}

function* functionGenerator(i){
    yield i;
    yield* Generator(i);
    yield i + 1;
}

var gen = functionGenerator(1);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Kết quả trả về
// {value: 1, done: false}
// {value: 11, done: false}
// {value: 21, done: false}
// {value: 31, done: false}
// {value: 2, done: false}

function* numbers(){
    console.log("Number 1");
    yield 1;

    console.log("Number 2");
    yield 2;

    console.log("Number 3");
    yield 3;
}

let getNumbers = numbers();

console.log('Result 1: ' + getNumbers.next().value);
console.log('Result 2: ' + getNumbers.next().value);
console.log('Result 3: ' + getNumbers.next().value);

let args = [...numbers()];
console.log(args);

for(const item of numbers()){
    console.log(item);
}

// Generator sẽ trả về 1 đối tượng iterator. Gọi phương thức next() của iterator, phần thân hàm Generator được thực hiện đến khi gặp biểu thức 
// yield, xác định giá trị được trả về từ iterator, hoặc yield* để delegate tới hàm generator khác