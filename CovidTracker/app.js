getCovidWorld();
getCovidCountry();
getSelectWorld();


const btnSelect = document.getElementById("select_world");
btnSelect.addEventListener("click",getCountryById);

function getCountryById(e){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+e.target.value)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id = data.location.id;
        let code = data.location.country_code;
        let quocgia = data.location.country;
        let tinh = data.location.province;
        let danso = data.location.country_population;
        let capnhat = data.location.last_updated;
        let canhiem = data.location.latest.confirmed;
        let tuvong = data.location.latest.deaths;
        let hoiphuc = data.location.latest.recovered;

		if(data.location.province!=""){
			document.getElementById("quocgia").innerHTML = quocgia.toLocaleString('en') + '-' + tinh.toLocaleString('en');
			document.getElementById("title").innerText = quocgia.toLocaleString('en') + '-' + tinh.toLocaleString('en');
			document.getElementById("tinh").innerHTML = '-' + tinh.toLocaleString('en');
		}else{
			document.getElementById("quocgia").innerHTML = quocgia.toLocaleString('en');
			document.getElementById("title").innerText = quocgia.toLocaleString('en');
		}

        document.getElementById("idquocgia").innerHTML = id;
        document.getElementById("codequocgia").innerHTML = code.toLocaleString("en");
        document.getElementById("quocgia").innerHTML = quocgia.toLocaleString("en");
        document.getElementById("danso").innerHTML = danso;
        document.getElementById("binhiem").innerHTML = canhiem.toLocaleString("en");
        document.getElementById("tuvong").innerHTML = tuvong.toLocaleString("en");
        document.getElementById("hoiphuc").innerHTML = hoiphuc.toLocaleString("en");
        document.getElementById("capnhatgannhat").innerHTML = capnhat.substring(0,10);
        document.getElementById("percentTV").innerHTML = (Number(tuvong)/Number(canhiem)*100).toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}) + "%";
    }).catch(error => console.log('ERROR'));
}

function getCovidCountry(){
    // Đường dẫn thường trong mục API Reference 
    // https://coronavirus-tracker-api.herokuapp.com/v2/locations đường dẫn lấy dữ liệu tất cả các quốc gia
    // https://coronavirus-tracker-api.herokuapp.com/v2/locations/id đường dẫn lấy dữ liệu quốc gia được chỉ đinh
    // res => res.json() Trả về API kiểu json
    // console.log(data) Hiển thị data ra sẽ dễ dàng lấy key hơn. Khi vừa mở console thì ta thấy location đầu tiên trong location sẽ hiển thị toàn 
    // bộ dữ liệu của 1 quốc gia
    // toLocaleString("en") Hiển thị dữ liệu kiểu tiếng anh ví dụ: 66550 thì hiển thị là 66,550
    // let quocgia = data.location.country; Đầu tiên từ data truy cập vào location và lấy ra country là có được tên quốc gia
    // let canhiem = data.location.latest.confirmed; Đầu tiên từ data truy cập vào location rồi vào tiếp latest và lấy ra canhiem là có được canhiem
    // substring(0,10) bắt đầu từ vị trí 0 chỉ lấy ra 10 phần tử
    // minimumFractionDigits:2,maximumFractionDigits:2 lấy ra 2 số cuối sau đó làm tròn
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/266')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let id = data.location.id;
        let code = data.location.country_code;
        let quocgia = data.location.country;
        let tinh = data.location.province;
        let danso = data.location.country_population;
        let capnhat = data.location.last_updated;
        let canhiem = data.location.latest.confirmed;
        let tuvong = data.location.latest.deaths;
        let hoiphuc = data.location.latest.recovered;

		if(data.location.province!=""){
			document.getElementById("quocgia").innerHTML = quocgia.toLocaleString('en') + '-' + tinh.toLocaleString('en');
			document.getElementById("title").innerText = quocgia.toLocaleString('en') + '-' + tinh.toLocaleString('en');
			document.getElementById("tinh").innerHTML = '-' + tinh.toLocaleString('en');
		}else{
			document.getElementById("quocgia").innerHTML = quocgia.toLocaleString('en');
			document.getElementById("title").innerText = quocgia.toLocaleString('en');
		}

        document.getElementById("idquocgia").innerHTML = id;
        document.getElementById("codequocgia").innerHTML = code.toLocaleString("en");
        document.getElementById("quocgia").innerHTML = quocgia.toLocaleString("en");
        document.getElementById("danso").innerHTML = danso;
        document.getElementById("binhiem").innerHTML = canhiem.toLocaleString("en");
        document.getElementById("tuvong").innerHTML = tuvong.toLocaleString("en");
        document.getElementById("hoiphuc").innerHTML = hoiphuc.toLocaleString("en");
        document.getElementById("capnhatgannhat").innerHTML = capnhat.substring(0,10);
        document.getElementById("percentTV").innerHTML = (Number(tuvong)/Number(canhiem)*100).toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}) + "%";
    }).catch(error => console.log('ERROR'));
}

