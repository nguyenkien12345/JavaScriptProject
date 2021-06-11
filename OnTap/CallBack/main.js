// CallBack Functions

// Là hàm (fuction) được truyền qua đối số
// Khi gọi hàm khác

// Để là callback phải thoả mãn các điều kiện sau:
// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)

// function myFunction(params){
//     if(typeof params === 'function'){
//         params("LIVERPOOL FC");
//     }
// }

// function myCallBack(value){
//     console.log('Value: ', value);
// }

// myFunction(myCallBack);

Array.prototype.DefineMap = function(callback){
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; i++){
        var result = callback(this[i],i);
        output.push(result);
    }
    return output;
}

var Courses = [
    'PHP',
    'JAVA',
    'RUBY',
    'C#'
]

// course,index chính là callback
const html = Courses.DefineMap((course,index) => `<h2 value=${index}>${course}</h2>`);

console.log(html.join(''));