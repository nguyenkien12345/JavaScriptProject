// Là phương thức trong prototype của Function constructor, phương thức này được dùng để gọi hàm và cũng có thể bind this cho hàm
// Ví dụ
// - Gọi hàm với call method
// - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
// - Thể hiện tính kế thừa (extends) trong OOP
// - Mượn hàm (function borrowing), thêm ví dụ với arguments

// - Gọi hàm với call method
function random(){
    console.log(Math.random());
}
random.call()
// Giải thích: 
// + Bình thường gọi hàm chúng ta sẽ gọi là: random() thì engine của js nó sẽ gọi đến phương thức call để nó thực hiện gọi hàm

// - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
const teacher = {
    firstName: 'Minh',
    lastName: 'Thu',
}

const student = {
    firstName: 'Trung',
    lastName: 'Kiên',
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
}
// Case 1
student.showFullName(); // Kết quả là Trung Kiên
// Trường hợp này this là student
// Case 2
student.showFullName.call(); // Kết quả là undefined undefined
// Trường hợp này this là windows
// Khắc phục
student.showFullName.call(teacher); // Kết quả Minh Thu
// Sự khác nhau giữa call và bind
// bind: nó chỉ bind this trả ra cái hàm mới với cái this mới chứ nó không gọi hàm
// call: nó bind this trả ra cái hàm mới với cái this mới và nó gọi luôn cái hàm đó
student.showFullName.call(teacher); // => Kĩ thuật Mượn hàm (function borrowing)
// Giải thích
// student có hàm showFullName nhưng teacher thì không có. Nhưng ở đây chúng ta vẫn có thể mượn hàm showFullName để thực thi trên thằng teacher

// - Thể hiện tính kế thừa (extends) trong OOP
function Animal(name,weight){
    this.name = name;
    this.weight = weight;
}

function Chicken(name,weight,legs){
    Animal.call(this,name,weight);
    this.legs = legs
}

const chickenDemo = new Chicken('KFC',10,2);
console.log(chickenDemo) // Kết quả là: Chicken {name: 'KFC', weight: 10, legs: 2}

// - Mượn hàm (function borrowing), thêm ví dụ với arguments
function logger(){
    console.log(arguments)
    console.log(...arguments)
}
logger(1,2,3,4,5,6,7,'Kiên','My','Nhi')
// + arguments là 1 đối tượng giống như mảng ở cái tính chất là nó được đánh index nhưng tuy nhiên nó lại khác mảng ở cái là nó ko có các method như every,forEach,reduce,fill,find,findIndex,splice...
// Vậy giả sử ta muốn sử dụng phương thức forEach,splice cho arguments thì phải làm sao? 
// => Chúng ta sẽ đi mượn các phương thức đó của array
function loggerForeach(){
    Array.prototype.forEach.call(arguments, item => {
        console.log(item)
    })
}
loggerForeach(1,2,3,4,5,6,7,'Kiên','My','Nhi')
// Lúc này arguments sẽ trở thành this và từ đó cái this ở bên trong forEach có thể loop qua được arguments

function loggerSlice(){
    const arr = Array.prototype.slice.call(arguments); // Convert sang mảngs
    arr.forEach(item => {
        console.log(item)
    })
    // Bây giờ người ta có nhiều cách hiện đại hơn để chuyển arguments sang mảng thay vì mượn hàm và viết dài dòng như Array.prototype.slice.call(arguments)
    // cách 1: const arr = Array.from(arguments)
    // cách 2: const arr = [...arguments]
}
loggerSlice(1,2,3,4,5,6,7,'Kiên','My','Nhi')
