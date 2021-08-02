// ---------------------------------------------------------------------------------------------------------------------------------------------
// VD1:
// const iPhone = {
//     // Thuộc tính - Property
//     name: 'Iphone',
//     color: ['red','blue','yellow'],
//     weight: 300,
//     // Phương thức - Method
//     takePhoto() {
//         console.log(this); // this trả về đối tượng nó đang thuộc về. (Ở đây là iPhone). Cứ thằng nào chấm (.) đến phương thức thì thằng đó chính là đối tượng
//         console.log('Take a photo');
//     },
//     // obj con
//     objChild: {
//         methodChild() {
//             console.log(this); 
//         }
//     }
// }
// console.log(iPhone.objChild.methodChild()); // this ở đây chính là đối tượng objChild vì nó là thằng . đến phương thức 

// ---------------------------------------------------------------------------------------------------------------------------------------------
// VD2
function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function(){
        console.log('Running...',this);
    }
}
// const mazda = new Car('Mazda -  Cx5', 'White', 600);
// console.log(mazda.run());
// ---------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------
// VD3
// const button = document.querySelector('#btn1');
// button.onclick = function(){
//     console.log(this.innerText);
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------
// VD4
Car.prototype.run = function() {
    // Context Ngữ cảnh
    function test(){
        console.log(this)
    }
    test();
}
const mazda = new Car('Mazda -  Cx5', 'White', 600);
console.log(mazda.run());
// ---------------------------------------------------------------------------------------------------------------------------------------------
