const input_value = document.getElementById("input_value");
const btn_todo = document.getElementById("btn_todo");
const list_todo = document.getElementById("list-todo");
const filter_todo = document.getElementById("select_todo");

//Hiển thị danh sách trong localStorage
listTodoStorage();

btn_todo.addEventListener("click", addtodo);
list_todo.addEventListener("click", deleteTodo);
filter_todo.addEventListener("click",filterTodo);

function addtodo(e) {
    e.preventDefault();
    todo = input_value.value;
    //Nếu mà có giá trị
    if (todo) {
        const newDiv = document.createElement("div");
        //Add class todo cho thẻ div
        newDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        //Add class todo-item cho thẻ li
        newTodo.classList.add("todo-item");
        //Lấy giá trị todo gán vào thẻ li
        newTodo.innerText = todo

        newDiv.appendChild(newTodo);
        saveLocalStorage(todo);
        input_value.value = "";

        const btn_hoanthanh = document.createElement("button");
        btn_hoanthanh.innerText = "Hoàn thành";
        btn_hoanthanh.classList.add("completed_btn");
        newDiv.appendChild(btn_hoanthanh);

        const btn_xoa = document.createElement("button");
        btn_xoa.innerText = "Xóa";
        btn_xoa.classList.add("deleted_btn");
        newDiv.appendChild(btn_xoa);

        list_todo.appendChild(newDiv);
    }
}

function saveLocalStorage(todo) {
    //todo là biến chứa cái nhiệm vụ mà ta nhập vào
    //task là tên biến ta đặt cho localStorage
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    }
    else {
        task = JSON.parse(localStorage.getItem("task"));
    }
    //Đẩy giá trị vào
    task.push({
        //tên nhiệm vụ
        text: todo,
        //Hoàn thành chưa
        complete: false
    });
    //Đẩy dữ liệu vào biến task này
    localStorage.setItem("task", JSON.stringify(task));
}

function listTodoStorage() {
    let task;
    if (localStorage.getItem("task") === null) {
        task = [];
    }
    else {
        task = JSON.parse(localStorage.getItem("task"));
    }
    task.forEach(nhiemvu => {
        const newDiv = document.createElement("div");
        //Add class todo cho thẻ div
        newDiv.classList.add("todo");
    
        const newTodo = document.createElement("li");
        //Add class todo-item cho thẻ li
        newTodo.classList.add("todo-item");
        //Lấy giá trị todo gán vào thẻ li
        newTodo.innerText = nhiemvu.text
    
        newDiv.appendChild(newTodo);
    
        const btn_hoanthanh = document.createElement("button");
        btn_hoanthanh.innerText = "Hoàn thành";
        btn_hoanthanh.classList.add("completed_btn");
        newDiv.appendChild(btn_hoanthanh);
    
        const btn_xoa = document.createElement("button");
        btn_xoa.innerText = "Xóa";
        btn_xoa.classList.add("deleted_btn");
        newDiv.appendChild(btn_xoa);

        list_todo.appendChild(newDiv);

        if(nhiemvu.complete == true){
			newDiv.classList.add('completed');
			btn_hoanthanh.innerText = "Đã hoàn thành";
			btn_hoanthanh.style.color = "green";
			btn_hoanthanh.disabled = true;
		}
    })
}

function deleteTodo(e){
    //Lấy nguyên cái button đó
    //classList[0] Lấy ra danh sách class của button đó
    const item = e.target;
    if(item.classList[0]==='deleted_btn')
    {
        //Vì cái button deleted_btn nằm trong thằng cha là <div class="todo"> nên khi xóa là ta xóa thằng <div class="todo">
        const todo = item.parentElement;
        todo.remove();
        removeStorageToDo(todo);
    }
    //completed button
	if(item.classList[0]==='completed_btn'){
        const todo = item.parentElement;
        //toggle có nghĩa là khi ta click vào nó sẽ chuyển từ false sang true
		todo.classList.toggle("completed");
		updateStorageItem(todo);
	}
}

function updateStorageItem(todo){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
	}
	const todoIndex = todo.children[0].innerText;
    index = task.findIndex(object => object.text === todoIndex);
    //Nếu tìm được vị trí đó thì ta đưa giá trị complete về true
	task[index].complete = true;
	localStorage.setItem("task", JSON.stringify(task));
}

function removeStorageToDo(todo){
	let task;
	if(localStorage.getItem("task")===null){
		task = [];
	}else{
		task = JSON.parse(localStorage.getItem("task"))
    }
    //Nhận cái click đầu tiên (lần đầu tiên click) nó sẽ lấy cái text (tên nhiệm vụ) này (key ở vị trí 0). Còn nếu ta để children[1] nó sẽ lấy ra nút hoàn thành
    const todoIndex = todo.children[0].innerText;
    //Tìm ra vị trí task và xóa đi 1 lần
	task.splice(task.indexOf(todoIndex),1);
	localStorage.setItem("task", JSON.stringify(task));
}

function filterTodo(e) {
    //list-todo là parentNode sau đó đến sibling(anh em cùng cha khác mẹ) là todo và li(todo-item là những thằng childNode)
    const task = list_todo.childNodes;
    task.forEach(function(todo) {
      //khi mình click vào các option trong select nó sẽ lấy ra value của option
      switch (e.target.value) {
        case "tatca":
          todo.style.display = "block";
          break;
        case "hoanthanh":
          //Tìm li mà có chưa div class completed
          if (todo.classList.contains("completed")) {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;
        case "chuahoanthanh":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "block";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }