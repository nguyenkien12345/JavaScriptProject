const app = (function(){
    // Vì cars là biến lưu trữ dữ liệu nên ta nên để là Private. Lúc này cái thằng cars này đang được khai báo trong
    // 1 phạm vi hàm khác thế nên là nó đã tạo ra 1 phạm vi riêng biệt. Phạm vi còn lại là trong return{}
    const cars = [];
    return {
        get(index){
            return cars[index];
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index){
            cars.splice(index,1)
        }
    }
})()

// Chúng ta sẽ sử dụng console.log trong trình duyệt để test