// +++++++++++++++++++++++++++++++++++++++++++++++++++  Ứng dụng 1 +++++++++++++++++++++++++++++++++++++++++++++++++++
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

// Kết luận
// + counter_example => Chính là hàm increase được tạo ra trong chính createCounter. Ở đây ta gọi hàm createCounter() 1 lần nên chỉ có 1 phạm vi được tạo ra
// 1   => Đi đến hàm increase gọi vào thằng counter mà thằng counter không nằm trong phạm vi hàm increase nên nó nhảy ra bên ngoài để tìm sau đó lấy biến counter này tăng lên 1
// 2,3 => Xử lý logic như trên nhưng vì nó cùng phạm vi của biến createCounter được tạo ra tức là chỉ có 1 phạm vi mà trước đó biến counter này đã tăng lên 1 nên lúc này tăng lên nữa sẽ là 2. (3 tương tự)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// +++++++++++++++++++++++++++++++++++++++++++++++++++  Ứng dụng 2 +++++++++++++++++++++++++++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// +++++++++++++++++++++++++++++++++++++++++++++++++++  Ứng dụng 3 +++++++++++++++++++++++++++++++++++++++++++++++++++
function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store));
    }

    const storage = {
        // Lấy ra dữ liệU trong localStorage
        get(key){
            return store[key];
        },
        // Lưu dữ liệU trong localStorage
        set(key,value){
            store[key] = value;
            save();
        },
        // Xoá dữ liệU trong localStorage
        remove(key){
            delete store[key];
            save();
        }
    }

    return storage;
}

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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// +++++++++++++++++++++++++++++++++++++++++++++++++++  Ứng dụng 4 +++++++++++++++++++++++++++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

