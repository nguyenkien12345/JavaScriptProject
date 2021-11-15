// VD1:
const iPhone = {
    // Thuộc tính - Property
    name: 'Iphone',
    color: ['red','blue','yellow'],
    weight: 300,
    // Phương thức - Method
    takePhoto() {
        console.log(this); 
        console.log('Take a photo');
    },
    // obj con
    objChild: {
        methodChild() {
            console.log(this); 
        }
    }
}
    
console.log(iPhone.takePhoto()); 
// this trả về đối tượng nó đang thuộc về. (Ở đây là iPhone). Cứ thằng nào chấm (.) đến phương thức được thì thằng đó chính là đt
console.log(iPhone.objChild.methodChild()); 
// this ở đây chính là đối tượng objChild vì nó là thằng . đến phương thức 


// VD2
function Car(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.run = function(){
        console.log('Running...',this);
    }
}
const mazda = new Car('Mazda -  Cx5', 'White', 600);
console.log(mazda.run());



VD3
const button = document.querySelector('#btn1');
button.onclick = function(){
    console.log(this.innerText);
}



// VD4
Car.prototype.run = function() {
    // Context Ngữ cảnh liên quan đến từ khoá this. Mỗi 1 function trong js sẽ luôn có 1 ngữ cảnh để chạy riêng
    // Với method run thì context của nó chính là object Car => Đây là phương thức
    // Với function test thì context của nó chính là object Window => Đây là function
    // Từ khoá this của run và test hoàn toàn khác nhau không liên quan đến nhau
    // this ở trong 1 hàm sẽ luôn là đối tượng window
    function test(){
        console.log(this)
    }
    test();
    const demo =  () => {
        console.log(this)
    }
    demo();
    // Arrow function sẽ không có context => Không có this. Nó sẽ lấy cái this ở phạm vi bên ngoài của nó, ở cái thằng gần nhất. Lúc này this chính là thằng Car
}
const mazda = new Car('Mazda -  Cx5', 'White', 600);
console.log(mazda.run());

