var danhSachSinhVien = new DanhSachSinhVien();
var validate = new Validation();

//Khi mà trang web vừa được load thì nó sẽ lấy dữ liệu ra load lên luôn. 
// Nếu trong LocalStorage không lưu gì thì nó sẽ bị lỗi khi chạy lên và không thêm dữ liệu được nên 
//cách khắc phục là cmt GetStorage(); lại
// GetStorage();

//Bổ sung thuộc tính 
SinhVien.prototype.DiemToan = '';
SinhVien.prototype.DiemLy ='';
SinhVien.prototype.DiemHoa ='';
SinhVien.prototype.DTB ='';
SinhVien.prototype.Loai ='';
// Thêm phương thức
SinhVien.prototype.TinhDTB = function (){
    this.DTB = (Number(this.DiemHoa) + Number(this.DiemLy) + Number(this.DiemToan)) / 3;
}

SinhVien.prototype.XepLoai = function(){
    if(this.DTB<=10 && this.DTB >=8)
    {
        this.Loai = "Xếp loại Giỏi";
    }
    else if (this.DTB<8 && this.DTB >= 6.5)
    {
        this.Loai = "Xếp loại Khá";
    } 
    else if (this.DTB<6.5 && this.DTB >= 5)
    {
        this.Loai = "Xếp loại Trung Bình";
    }
    else
    {
        this.Loai = "Xếp loại yếu";
    }
}


function DomID(id)
{
    var element = document.getElementById(id);
    return element;
}

function KiemTraDauVaoRong(ID,value)
{
    //Kiểm tra mã sinh viên rổng
    if(validate.KiemTraRong(value) == true)
    {
        DomID(ID).style.borderColor = "red"; 
        return true;                 
    }
    else
    {
        DomID(ID).style.borderColor = "green";  
        return false;
    } 
}

function TaoTheTD (className, value)
{
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    //Phải return để có giá trị trả về mà còn bắt sự kiện
    return td;
}

//Khi mà chúng ta không nhập đầy đủ dữ liệu vào các ô input mà bấm thêm thì nó sẽ bị lỗi không thêm được
// nên bắt buộc chúng ta phải thêm dữ liệu vào hết rồi mới bấm nút thêm
function ThemSinhVien()
{
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;
    var loi = 0;
    //Kiểm tra validation
    if(KiemTraDauVaoRong("masv",masv) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("cmnd",cmnd) == true)
    {
        loi++;
    }   
    if(validate.KiemTraEmail(email))
    {
        document.getElementById("email").style.borderColor = "green";
    }
    else
    {
        document.getElementById("email").style.borderColor = "red";
        loi++;
    }
    if(validate.KiemTraSoDT(sdt))
    {
        document.getElementById("sdt").style.borderColor = "green";
    }
    else
    {
        document.getElementById("sdt").style.borderColor = "red";
        loi++;
    }
    if(loi != 0)
    {
        return ;
    }
    //Thêm sinh viên
    var sinhvien = new SinhVien(masv,hoten,email,sdt,cmnd);
    sinhvien.DiemHoa = DomID("Toan").value;
    sinhvien.DiemLy = DomID("Ly").value;
    sinhvien.DiemHoa = DomID("Hoa").value;
    sinhvien.TinhDTB();
    sinhvien.XepLoai();
    danhSachSinhVien.ThemSinhVien(sinhvien);
    CapNhatDanhSachSV(danhSachSinhVien);
    console.log(danhSachSinhVien);
}
window.ThemSinhVien = ThemSinhVien;

function CapNhatDanhSachSV (DanhSachSinhVien)
{
    var lstTableSV = DomID("tbodySinhVien");
    //Mỗi lần hiển thị lại nó sẽ xóa hết dữ liệu cũ ik
    lstTableSV.innerHTML = "";
    for(var i = 0; i <  DanhSachSinhVien.DSSV.length ; i++ )
    {
        //Vì DSSV là mảng chứa danh sách sinh viên nên ta phải gọi vào
        //Lấy thông tin sinh viên từ trong mảng sinh viên
        var sv = danhSachSinhVien.DSSV[i];
        //Tạo thẻ tr
        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien";
        trSinhVien.setAttribute("onclick","ChinhSuaSinhVien('"+sv.MaSV+"')");
        //Lưu ý "+sv.MaSV+" phải có cặp nháy đơn không nó sẽ bị lỗi
        //Tạo các thẻ td và filter dữ liệu sinh viên thứ [i] vào
        var tdCheckBox = document.createElement('td');
        var ckbMaSinhVien = document.createElement('input');
        // console.log(ckbMaSinhVien);
        ckbMaSinhVien.setAttribute("class","ckbMaSV");
        ckbMaSinhVien.setAttribute("type","checkbox");
        ckbMaSinhVien.setAttribute("value",sv.MaSV);
        tdCheckBox.appendChild(ckbMaSinhVien);

        var tdMaSV = TaoTheTD("MaSV",sv.MaSV);
        var tdHoTen = TaoTheTD("HoTen",sv.HoTen);
        var tdCMND = TaoTheTD("CMND",sv.CMND);
        var tdEmail = TaoTheTD("Email",sv.Email);
        var tdSoDT = TaoTheTD("SoDT",sv.SoDT);

        //Tạo td  DTB và  xếp loại 
        var tdDTB = TaoTheTD("DTB",sv.DTB);
        var tdXepLoai = TaoTheTD ("XepLoai",sv.Loai);
        //Append các td vào tr
        trSinhVien.appendChild(tdCheckBox);
        trSinhVien.appendChild(tdMaSV);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdCMND);
        trSinhVien.appendChild(tdEmail);
        trSinhVien.appendChild(tdSoDT);
        trSinhVien.appendChild(tdDTB);
        trSinhVien.appendChild(tdXepLoai);

        //Append các tr vào tbodySinhVien
        lstTableSV.appendChild(trSinhVien);
    }

}