function getCovidWorld(){
    //biến covid sẽ lưu lại toàn bộ dữ liệu (đây là biến tự đặt tên)
    //Thay map bằng foreach cũng được
    //Trong javascript nối chuỗi bằng `` còn php là ''
    // join("") nếu không có thằng này thì nó sẽ thêm dấu , ngăn cách mỗi thằng nhìn xấu và bể giao diện
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //Lưu ý để ngoài vòng lặp vì chỉ hiển thị 1 lần
        let nguoi_nhiem = data.latest.confirmed;
        let nguoi_chet = data.latest.deaths;
        let nguoi_phuc_hoi = data.latest.recovered;
        document.getElementById("tong_ca_nhiem").innerHTML = nguoi_nhiem.toLocaleString("en");
        document.getElementById("tong_tu_vong").innerHTML = nguoi_chet.toLocaleString("en");
        document.getElementById("tong_phuc_hoi").innerHTML = nguoi_phuc_hoi.toLocaleString("en");

        const html = data.locations.map(covid => {
            const id = covid.id;
            const code = covid.country_code;
            const quocgia = covid.country;
            const tinh = covid.province;
            const danso = covid.country_population;
            const capnhat = covid.last_updated;
            const canhiem = covid.latest.confirmed;
            const tuvong = covid.latest.deaths;
            const hoiphuc = covid.latest.recovered;
            return `
            <ul class="list_world">
                <li>
                    <p>ID: ${id}</p>
                    <p>Code Quốc Gia: ${code.toLocaleString("en")}</p>
                    <p style="color:red;">Quốc Gia: ${quocgia.toLocaleString("en")}</p>
                    <p style="color:blue;">${tinh.toLocaleString("en")}</p>
                    <p>Dân Số: ${danso}</p>
                    <p>Cập Nhật: ${capnhat.substring(0,10)}</p>
                    <p>Ca Nhiễm: ${canhiem.toLocaleString("en")}</p>
                    <p>Tử Vong: ${tuvong.toLocaleString("en")}</p>
                    <p>Hồi Phục: ${hoiphuc.toLocaleString("en")}</p>
                    <p>Phần Trăm: ${(Number(tuvong)/Number(canhiem)*100).toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})}%</p>
                </li>
            </ul>
            `
        }).join("");
        document.getElementById('list').insertAdjacentHTML("afterbegin",html);
    }).catch(error => console.log('ERROR'));
}

function getSelectWorld(){
    // option.value = id; gán id vào cho option
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const html = data.locations.map(list => {
            const id = list.id;
            const quocgia = list.country;
            var option = document.createElement('option');
            option.value = id;
            if(list.province != "")
            {
                option.innerHTML = quocgia + '-' + list.province;
            }
            else
            {
                option.innerHTML = quocgia;
            }
            document.getElementById("select_world").appendChild(option);
        });

    }).catch(error => console.log('ERROR'));
}