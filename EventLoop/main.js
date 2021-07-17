//// ---------------------------------------------------------------EVENTLOOP---------------------------------------------------------------

// +++++ VD1 +++++
// function testing(x){
//     x++;
//     setTimeout(() => {
//         console.log(`SetTimeout is: ${x}`);
//     },0)
//     F1(x);
// }

// function F1(y){
//     y++;
//     F2(y);
// }

// function F2(z){
//     z++;
//     console.log(`Kết quả là: ${z}`);
// }

// testing(1);

// +++++ VD2 +++++ Chúng ta sẽ so sánh 2 đoạn code A và B mặc dù nhìn chúng khá giống nhau nhưng cách chạy hoàn toàn khác nhau

// const s = Date.now();

// --- Đoạn code A ---

//// A: Code đồng bộ tác vụ tốn thời gian -> Block khối này lại cho đến khi nào chạy xong thì các đoạn code dưới mới được chạy
// let result1 = 0;
// for(let i = 0; i < 300000000; i++){
//     result1 = result1 + i;
// }

//// B: Code đồng bộ sẽ bị chặn, chạy sau A
// console.log(`Sync: ${result1} - Thời gian chạy: ${Date.now() - s}`);

//// C: Code bất đồng bộ -> Đẩy vào web Api xử lý
// setTimeout(function(){
//     console.log(`setTimeout first: ${Date.now() - s}`)
// }, 1000);

//// D: Code bất đồng bộ -> Đẩy vào web Api xử lý
// setTimeout(function(){
//     console.log(`setTimeout second: ${Date.now() - s}`)
// }, 3000);

//// Kết quả trả ra
//// Sync: 44999999767108860 - Thời gian chạy: 4439
//// setTimeout first: 5444
//// setTimeout second: 7447

//// Giải thích
//// Khi thằng A đang xử lý công việc của nó thì nó sẽ block lại không cho thằng C và D xử lý Web Api. Chỉ khi thằng A thực hiện xong và un-block
//// thì thằng C với D mới được đẩy vào Web Api để xử lý
////-------------------------------------------------------------------------------------------------------------------------------

// --- Đoạn code B ---

//// Đảo ngược vị trí các đoạn code lại ra kết quả khác 

//// C: Code bất đồng bộ
// setTimeout(function(){
//     console.log(`setTimeout first: ${Date.now() - s}`)
// }, 1000);

//// D: Code bất đồng bộ
// setTimeout(function(){
//     console.log(`setTimeout second: ${Date.now() - s}`)
// }, 3000);

//// A: Code đồng bộ tác vụ tốn thời gian 
// let result2 = 0;
// for(let i = 0; i < 300000000; i++){
//     result2 = result2 + i;
// }

//// B: Code đồng bộ sẽ bị chặn, chạy sau A
// console.log(`Sync: ${result2} - Thời gian chạy: ${Date.now() - s}`);

//// Kết quả trả ra 
//// Sync: 44999999767108860 - Thời gian chạy: 6379
//// setTimeout first: 6395
//// setTimeout second: 6395

//// Giải thích
//// Ta thấy kết quả của B, C và D là gần như bằng nhau khác hoàn toàn (về thời gian) Đoạn code A 
//// Vì khi thằng A đang xử lý công việc của nó thì thằng C và D cũng đang xử lý công việc của nó ở 1 nơi khác. Khi thằng A xử lý xong và xuất
//// ra output thì thằng C và D cũng đồng thời xuất hiện luôn

// +++++ VD3 +++++ So sánh MicroTask(queueMicroTask, Promise) và MacroTask(onClick, setTimeout, setInterval)
// console.log("Đây là code đồng bộ 1");

// //// MacroTask
// setTimeout(() => {
//     console.log("Đây là setTimeout");
// }, 0);

// //// MicroTask
// Promise.resolve().then(() => {
//     console.log("Đây là promise 1")
// });

// queueMicrotask(() => {
//     console.log("Đây là queueMicrotask")
// })

// Promise.resolve().then(() => {
//     console.log("Đây là promise 2")
// });

// console.log("Đây là code đồng bộ 2");

//// MicroTask sẽ luôn luôn được ưu tiên chạy trước MacroTask

// +++++ VD4 +++++ So sánh giữa click bằng javascript và click bằng callback

//// Click bằng callback
// const button = document.querySelector("#btn");
// button.addEventListener("click", function(){
//     Promise.resolve().then(() => console.log("Async microtask 1"));
//     console.log("Sync code js task 1");
// })
// button.addEventListener("click", function(){
//     Promise.resolve().then(() => console.log("Async microtask 2"));
//     console.log("Sync code js task 2");
// })

//// Click bằng javascript (Mỗi lần load trang nó sẽ tự chạy)
// button.click();

//// Giải thích
//// Khi dùng click bằng javascript thì toàn bộ code đồng bộ sẽ được đưa vào callstack chạy đồng bộ. Do đó 2 cosole.log đồng bộ sẽ xuất hiện 
//// trước và chạy trước đến khi callstack empty (rỗng) thì 2 promise chạy bất đồng bộ mới được thực thi