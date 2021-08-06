//// ------------------------------------------------------------------------------------------------------------------------------------------
// // Phương thức bind() sẽ trả về 1 hàm mới
// // Có thể nhận các đối số như hàm ban đầu
// // Phương thức bind() cho phép ràng buộc this cho 1 phuơng thức (function)

// this.firstName = 'Minh'
// this.lastName = 'Thu'

// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thảo',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const student = {
//     firstName: 'Trung',
//     lastName: 'Kiên',
// }

// const girlFriend = {
//     firstName: 'Ngô',
//     lastName: 'My',
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// // Case 1:
// console.log(teacher.getFullName()) // Minh Thảo

// // Case 2:
// const getTeacherName1 = teacher.getFullName           
// // teacher.getFullName chưa gọi hàm. Mới chỉ truy cập vào function mà thôi. Nó gán function này qua 1 biến khác. Function bản chất nó là 1 object đặc biệt. Mà object nó là dạng tham chiếu. Và khi ta gán hàm sang 1 biến khác bản chất là nó chỉ copy vùng nhớ mà thôi
// console.log(getTeacherName1()) // Minh Thu
// // Khi mà chúng ta gọi 1 hàm không thông qua đối tượng (không có dấu chấm ở đằng trước) thì lúc đó từ khoá this sẽ trỏ ra đối tượng global và trình duyệt nó sẽ chọc ra phạm vi window. Và this được khai báo global chính là đối tượng window

// // Cách khắc phục ở case 2 bằng bind
// const getTeacherName2 = teacher.getFullName.bind(teacher)  // Lúc này this trong hàm này chính là đối tượng teacher mà chúng ta truyền vào bind. Lúc này nó đã là 1 hàm mới với vùng nhớ mới
// console.log(getTeacherName2()) // Minh Thảo

// const getStudent = teacher.getFullName.bind(student)       // Lúc này this trong hàm này chính là đối tượng student mà chúng ta truyền vào bind. (Lưu ý: Ta sử dụng phương thức getFullName của đt teacher). Lúc này nó đã là 1 hàm mới với vùng nhớ mới
// console.log(getStudent()) // Trung Kiên

// // Bài tập tương tác với DOM
// const button = document.querySelector('button')
// button.onclick = girlFriend.getFullName.bind(girlFriend) 
// // girlFriend.getFullName chính là 1 function. Khi bạn gán 1 method này cho 1 method khác, biến khác thì các bạn phải xét trường hợp ở cái biến, method được gán.
// // Khi chúng ta click thì ở bên trong cái handleDom nó sẽ sử dụng cái obj button gọi đến onclick vì vậy cái method onclick này từ khoá this ở
// // bên trong thằng này nó sẽ trỏ về button cơ thế nên this trong trường hợp này nó đã trở thành button. Mà button chấm đến firstName và 
// // lastName không có nên nó sẽ in ra undefined. Nên để khắc phục ta sẽ dùng bind()
//// ------------------------------------------------------------------------------------------------------------------------------------------









//// ------------------------------------------------------------------------------------------------------------------------------------------
const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Ví dụ 1
// console.log($('#heading').innerText);

// Ví dụ 2
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
            const deleteBtn = e.target.closest('.delete'); // closest là 1 phương thức của 1 dom element. Nó giúp chúng ta kiểm tra chính cái element đó hoặc là cha của nó có chứa class đó hay ko. Mình muốn kiểm tra xem có class delete hay không. Khi ta bấm vào cả thẻ con thì nó cũng tìm được luôn nên dùng closest
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
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
            // const _this = this; // Khi chưa có arrow function

            // // handle Dom Event
            // submit.onclick = function() { 
            //     // Ta đang gọi this trong 1 function khác. Mà function khác này lại có Context của nó. Context lúc này chính là object submit.
            //     // Đồng nghĩa lúc này this này là đối tượng submit. Nên chúng ta cần lấy đối tượng this ở phạm vi bên ngoài trong phạm vi hàm init
            //     const car = input.value
            //     _this.addCar(car)
            //     _this.render()
            // }

            // Khi đã có arrow function (arrow function không có context)
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

// Delegate

//// ------------------------------------------------------------------------------------------------------------------------------------------