// Lưu vào LocalStorage
function SetStorage()
{
    //Chuyển đổi object mảng danh sách sinh viên thành chuỗi json
    var jsonDanhSachSinhVien = JSON.stringify(danhSachSinhVien.DSSV);
    //Rồi đem chuỗi json lưu vào storage và đặt tên là DanhSachSV
    localStorage.setItem("DanhSachSV",jsonDanhSachSinhVien);
}
window.SetStorage = SetStorage;

function GetStorage()
{
    //Lấy ra chuỗi json là mảng danhsachsinhvien thông qua tên DanhSachSV
    var jsonDanhSachSinhVien = localStorage.getItem("DanhSachSV");
    var mangDSSV = JSON.parse(jsonDanhSachSinhVien);
    //Gán giá trị vào mảng DSSV để hiển thị
    danhSachSinhVien.DSSV = mangDSSV;
    CapNhatDanhSachSV(danhSachSinhVien);

}
window.GetStorage = GetStorage;

//Xóa sinh viên
function XoaSinhVien()
{
    //Mảng checkbox
    var lstMaSV = document.getElementsByClassName("ckbMaSV");
    //Mảng mã sinh viên được chọn
    var lstMaSVDuocChon = [];
    for(i = 0 ; i<lstMaSV.length ;i++)
    {
        console.log(lstMaSV[i]);
        if(lstMaSV[i].checked) //Kiểm phần tử checkbox đó có được chọn hay chưa
        {
            lstMaSVDuocChon.push(lstMaSV[i].value);
        }
    }
    danhSachSinhVien.XoaSinhVien(lstMaSVDuocChon);
    CapNhatDanhSachSV(danhSachSinhVien);
}
window.XoaSinhVien = XoaSinhVien;

//Chỉ áp dụng với tiếng việt không dấu. Nếu ta tìm kiếm với tiếng việt có dấu sẽ không ra
function TimKiemSinhVien()
{
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSinhVienTimKiem = danhSachSinhVien.TimKiemSinhVien(tukhoa);
    CapNhatDanhSachSV(lstDanhSachSinhVienTimKiem);
}
window.TimKiemSinhVien = TimKiemSinhVien;

function ChinhSuaSinhVien(masv)
{
   
    var sinhvien = danhSachSinhVien.TimSVTheoMa(masv);
    if(sinhvien!=null)
    {
        DomID("masv").value = sinhvien.MaSV;
        DomID("hoten").value = sinhvien.HoTen;
        DomID("cmnd").value = sinhvien.CMND;
        DomID("email").value = sinhvien.Email;
        DomID("sdt").value = sinhvien.SoDT;
    }

}

function LuuThongTin()
{
    //Lấy dữ liệu từ người dùng nhập vào
    var masv = DomID("masv").value;
    var hoten = DomID("hoten").value;
    var cmnd = DomID("cmnd").value;
    var email = DomID("email").value;
    var sdt = DomID("sdt").value;
    var loi = 0;
    //Kiểm tra validation
    if(KiemTraDauVaoRong("masv",masv) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("hoten",hoten) == true)
    {
        loi++;
    }
    if(KiemTraDauVaoRong("cmnd",cmnd) == true)
    {
        loi++;
    }   
    if(validate.KiemTraEmail(email))
    {
        document.getElementById("email").style.borderColor = "green";
    }
    else
    {
        document.getElementById("email").style.borderColor = "red";
        loi++;
    }
    if(validate.KiemTraSoDT(sdt))
    {
        document.getElementById("sdt").style.borderColor = "green";
    }
    else
    {
        document.getElementById("sdt").style.borderColor = "red";
        loi++;
    }
    if(loi != 0)
    {
        return ;
    }
    //Thêm sinh viên
    var sinhvien = new SinhVien(masv,hoten,email,sdt,cmnd);
    // sinhvien.DiemHoa = DomID("Toan").value;
    // sinhvien.DiemLy = DomID("Ly").value;
    // sinhvien.DiemHoa = DomID("Hoa").value;
    // sinhvien.TinhDTB();
    // sinhvien.XepLoai();
    danhSachSinhVien.SuaSinhVien(sinhvien);
    CapNhatDanhSachSV(danhSachSinhVien);
}
window.LuuThongTin = LuuThongTin;

// Lý thuyết
// LocalStorage
// setItem(name,value): Dùng để lưu dữ liệu vào storage
// getItem(name): Dùng để lấy dữ liệu ra từ storage
// remove(name): Dùng để xóa dữ liệu trong storage
// Trong đó:
// name: là tên của 1 item localstorage
// value: là giá trị của item đó (giá trị trong javascript được hiểu theo là hiểu theo là kiểu chuỗi nó chỉ lưu được chuỗi)
// Phương thức chuyển đổi kiểu dữ liệu thông dụng trong Javascript
//Object Javascript                                                     JSON(Chuỗi dữ liệu có cấu trúc)
//{
//  MaSV: '01',                 JSON.stringify---------->               "{MaSV:'01',HoTen:'Khai',...,Key:Value}"
//  HoTen: 'Khai',              <----------JSON.parse               
//  ...
//  Key: Value
//}