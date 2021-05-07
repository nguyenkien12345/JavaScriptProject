// Promise example - Ví dụ sử dụng Promise

var users = [
    {
        id: 1,
        name: 'Phuong My'
    },
    {
        id: 2,
        name: 'Thien Tu'
    },
    {
        id: 3,
        name: 'Gia Linh'
    },
    {
        id: 4,
        name: 'Hong Quan'
    }
    //...
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Phuong My Yeu Kien'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Thien Tu Thuong Kien'
    },
    {
        id: 3,
        user_id: 3,
        content: 'Gia Linh Thich Kien'
    },
    //...
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user

// FAKE API
function getComments(){
    return new Promise(function(resolve){
        // Giả sử internet bị chậm. Sau 1s mình mới resolve
        setTimeout(function(){
            resolve(comments);
            // console.log(comments);
        },1000)
    })
}

function getUsers(){
    return new Promise(function(resolve){
        // Giả sử internet bị chậm. Sau 1s mình mới resolve
        setTimeout(function(){
            resolve(users);
            // console.log(users);
        },1000)
    })
}

function getUsersByIds(userIds){
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            // Chỉ lấy ra những ông user có id nằm trong cái list userIds
            return userIds.includes(user.id)
        })
        setTimeout(function(){
            resolve(result);
        },1000)
    },1000);
}

getComments()
        .then(function(comments){
            // console.log(comments); -> Thay vì lấy toàn bộ dữ liệu trong comments thì ta chỉ cần lấy ra mảng danh sách mảng các user_id
            var userIds = comments.map(function(comment){
                return comment.user_id;
            });
            return getUsersByIds(userIds)
                .then(function(users){
                return{
                        users: users,
                        comments: comments,
                    };
            });
        })
        .then(function(data){ 
            console.log(data);
            var commentBlock = document.getElementById("comment-block");
            var html = '';
            data.comments.forEach(function(comment){
                var user = data.users.find(function(user){
                    return user.id === comment.user_id
                })
                html += `<li>${user.name}: ${comment.content}</li>`
            });
            commentBlock.innerHTML = html;
        });

