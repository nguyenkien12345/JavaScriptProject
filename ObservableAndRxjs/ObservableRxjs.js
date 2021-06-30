// Xây dựng Observable với timeout và interval

// Lý thuyết

// next chỉ đơn giản là 1 function. Cái function này sẽ được gọi khi mà nó có tín hiệu từ producer gửi cho consumer

//// ++++++++++++++++++++++++++++++++++++++++++++++ PROMISE ++++++++++++++++++++++++++++++++++++++++++++++

// Bản chất Promise chỉ là 1 cái object. Ta sẽ tạo thêm thuộc tính timeout cho nó. (Promise là object có sẵn không cần tạo)
Promise.timeout = function(milisecond) {
    return new Promise((resolve) => {
        console.log("Đã chạy");
        setTimeout(() => {
            resolve()
        },milisecond)
    })
}

const promiseObj = Promise.timeout(1000); // Đã kích hoạt timer
promiseObj.then(() => { console.log('Time Out Run') })

//// ==> Promis sẽ chạy theo cơ chế Eager. Khi mà chúng ta gọi hàm timeout thì toàn bộ dòng code trong hàm timeout sẽ được chạy ngay lập tức
//// (kích hoạt cái thằng timer)

//// ++++++++++++++++++++++++++++++++++++++++++++++ OBSERVABLE ++++++++++++++++++++++++++++++++++++++++++++++

// Bản chất function cũng có thể được coi là 1 cái object. Ta sẽ tạo thêm thuộc tính timeout cho nó. (Observable là object chưa có sẵn, cần phải tạo)
function Observable(functionWaitToRun){
    // this đại diện cho object chúng ta đang khởi tạo. subcrice có thể đặt tên là gì cũng được
    this.subcrice = functionWaitToRun;
}

Observable.timeout = function(milisecond) {
    function timeoutWaitToRun(next){
        setTimeout(() => {
            next()
        },milisecond);
    }
    // Truyền thẳng hàm ta muốn chạy vào constructor luôn. Lúc này Observable dòng 28 cũng đã nhân được hàm này
    return new Observable(timeoutWaitToRun)
}

// Vì subcribe là 1 method của 1 object cụ thể nên bắt buộc khi thêm thuộc tính phải có prototype (nếu như object chung chung thì không dùng prototype không sao nhưng object đã được xác định cụ thể thì phải có prototype)
// Ta sẽ tạo thêm thuộc tính subcribe cho Observable
// Observable.prototype.subcribe = function(){
//     timeoutWaitToRun()
// }

Observable.timeout(1000) // Chưa kích hoạt timer
.subcrice(() => {
    console.log('Hello Trung Kien');
})

//// ==> Observable sẽ chạy theo cơ chế Lazy. Khi mà chúng ta gọi hàm timeout thì toàn bộ dòng code trong hàm timeout sẽ không chạy ngay lập tức.
//// Chỉ khi nào chúng ta chấm đến subcribe thì nó mới chạy (kích hoạt cái thằng timer)