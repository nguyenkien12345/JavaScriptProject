// ----------------------------- Context với bind  -----------------------------
var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, My name is', this.name);
    }
}

// Context (Bối cảnh) của sayHi() là mouse
mouse.sayHi();

var cat = {name: 'Tom'}

// Nếu muốn thay đổi Context của function thì ta dùng bind. Bind tạo ra 1 function mới. Khi mà gọi biến this chính là biến nằm trong bind()
var say = mouse.sayHi.bind(cat);
say();