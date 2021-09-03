document.querySelector(".showcart").style.display = "none";

var giohang = JSON.parse(localStorage.getItem("giohang")) ?  JSON.parse(localStorage.getItem("giohang")) : [];

ShowCountSp();

function AddToCart(x) {
// parentElement: Tìm đến thẻ cha, children: Tìm đến các thẻ con, boxsp chính là 1 cái mảng
// boxsp có 4 thẻ con (Cặp thẻ bao bọc ngoài cùng), trong đó 2 thẻ con đầu tiên thì bên trong mỗi thẻ con này lại có 1 thẻ con bên trong
    var boxsp = x.parentElement.children; 

    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value);

    var sp = new Array(hinh, gia, tensp, soluong);

    var isExist = false;

    // Sản phẩm đã tồn tại trong giỏ hàng hay chưa?
    for(var i = 0; i < giohang.length; i++){
        if(giohang[i][2] == tensp){
            soluong += parseInt(giohang[i][3]);
            giohang[i][3] = soluong;
            isExist = true;
            break;
        }
    }

    if(!isExist){
        giohang.push(sp);
    }

    localStorage.setItem('giohang',JSON.stringify(giohang));

    ShowCountSp();

    ShowMyCart();

    boxsp[3].value = 1;
}

function ShowCountSp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}

function ShowCart(){
    const x = document.querySelector(".showcart");
    if(x.style.display == "none" ){
        x.style.display = "block";
        ShowMyCart();
    }
    else{
        x.style.display = "none";
    }
}

function ShowMyCart(){
    var html = "";
    if(giohang?.length > 0){
        var thanhtien = 0;
        var tongtien = 0;
        for(var i = 0; i < giohang.length; i++){
            thanhtien = parseFloat(giohang[i][1]) * parseFloat(giohang[i][3]);
            tongtien += thanhtien;
            html += "<tr>" +
                      "<td>"+(i + 1)+"</td>" + 
                      "<td><img src='"+giohang[i][0]+"'alt=''/></td>" +
                      "<td>"+giohang[i][2]+"</td>" +
                      "<td>"+giohang[i][1]+"</td>" +
                      "<td>"+giohang[i][3]+"</td>" +
                      "<td><div>"+thanhtien+"</div></td>"   +
                      "<td><button onclick='DeleteProduct(this)'>Xoá</button></td>"   +
                    "</tr>";
        }
        html += "<tr>" +
                "<th colspan='6'>Tổng đơn hàng</th>" +
                "<th><div>"+tongtien+"</div></th>" +
                "</tr>"
    }
    else{
        html = "<span>Không tồn tại sản phẩm nào</span>"
    }
    document.querySelector("#myCart").innerHTML = html;
}

function ShowMyCartCheckOut(){
    var giohang = JSON.parse(localStorage.getItem("giohang")) ?  JSON.parse(localStorage.getItem("giohang")) : [];
    var html = "";
    if(giohang?.length > 0){
        var thanhtien = 0;
        var tongtien = 0;
        for(var i = 0; i < giohang.length; i++){
            thanhtien = parseFloat(giohang[i][1]) * parseFloat(giohang[i][3]);
            tongtien += thanhtien;
            html += "<tr>" +
                      "<td>"+(i + 1)+"</td>" + 
                      "<td><img src='"+giohang[i][0]+"'alt=''/></td>" +
                      "<td>"+giohang[i][2]+"</td>" +
                      "<td>"+giohang[i][1]+"</td>" +
                      "<td>"+giohang[i][3]+"</td>" +
                      "<td><div>"+thanhtien+"</div></td>"   +
                    "</tr>";
        }
        html += "<tr>" +
                "<th colspan='5'>Tổng đơn hàng</th>" +
                "<th><div>"+tongtien+"</div></th>" +
                "</tr>"
    }
    else{
        html = "<span>Không tồn tại sản phẩm nào</span>"
    }
    document.querySelector("#myCartCheckOut").innerHTML = html;
}

function CheckOut(){
    var thongtinnhanhang = document.querySelector("#thongtinnhanhang").children; // Lấy ra các thẻ con 
    var hoten     = thongtinnhanhang[0].children[1].children[0].value;   // Vào thẻ con tr đầu tiên -> vào thẻ td thứ 2 -> vào thẻ input 
    var diachi    = thongtinnhanhang[1].children[1].children[0].value;   // Vào thẻ con tr thứ hai  -> vào thẻ td thứ 2 -> vào thẻ input 
    var dienthoai = thongtinnhanhang[2].children[1].children[0].value;   // Vào thẻ con tr thứ ba   -> vào thẻ td thứ 2 -> vào thẻ input 
    var email     = thongtinnhanhang[3].children[1].children[0].value;   // Vào thẻ con tr thứ tư   -> vào thẻ td thứ 2 -> vào thẻ input 

    var khachhang = new Array(hoten,diachi,dienthoai,email);

    localStorage.setItem("khachhang",JSON.stringify(khachhang));

    thongtinnhanhang[0].children[1].children[0].value= "";
    thongtinnhanhang[1].children[1].children[0].value= "";
    thongtinnhanhang[2].children[1].children[0].value = "";
    thongtinnhanhang[3].children[1].children[0].value = "";

    // Chuyển trang
    window.location.assign("order.html");
}

function ShowInfoCustomer(){
    var customer = JSON.parse(localStorage.getItem("khachhang")) ? JSON.parse(localStorage.getItem("khachhang")) : [];

    var html = "<tr>" +
                    "<td width='20%'>Họ tên</td>" +
                    "<td>"+customer[0]+"</td>" + 
                "</tr>" +
                "<tr>" +
                    "<td width='20%'>Địa chỉ</td>" +
                    "<td>"+customer[1]+"</td>" + 
                "</tr>" +
                "<tr>" +
                    "<td width='20%'>Điện thoại</td>" +
                    "<td>"+customer[2]+"</td>" + 
                "</tr>" +
                "<tr>" +
                    "<td width='20%'>Email</td>" +
                    "<td>"+customer[3]+"</td>" + 
                "</tr>";
                
    document.querySelector("#thongtinnhanhang").innerHTML = html;
}

function DeleteProduct(x){
    // Xoá thẻ tr
    var tr = x.parentElement.parentElement; // Vào thẻ td -> Vào thẻ tr
    var tensp = tr.children[2].innerText;
    tr.remove();
    // Xoá sản phẩm trong mảng
    for (var i = 0; i < giohang.length; i++){
        if(giohang[i][2] = tensp){
            giohang.splice(i,1);
        }
    }
    localStorage.setItem("giohang",JSON.stringify(giohang))
    ShowMyCart();
    ShowCountSp();
}

function DeleteAll(){
    giohang = [];
    localStorage.setItem("giohang",JSON.stringify(giohang));
    ShowMyCart();
    ShowCountSp();
}