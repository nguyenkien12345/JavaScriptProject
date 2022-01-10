// function cha(){
//     let x = 10;
//     return function con(y){
//         x++;
//         return x + y
//     }
// }

// console.log(cha);           
// Kết quả trả về: 
// ƒ cha(){
//  let x = 10;
//  return function con(y){
//         x++;
//         return x + y
//         }
//        }

// console.log(cha());  
// Kết quả trả về: Chính là funtion con bên trong 
// ƒ con(y){
//     x++;
//     return x + y
// }

// console.log(cha()(10)); 
// Kết quả trả về: 21 
// + Khi gọi hàm cha() là ta đang trả về hàm con bên trong. Nhưng khi ta gọi cặp ngoặc (10) thêm 1 lần nữa là ta đang thực thi 
//   cái hàm con bên trong và lấy giá trị trả về
// Khi gọi thằng này thêm 1 lần nữa thì nó vẫn cho kết quả trả về là 21 
// console.log(cha()(10)); 


// Bây giờ ta cùng theo dõi sự thay đổi (sự khác biệt)

// const bien = cha(); // Lúc này bien chính là function cha()
// // Kết quả trả về: 21 
// console.log(bien(10));
// // Kết quả trả về: 22 
// console.log(bien(10));

// Hàm Factory
/////////////////////////////////////////////////////////////// Factory //////////////////////////////////////////////////////////////

// function a(x){
//     x++;
//     return function b(){
//         console.log(++x);
//     }
// }

// a(1)();
// a(1)();
// a(1)();
// Kết quả trả về của 3 thằng trên đều là 3

// Bây giờ ta cùng theo dõi sự thay đổi (sự khác biệt)
// const bien = a(10);
// bien();
// bien();
// bien();
// Kết quả trả về của 3 thằng trên đều lần lượt là 3,4,5. Lúc này ta sẽ có khái niệm là Stateful function

// function advance(x){
//     x++;
//     return function b(){
//         x++;
//         return function c(){
//             console.log(++x);
//         }
//     }
// }

// // Cặp ngoặc tròn đầu tiên tượng trưng cho hàm ngoài cùng là function advance, cặp ngoặc tròn thứ 2 tượng trưng cho function b, cặp ngoặc tròn thứ 3 tượng trưng cho function c
// advance(1)()();
// advance(1)()();
// advance(1)()();

// Khái niệm preload factory
// function tinhtoan(x){
//     return function(y)
//         {
//             console.log(x + y);
//         }
// }

// const add10 = tinhtoan(10);
// const add20 = tinhtoan(20);

// // Lúc này add10 đang có giá trị bằng 10 bởi vì ta đã gán add10 bằng với tinhtoan(10); 10 ở đây chính là giá trị của tham số x
// // Lúc này add20 đang có giá trị bằng 20 bởi vì ta đã gán add20 bằng với tinhtoan(20); 20 ở đây chính là giá trị của tham số x

// add10(5);   // Kết quả trả về là 15 (5 lúc này chính là tham số y)
// add10(10);  // Kết quả trả về là 20 (10 lúc này chính là tham số y)

// add20(5);   // Kết quả trả về là 25 (5 lúc này chính là tham số y)
// add20(10);  // Kết quả trả về là 30 (5 lúc này chính là tham số y)

// Hàm tinhtoan được gọi là factory (hàm nền tảng) và chúng ta truyền sẵn vào 1 số cái dữ liệu (gọi là preload data)


// Currying: Từ 1 hàm có nhiều tham số chúng ta sẽ chuyển thành nhiều hàm và mỗi hàm này chỉ có 1 tham số (preload data)
/////////////////////////////////////////////////////////////// Currying ///////////////////////////////////////////////////////////////
// function thunghiem(x, y, z){
//     console.log(x + y +z);
// }

// thunghiem(10,20,30);

// function a(x){
//     return function b(y){
//         return function c(z){
//             console.log(x + y + z);
//         }
//     }
// }

// a(10)(20)(50);

// Factory: Là 1 dạng Higher Order Function mà khi chúng ta gán vào 1 cái biến. Sau đó chúng ta dùng cái biến này để truy xuất vào cái data của cái closures đó (Lưu state khi closure được gán vào biến)
/////////////////////////////////////////////////////////////// Closures ///////////////////////////////////////////////////////////////
// function taikhoan(money){
//     let myWallet = money;
//     return {
//         xem: function(){
//             return `Bạn có ${myWallet}$ trong ví`;
//         },
//         nap: function(amount){
//             return myWallet = myWallet + amount;
//         },
//         rut: function(amount){
//             if(amount > myWallet){
//                 return 'Số tiền trong ví không đủ để rút';
//             }
//             return myWallet = myWallet - amount;
//         }
//     }
// }

// const bien = taikhoan(10);
// console.log(bien.xem());        // Kết quả trả về là: Bạn có 10$ trong ví
// console.log(bien.nap(20));      // 30$
// console.log(bien.rut(40));      // Kết quả trả về là: Số tiền trong ví không đủ để rút
// console.log(bien.rut(15));      // 15$
// console.log(bien.xem());        // Kết quả trả về là: Bạn có 15$ trong ví

// So sánh Constructor Function và Factory Function

// Constructor Function: Dùng để xây dựng 1 hàm Constructor (hàm nền tảng), từ đó xây dựng các hàm con với dữ liệu (data, state) // riêng, tách biệt
// function Constructor(name, age){
//     this.name = name;
//     this.age  = age;

//     this.age++;

//     this.getName = function(){
//         return `Name: ${this.name}`;
//     }

//     this.getAge = function(){
//         return `Age: ${this.age}`;
//     }
// }

// // Tạo thêm thuôc tính cho Constructor
// Constructor.prototype.test = function(){
//     return this.name + " - Thuộc tính test - " + this.age;
// }

// const p = new Constructor("Nguyen Trung Kien", 21);
// console.log(p.getName() + " - " + p.getAge());
// console.log(p.test());

// const q = new Constructor("Ngo Nguyen Phong My", 21);
// console.log(q.getName() + " - " + q.getAge());
// console.log(q.test());




// Factory Function: Dựa trên Closure và Higher Order Function .Là 1 dạng Stateful function. Là 1 dạng function có khả năng truy cập vào cái data hay state của biến ở dạng outer (cái biến cha) và nhờ đó nó có thể tạo nên cái dạng factory function mà nó chứa các state của từng vùng hoạt động một.
// Dùng để xây dựng 1 hàm Factory (hàm nền tảng), từ đó xây dựng các hàm con với dữ liệu (data, state) riêng, tách biệt
// Không dùng "this" như Function Prototype. Không dùng new keyword
function Factory(name, age){
    let number = 100;

    function getName(){
        return "Name: " + name;
    }

    function getAge(){
        return "Age: " + age;
    }

    return {
        getName: getName,
        getAge: getAge,
        data: number
    }
}

const demo1 = Factory("NGUYỄN TRUNG KIÊN", 21)
console.log(demo1.getName() + " - " + demo1.getAge() + " - " + demo1.data);

const demo2 = Factory("PHẠM TRẦN HÀ MI", 21)
console.log(demo2.getName() + " - " + demo2.getAge() + " - " + demo2.data);