function DanhSachSinhVien ()
{
    //Khai báo mảng chứa danh sách các sinh viên
    this.DSSV = [];

    //Để khai báo 1 phương thức trong Prototype ta sẽ dùng function để biểu diễn
    this.ThemSinhVien = function (svThem)
    {
        this.DSSV.push(svThem);
    }


    //Lý thuyết Xóa dssv 
    // vòng ngoài [01,03]
    // vòng trong danhSachSinhVien.DSSV[
    //     {MaSV:01,HoTen:...} X
    //     {MaSV:02,HoTen:...}
    //     {MaSV:03,HoTen:...} X
    // ]
    // Lúc này nó sẽ tìm kiếm và xóa ik 01 và 03
    this.XoaSinhVien = function (lstSVXoa)
    {
        for(var i=0;i< lstSVXoa.length ;i++)
        {
            // this được thay thế bằng đối tượng gọi ở đây là danhSachSinhVien
            for(var j=0; j < this.DSSV.length ; j++ )
            {
                //Lấy ra đối tượng sinh viên
                var sinhvien = this.DSSV[j];
                if(lstSVXoa[i] == sinhvien.MaSV)
                {
                    //Xóa ở vị trí j và xóa 1 phần tử
                    this.DSSV.splice(j,1);
                }
            }
        }
    }

    this.SuaSinhVien = function (svCapNhat)
    {
        for(var i=0;i<this.DSSV.length;i++)
        {
            var svUpdate = this.DSSV[i];
            if(svCapNhat.MaSV == svUpdate.MaSV)
            {
                svUpdate.HoTen = svCapNhat.HoTen;
                svUpdate.Email = svCapNhat.Email;
                svUpdate.CMND = svCapNhat.CMND;
                svUpdate.SoDT = svCapNhat.SoDT;
            }
        }
    }

    this.TimKiemSinhVien = function (tukhoa)
    {
        //List kết quả tìm kiếm : DanhSachSinhVien
        var lstKetQuaTimKiem = new DanhSachSinhVien();
        //Duyệt qua độ dài của mảng
        for(var i=0 ; i< this.DSSV.length ; i++)
        {
            //Lấy sinh viên thứ i
            var sinhvien = this.DSSV[i];
            if(sinhvien.HoTen.toLowerCase().trim().search(tukhoa.toLowerCase().trim()) != -1)
            //Nếu nó khác -1 là tìm được
            {
                lstKetQuaTimKiem.ThemSinhVien(sinhvien);
            }
        }
        return lstKetQuaTimKiem;
    }

    this.TimSVTheoMa = function(masv)
    {
        for(var i=0;i<this.DSSV.length;i++)
        {
            var sv = this.DSSV[i];
           
            if(sv.MaSV === masv)
            {
                return sv;
            }
        }
        return null;
    }
}