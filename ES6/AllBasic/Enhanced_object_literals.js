// 1 Định nghĩa key: value cho object
// 2 Định nghĩa method cho object
// 3 Định nghĩa key cho object dưới dạng biến

var name = "Nguyen Trung Kien";
var price = 10000;

var user = {
    name: name,     // Do key và value giống nhau có thể viết gọn là name
    price: price,   // Do key và value giống nhau có thể viết gọn là price
    getName(){
        return name;
    },
    getPrice(){
        return price;
    }
}

console.log(user);