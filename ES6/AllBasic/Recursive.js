// Recursive là đệ quy
// 1. Xác định điểm dừng
// 2. Logic handle => Tạo ra điểm dừng

// function CoutDown(num){
//     if(num > 0){
//         console.log(num);
//         return CoutDown(num - 1);
//     }
// }
// CoutDown(3)
// Giải thích: truyền 3 vào. Ban đầu nó nhảy vào 3 lớn hơn 0 thoả điều kiện sau đó lấy 3 - 1 = 2. Sau đó lặp lại đệ quy đến khi nó bé hơn 0 thì thoát đệ quy

// function CoutUp(num){
//     if(num < 10){
//         console.log(num);
//         return CoutUp(num + 1);
//     }
// }
// CoutUp(5)
// Giải thích: truyền 5 vào. Ban đầu nó nhảy vào 5 nhỏ hơn 10 thoả điều kiện sau đó lấy 5 + 1 = 6. Sau đó lặp lại đệ quy đến khi nó lớn hơn 10 thì thoát đệ quy

// var subjects = ["PHP","C#","JAVA","PYTHON"];

// function loop(start, end, callback){
//     if(start < end){
//         callback(start); // Gọi lại cái start
//         loop(start + 1, end, callback)
//     }
// }

// loop(0, subjects.length, function(index){
//     console.log(`Index: ${index} -> ${subjects[index]}` )
// } )

// 3 * 2 * 1 = 6
// 6 * 5 * 4.... * 1 = 720

// function giaiThua(number){
//     var output = 1;
//     for(i = number; i > 0; i--){
//         output = output * i;
//     }
//     return output;
// }

// console.log(giaiThua(6))
// Giải thích: truyền 6 vào. Ban đầu nó nhảy vào 6 lúc này output = 1 * 6 = 6. Sau đó number giảm xuống 5 lúc này output = 6 * 5 = 30. Cứ thế lặp lại đến khi i xuống bé hơn hoặc bằng 0

function giaiThua(number){
    if(number > 0){
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log(giaiThua(3))
// Giải thích: truyền 3 vào. Ban đầu là 3 *  giaiThua(3 - 1) (nghĩa là nó sẽ đệ quy là 2 * 1). Sau đó khi nó còn 1 nó sẽ trừ 1 ở dưới ra 0 và kết thúc đệ quy