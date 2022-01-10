// ----------------------------- Spread: Từ 1 tách ra thành 1 danh sách  -----------------------------
// Nếu ta dùng ... thì nó sẽ bỏ đi cặp ngoặc [] và chỉ lấy những thằng con bên trong. [...array2,...array1]: Nối 2 mảng
var array1 = ['Liverpool', 'Chelsea', 'Mu', 'Real', 'Ac Milan'];
console.log(...array1);
var array2 = ['Trung Kien', 'Phong My', 'Gia Linh', 'Hoai An', 'Hong Lien'];
console.log(...array2);
var array3 = [...array2,...array1];
console.log(...array3);

// Nếu ta dùng ... thì nó sẽ bỏ đi cặp ngoặc {} và chỉ lấy những thằng con bên trong. {...array2,...array1}: Nối 2 object
var obj1 = {
    boy: "Nguyen Trung Kien",
    girl: "Ngo Nguyen Phong My",
}
var obj2 = {
    age: 21,
    school: "Trường Chinh",
    desc: "Bạn trai va bạn gái",
}
var obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);


var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap',
}
console.log(exerciseConfig)
// Lấy toàn bộ thuộc tính của defaultConfig. Ghi đè giá trị của trường api

var arraySubject = ['C','C++','Java','JavaScript','SQL']
function logger(...rest){
    for(i = 0; i < rest.length; i++){
        console.log(rest[i])
    }
}
logger(...arraySubject)
// Kết quả: 
// C
// C++
// Java
// JavaScript
// SQL