var clbAPI = "http://localhost:3000/club";

function start(){
    // Cách viết 1
    // getClubs(function(clubs){
    //     renderClubs(clubs);
    // });

    // Cách viết 2 tối ưu hơn. Ở cách 1 là function lồng function mà đối số clubs của hàm getClubs cũng là đối số của hàm renderClubs
    //renderClubs sẽ được gọi dưới dạng callback khi mà fetch(clbAPI)
    getClubs(renderClubs);
    handleCreateForm();
}

start();

// Functions
function getClubs(callback){
    // Mặc định fetch này gửi đi phương thức là get nên không cần định nghĩa phương thức. Ngoài get ra các phương thức khác phải định nghĩa
    fetch(clbAPI)
    .then(res => res.json())
    .then(callback)
}

function renderClubs(clubs){
    var listClbsBlock = document.querySelector("#list-club");
    var htmls = clubs.map(function(club)
    {
        return `
            <li class="club-item-${club.id}">
                <h4>${club.name}</h4>
                <p>${club.Acronym}</p>
                <p>${club.Manager}</p>
                <p>${club.rank}</p>
                <p>${club.status}</p>
                <button onclick="handleDeleteClub(${club.id})">Xóa</button>
            </li>
        `;
    });
    listClbsBlock.innerHTML = htmls.join('');
}

function createClubs(data,callback){
    var options = {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        // Dữ liệu gửi đi
        body: JSON.stringify(data)
    };
    fetch(clbAPI,options)
    .then(res => res.json())
    .then(callback)
}

function handleDeleteClub(id){
    var options = {
        method:"DELETE",
        headers:{
            'Content-Type':'application/json'
        },
    };
    fetch(clbAPI + '/' + id,options)
    .then(res => res.json())
    //Sau khi xóa load lại luôn
    .then(function(){
        var clubItem = document.querySelector(".club-item-"+id);
        if(clubItem){
            clubItem.remove();
        }
    });
}

function handleCreateForm(){
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var acronym = document.querySelector('input[name="acronym"]').value;
        var manager = document.querySelector('input[name="manager"]').value;
        var rank = document.querySelector('input[name="rank"]').value;
        var status = document.querySelector('input[name="status"]').value;
        var formData = {
            name: name,
            Acronym: acronym,
            Manager: manager,
            rank: rank,
            status: status
        }
        createClubs(formData,function(){
            getClubs(renderClubs);
        });
        //Ts thứ 2 là khi ta vừa mới thêm vào clb mới thì nó sẽ tự load lại luôn
    }
}