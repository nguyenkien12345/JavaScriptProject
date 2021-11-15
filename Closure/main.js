// Ứng dụng 1 
function createCounter(){
    let counter = 0;

    function increase(){
        return ++counter;
    };

    return increase;
}  

const counter_example = createCounter(); 
console.log(counter_example());           // Kết quả: 1    
console.log(counter_example());           // Kết quả: 2
console.log(counter_example());           // Kết quả: 3 

// Lưu ý: Ta đang gán counter_example = 1 cái hàm thì khi console.log ta phải gọi hàm chứ không phải gọi biến đó là lý do ta viết là 
// console.log(counter_example()) chứ không phải console.log(counter_example)

// Mỗi hàm khi được gọi nó sẽ tạo ra 1 phạm vi hàm mới hay còn gọi là môi trường thực thi riêng của hàm đó

// Kết luận
// + counter_example => Chính là hàm increase được tạo ra trong chính createCounter(). Ở đây ta gọi hàm createCounter() 1 lần nên chỉ có 1 phạm vi được tạo ra
// + Phạm vi hàm createCounter và increase hoàn toàn riêng biệt nhau
// 1   => Đi đến hàm increase gọi vào thằng counter mà thằng counter không nằm trong phạm vi hàm increase nhưng nó có thể truy cập được biến ở bên ngoài phạm vi của nó nên nó nhảy ra bên ngoài để tìm, lúc này nó sẽ tìm thấy biến counter thuộc phạm vi createCounter sau đó lấy biến counter này tăng lên 1)
// 2,3 => Xử lý logic như trên nhưng vì nó cùng phạm vi của biến createCounter được tạo ra tức là chỉ có 1 phạm vi mà trước đó biến counter này đã tăng lên 1 nên lúc này tăng lên nữa sẽ là 2. (3 tương tự)

// Ứng dụng 2 
function createLogger(namespace){
    
    function logger(message){
        console.log(`[${namespace}]: ${message}`);
    }

    return logger;
}

const infoLogger = createLogger('Info');
infoLogger('Bắt đầu gửi Email');           // Kết quả: [Info]: Bắt đầu gửi Email
infoLogger('Đang gửi Email');              // Kết quả: [Info]: Đang gửi Email
infoLogger('Gửi Email thành công');        // Kết quả: [Info]: Gửi Email thành công

const errorLogger = createLogger('Error');
errorLogger('Đã xảy ra lỗi');              // [Error]: Đã xảy ra lỗi  
errorLogger('Đang kiểm tra lỗi');          // [Error]: Đang kiểm tra lỗi  
errorLogger('Sửa lỗi thành công');         // [Error]: Sửa lỗi thành công

// Ứng dụng 3 
function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        // Lấy ra dữ liệu trong localStorage
        get(key){
            return store[key];
        },
        // Lưu dữ liệu trong localStorage
        set(key,value){
            store[key] = value;
            save();
        },
        // Xoá dữ liệu trong localStorage
        remove(key){
            delete store[key];
            save();
        }
        // Cả 3 hàm get, set, remove đều có quền truy cập vào phạm vi do thằng createStorage tạo ra
    }

    return storage;
}

// Nếu như chúng ta return về hàm thì chúng ta sẽ chỉ return về được 1 cái hàm thôi. Mà localStorage thì chúng ta thường thao tác thêm sửa xoá nên ở đây chúng ta phải có ít nhất 3 cái hàm vì vậy ta sẽ trả về objects chứ không return về hàm nữa

const profileSetting = createStorage('profile');
profileSetting.set('fullName', 'Nguyen Kien');
profileSetting.set('age', 20);
profileSetting.set('address', 'HCM');

console.log(profileSetting.get('fullName'));
console.log(profileSetting.get('age'));
console.log(profileSetting.get('address'));

profileSetting.remove('fullName');
profileSetting.remove('age');
profileSetting.remove('address');
profileSetting.remove('profile');

// Ứng dụng 4 
function createApp(){
    let cars = [];

    const appCas = {
        add(car){
            cars.push(car);
        },

        show(){
            console.log(cars);
        },

        remove(){
            cars = [];
        }
    }

    return appCas;
}

const app = createApp();
app.add('BMW');
app.show();
app.add('Audi');
app.show();
app.remove();
app.add('Mazda');
app.show();