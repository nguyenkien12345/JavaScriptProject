const url = 'https://jsonplaceholder.typicode.com/todos/'

function getTodos(callback){
    fetch(url)
        .then(res => res.json())
        .then(callback)
}

function showTodos(todos){
    var html = document.querySelector('#box');
    if(todos.length > 0){
        var result = todos.map(function(todo){
            return `
                <li class='item-${todo.id}'>
                    <h4>${todo.title}</h4>
                    <p>${todo.status ? 'Hoàn thành' : 'Chưa hoàn thành'}</p>
                    <button onclick="deleteTodo(${todo.id})">Xoá</button>
                </li>
            `
        });
    }
    html.innerHTML = result.join('');
}

function createTodo(todo, callback){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
        };
    fetch(url, options)
        .then(res => res.json)
        .then(callback);
}

function deleteTodo(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        };
    fetch(url + '/' + id, options)
        .then(res => res.json)
        .then(function(){
            var result = document.querySelector('.item-' + id);
            if(result){
                result.remove();
            }
        }
        )
}

function handleForm(){
    var btn = document.querySelector('#btn');
    btn.onclick = function(){
        var name   = document.querySelector('input[name="name"]').value.trim();
        var status = Boolean(document.querySelector('select[name="status"]').value);
        if(name === '')
        {
            alert('Vui lòng nhập tên công việc');
            return;
        }
        var formData = {
            name: name,
            status: status
        }
        createTodo(formData, function(){
            getTodos(showTodos)
        })
    }
}

function run(){
    getTodos(showTodos);
    handleForm();
}

run();