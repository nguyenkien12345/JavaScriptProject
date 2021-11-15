// Phương thức bind() sẽ trả về 1 hàm mới với this mới
// Có thể nhận các đối số như hàm ban đầu
// Phương thức bind() cho phép ràng buộc this cho 1 phuơng thức (function)
// bind nhận đối số đầu tiên là cái obj mà chúng ta muốn ràng buộc nó với từ khoá this

// Ví dụ 1
this.firstName = 'Minh'
this.lastName = 'Thu'

const teacher = {
    firstName: 'Minh',
    lastName: 'Thảo',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Case 1:
console.log(teacher.getFullName()); // Kết quả: Minh Thảo
// Case 2:
const getTeacherName = teacher.getFullName;
console.log(getTeacherName());      // Kết quả: Minh Thu
// Giải thích:
// + Cặp () có nghĩa là gọi hàm. teacher.getFullName() có nghĩa là gọi hàm getFullName của đối tượng teacher. Còn teacher.getFullName chỉ mới là truy cập vào function của đối tượng teacher chứ không hề gọi hàm
// + const getTeacherName = teacher.getFullName nghĩa là ta đang gán function cho biến getTeacherName. Mà function là dạng tham chiếu
// nên việc ta gán giá trị tham chiếu cho 1 biến khác bản chất là ta đang sao chép vùng nhớ sang cho biến kia
// + Tại sao getTeacherName() lại trả về Minh Thu mà không phải là Minh Thảo. Bởi vì khi các bạn gọi hàm không thông qua 1 đối tượng (không có dấu chấm ở đằng trước) thì lúc đó cái từ khoá this nó sẽ trỏ ra đối tượng global trong phạm vi window. This ở đây chính là Minh và Thu
// Kết luận: + Cho dù chính là method được tạo ra ở bên trong 1 đối tượng nhưng nếu mà chúng ta gán nó sang 1 biến khác và chúng ta gọi biến đó không thông qua đối tượng (không có dấu chấm ở đằng trước) thì từ khoá this nó vẫn trỏ về đối tượng phạm vi window
// + Bản thân từ khoá this nó không phải là 1 cái biến mang giá trị mà nó chỉ là 1 từ khoá tham chiếu đến 1 đối tượng khác thôi. Tại thời điểm các bạn định nghĩa ra phương thức hay hàm thì lúc đó từ khoá this chưa mang giá trị và nó cũng chưa biết nó trỏ về đâu cả. Khi các bạn thực thi cái method hay gọi function thì tuỳ vào ngữ cảnh lúc đó thì javascript nó sẽ tính toán để nó tham chiếu tới đúng cái đối tượng
// Vậy phương thức bind sẽ giúp chúng ta giải quyết điều gì?
// + Vẫn với const getTeacherName = teacher.getFullName; khi gọi console.log(getTeacherName()) ta muốn nó trả về Minh Thảo chứ không phải Minh Thu. Lúc này ta sẽ dùng phương thức bind để giải quyết vấn đề
const getTeacherNameAdvanced = teacher.getFullName.bind(teacher);
console.log(getTeacherNameAdvanced());      // Kết quả: Minh Thảo

// Ví dụ 2
const student = {
    firstName: 'Trung',
    lastName: 'Kiên',
}

const girlFriend = {
    firstName: 'Ngô',
    lastName: 'My',
    getFullName(data1, data2) {
        console.log(data1+ ' ' +data2);
        return`${this.firstName} ${this.lastName}`;
    },
    consoleFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// // Case 1:
console.log(girlFriend.getFullName()) // Kết quả: Ngô My
// // Case 2:
const getGirlFriendName = girlFriend.getFullName           
console.log(getGirlFriendName()) // Kết quả: Minh Thu
// + girlFriend.getFullName chưa gọi hàm. Mới chỉ truy cập vào function mà thôi. Nó gán function này qua 1 biến khác. Function bản chất nó là 1 object đặc biệt. Mà object nó là dạng tham chiếu. Và khi ta gán hàm sang 1 biến khác bản chất là nó chỉ copy vùng nhớ mà thôi
// + Khi mà chúng ta gọi 1 hàm không thông qua đối tượng (không có dấu chấm ở đằng trước) thì lúc đó từ khoá this sẽ trỏ ra đối tượng global và trình duyệt nó sẽ chọc ra phạm vi window. Và this được khai báo global chính là đối tượng window

// // Cách khắc phục ở case 2 bằng bind
const getGirlFriendNameAdvanced = girlFriend.getFullName.bind(girlFriend,'21','Vũng Tàu')  
console.log(getGirlFriendNameAdvanced()) // Ngô My
// + Lúc này this trong hàm này chính là đối tượng girlFriend mà chúng ta truyền vào bind. Lúc này nó đã là 1 hàm mới với vùng nhớ mới

const getStudent = teacher.getFullName.bind(student)       
console.log(getStudent()) // Trung Kiên
// + Lúc này this trong hàm này chính là đối tượng student mà chúng ta truyền vào bind. (Lưu ý: Ta sử dụng phương thức getFullName của đt teacher). Lúc này nó đã là 1 hàm mới với vùng nhớ mới

// Bài tập tương tác với DOM
// Ví dụ 3
const button = document.querySelector('button')
button.onclick = girlFriend.consoleFullName.bind(girlFriend); 
// + girlFriend.getFullName chính là 1 function. Khi bạn gán 1 method này cho 1 method khác, biến khác thì các bạn phải xét trường hợp ở cái biến, method được gán.
// + Khi chúng ta click thì ở bên trong cái handleDom nó sẽ sử dụng cái obj button gọi đến onclick vì vậy cái method onclick này từ khoá this ở bên trong thằng này nó sẽ trỏ về button cơ thế nên this trong trường hợp này nó đã trở thành button. Mà button chấm đến firstName và lastName không có nên nó sẽ in ra undefined. Nên để khắc phục ta sẽ dùng bind()

// Ví dụ 4
const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Ví dụ 4a
// console.log($('#heading').innerText);

// Ví dụ 4b
const app = (() => {
    const cars = ['Audi', 'Mazda'];
    const root = $('#root');
    const input = $('#input');
    const submit = $('#submit');

    return {
        addCar(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index,1)
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete'); 
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
            // closest là 1 phương thức của 1 dom element. Nó giúp chúng ta kiểm tra chính cái element đó hoặc là cha của nó có chứa class đó hay ko. Mình muốn kiểm tra xem có class delete hay không. Khi ta bấm vào cả thẻ con thì nó cũng tìm được luôn nên dùng closest
        },
        render(){
            const html = cars.map((car,index) => `
                <li>
                    ${car}
                    <span class='delete' data-index='${index}'>&times</span>
                </li>
            `)
            .join('')
            root.innerHTML = html;
        },
        init(){
            // Khi chưa có arrow function
            // const _this = this; 
            // // handle Dom Event
            // submit.onclick = function() { 
            //     // Ta đang gọi this trong 1 function khác. Mà function khác này lại có Context của nó. Context lúc này chính là object submit.
            //     // Đồng nghĩa lúc này this này là đối tượng submit. Nên chúng ta cần lấy đối tượng this ở phạm vi bên ngoài trong phạm vi hàm init
            //     const car = input.value
            //     _this.addCar(car)
            //     _this.render()
            // }

            // Khi đã có arrow function (arrow function không có context nên nó sẽ nhảy ra bên ngoài để lấy context)
            submit.onclick = () => { 
                const car = input.value;
                this.addCar(car);
                this.render();
                input.value = null;
                input.focus();
            }

            root.onclick = this.handleDelete.bind(this);

            this.render()
        }
    }
})();

app.init();

// DELEGATE: giúp chúng ta bắt được những cái việc mà click vào element được thêm vào DOM sau khi chương trình nó chạy