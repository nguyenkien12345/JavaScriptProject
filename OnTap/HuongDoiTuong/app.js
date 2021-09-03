let isValidEmail = function(val) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
}

// Khởi tạo đối tượng user
const user = new User();

// _ chính là lodash
const register = document.querySelector(".btn-register");
const reset    = document.querySelector(".btn-reset");

let fullnameElm = document.querySelector("#fullname");
let emailElm = document.querySelector("#email");
let phoneElm = document.querySelector("#phone");
let addressElm = document.querySelector("#address");

function validateForm(){
    let fullname = _.trim(fullnameElm.value);
    let email    = _.trim(emailElm.value);
    let phone    = _.trim(phoneElm.value);
    let address  = _.trim(addressElm.value);

    let errorFullname = '';
    let errorEmail    = '';
    let errorPhone    = '';
    let errorAddress  = '';

    // Validate fullname
    if(_.isEmpty(fullname)){
        errorFullname = "Please Enter Your Fullname";
    }
    else if(fullname.length < 2){
        errorFullname = "Can not less than 2 character";
    }
    else if(fullname.length > 64){
        errorFullname = "Can not more than 64 character";
    }

    // Validate email
    if(_.isEmpty(email)){
        errorEmail = "Please Enter Your email";
    }
    else if(!isValidEmail(email)){
        errorEmail = "Your email format is wrong";
    }

    // Validate phone
    if(_.isEmpty(phone)){
        errorPhone = "Please Enter Your Phone";
    }
    else if(isNaN(phone)){
        errorPhone = "Your phone must be number";
    }
    else if(phone.length !== 10){
        errorPhone = "Your phone format is wrong";
    }

    // Validate address
    if(_.isEmpty(address)){
        errorAddress = "Please Enter Your Address";
    }
    else if(address.length < 2){
        errorAddress = "Can not less than 2 character";
    }
    else if(address.length > 255){
        errorAddress = "Can not more than 255 character";
    }

    document.querySelector('.error_fullname').innerHTML = errorFullname;
    document.querySelector('.error_email').innerHTML = errorEmail;
    document.querySelector('.error_phone').innerHTML = errorPhone;
    document.querySelector('.error_address').innerHTML = errorAddress;

    // Trả về giá trị
    if(fullname && email && phone && address){
        return {
            fullname: fullname,
            email: email,
            phone: phone,
            address: address
        }
    }
    else{
        return false;
    }
}

function renderUser(){
    let users = user.all();
    let content = `
    <tr>
        <th>Fullname</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Action</th>
    </tr>
`;
    users.forEach((user,index) => {
        content += `
            <tr>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
                <td>
                    <a href='#' onclick="updateUser(${index})">Edit</a>
                    <a href='#' onclick="deleteUser(${index})">Delete</a>
                </td>
            </tr>
        `
    });
    document.querySelector("#table-user-list").innerHTML = content;
}

register.addEventListener('click', function(){
    let data = validateForm();
    if(data){
        let userID = register.getAttribute('data-id');
        if(!_.isEmpty(userID))
        {
            //Update
            user.update(userID,data);
        }
        else{
            // Insert
            user.add(data);
        }
        renderUser();
    }
});

function deleteUser(id){
    user.delete(id);
    renderUser()
}

function updateUser(id){
    let x = user.findById(id);
    
    fullnameElm.value = x.fullname;
    emailElm.value = x.email;
    phoneElm.value = x.phone;
    addressElm.value = x.address;
    // Update thì thuộc tính data-id sẽ có giá trị
    register.setAttribute('data-id', id);

    renderUser()
}

renderUser();


