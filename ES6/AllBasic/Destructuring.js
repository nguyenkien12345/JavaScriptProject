var array = ["Liverpool","Chelsea","Real","Arsenal"];

// Cách 1
var [a,b,c,d] = array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Cách 2
// ...rest những phần tử còn lại trong mảng
var [a,...rest] = array;
console.log(a);
console.log(rest); 

var object = {
    name: "Javascript",
    price: 1000,
    teacher: "Trung Kien",
    desc: "Khoa hoc Javascript",
    children: {
        name: "React JS"
    }
}


////Đổi tên thằng name thành parentName nghĩa là giờ để gọi thằng name ta gọi parentName. children:{name} lấy thuộc tính name của thằng children
var {name: parentName, price, teacher, desc, children: { name } } = object;
console.log(parentName, price, teacher, desc, name);

//// ...params là toán tử Rest
function logger(...params){
    // Trả về mảng array
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8,9,10))

//// Khi chúng ta biết đầu vào là 1 object và đầu ra ta muốn lẩy từng thuộc tính giá trị. // ...rest những phần tử còn lại trong mảng
function loggerCT({name, age, gender, ...rest}){
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(rest);
}

loggerCT({
    name: "Nguyen Kien",
    age: 21,
    gender: "Nam",
    girlFriend: "Phong My",
    status: "Đẹp trai, hiền lành"
})