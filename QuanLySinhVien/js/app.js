var dssv = JSON.parse(localStorage.getItem("dssv")) ?  JSON.parse(localStorage.getItem("dssv")) : [];

let isValidEmail = function(val) {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
}

function save(){
    // Get value
    var id = document.getElementById("id").value;
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var gender = "";
    if(document.getElementById("male").checked){
        gender = document.getElementById("male").value;
    }
    else if(document.getElementById("female").checked){
        gender = document.getElementById("female").value;
    }

    if (gender === "1"){
        gender = "Nam";
    }
    else if(gender === "2"){
        gender = "Nữ"
    }

    // Validate form
    if(_.isEmpty(_.trim(fullname))){
        fullname = '';
        document.getElementById("fullname_error").innerHTML = "Vui lòng nhập họ và tên";
    }
    else if(_.trim(fullname).length < 3 || _.trim(fullname).length > 255) {
        fullname = '';
        document.getElementById("fullname_error").innerHTML = "Không được phép bé hơn hơn 3 kí tự và lớn hơn 255 kí tự";
    }
    else{
        document.getElementById("fullname_error").innerHTML = "";
    }

    
    if(_.isEmpty(_.trim(email))){
        email = '';
        document.getElementById("email_error").innerHTML = "Vui lòng nhập email";
    }
    else if(!isValidEmail(_.trim(email))){
        email = '';
        document.getElementById("email_error").innerHTML = "Email không hợp lệ";
    }
    else{
        document.getElementById("email_error").innerHTML = "";
    }

    if(_.isEmpty(_.trim(phone))){
        phone = '';
        document.getElementById("phone_error").innerHTML = "Vui lòng nhập số điện thoại";
    }
    else if(isNaN(phone)){
        phone = '';
        document.getElementById("phone_error").innerHTML = "Vui lòng nhập số. Không nhập chữ";
    }
    else if(!phone.startsWith(0) || _.trim(phone).length !== 10){
        phone = '';
        document.getElementById("phone_error").innerHTML = "Số điện thoại không hợp lệ";
    }
    else{
        document.getElementById("phone_error").innerHTML = "";
    }

    if(_.isEmpty(_.trim(address))){
        address = '';
        document.getElementById("address_error").innerHTML = "Vui lòng nhập địa chỉ";
    }
    else if(_.trim(address).length < 3 || _.trim(address).length > 255) {
        address = '';
        document.getElementById("address_error").innerHTML = "Không được phép bé hơn hơn 3 kí tự và lớn hơn 255 kí tự";
    }
    else{
        document.getElementById("address_error").innerHTML = "";
    }

    if(_.isEmpty(gender)){
        gender = '';
        document.getElementById("gender_error").innerHTML = "Vui lòng chọn giới tính";
    }
    else{
        document.getElementById("gender_error").innerHTML = "";
    }

    if(fullname && email && phone && address && gender){
        var sinhVien = {
            fullname: fullname,
            email: email,
            phone: phone,
            address: address,
            gender: gender
        };

        //Cập nhật 
        if(id != ''){
            //gán giá trị mới
            dssv[id] = sinhVien;
            localStorage.setItem("dssv",JSON.stringify(dssv));
            renderUI();
            return;
        }

        dssv.push(sinhVien);

        localStorage.setItem("dssv",JSON.stringify(dssv));

        reset();
    }
    else {
        return;
    }

    renderUI();

};

function reset(){
    document.getElementById("fullname").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("address").value="";
    document.getElementById("male").checked="";
    document.getElementById("female").checked=""
};

function editStudent(id){
    if(id !== null){
            var sinhvien = dssv[id];
            document.getElementById('id').value = id;
            document.getElementById("fullname").value=sinhvien.fullname;
            document.getElementById("email").value=sinhvien.email;
            document.getElementById("phone").value=sinhvien.phone;
            document.getElementById("address").value=sinhvien.address;
            if(sinhvien.gender === "Nam"){
                document.getElementById("male").checked = true;
                document.getElementById("female").checked = false;
            }
            else if(sinhvien.gender === "Nữ"){
                document.getElementById("male").checked = false;
                document.getElementById("female").checked = true;
            }
    }
};

function deleteStudent(id){
    if(id !== null){
        var result = confirm(`Bạn có chắc chắn muốn xoá sinh viên ${dssv[id].fullname} không?`)
        if(result){
            dssv.splice(id,1);
            localStorage.setItem("dssv",JSON.stringify(dssv));
            renderUI();
        }
    }
};

function renderUI(){
    var html = "";
    if(dssv?.length > 0){
        for (var i = 0; i < dssv.length; i++){
            html += "<tr>" +
                            "<td>"+(i+1)+"</td>" +
                            "<td>"+dssv[i].fullname+"</td>" +
                            "<td>"+dssv[i].gender+"</td>" +
                            "<td>"+dssv[i].email+"</td>" +
                            "<td>"+dssv[i].phone+"</td>" +
                            "<td>"+dssv[i].address+"</td>" +
                            "<td>" +
                                "<a href='#' onclick='editStudent("+i+")'>Cập nhật</a>" +
                                "<br/>" +
                                "<a href='#' onclick='deleteStudent("+i+")'>Xoá</a>" +
                            "</td>" +
                    "</tr>";
        }
        document.querySelector("#table-student").innerHTML = html;
    }
    else{
        document.querySelector("#table-student").innerHTML = "<span>Không tồn tại bất kỳ sinh viên nào</span>";
    }
};

renderUI();