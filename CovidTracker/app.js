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
    // ???????ng d???n th?????ng trong m???c API Reference 
    // https://coronavirus-tracker-api.herokuapp.com/v2/locations ???????ng d???n l???y d??? li???u t???t c??? c??c qu???c gia
    // https://coronavirus-tracker-api.herokuapp.com/v2/locations/id ???????ng d???n l???y d??? li???u qu???c gia ???????c ch??? ??inh
    // res => res.json() Tr??? v??? API ki???u json
    // console.log(data) Hi???n th??? data ra s??? d??? d??ng l???y key h??n. Khi v???a m??? console th?? ta th???y location ?????u ti??n trong location s??? hi???n th??? to??n 
    // b??? d??? li???u c???a 1 qu???c gia
    // toLocaleString("en") Hi???n th??? d??? li???u ki???u ti???ng anh v?? d???: 66550 th?? hi???n th??? l?? 66,550
    // let quocgia = data.location.country; ?????u ti??n t??? data truy c???p v??o location v?? l???y ra country l?? c?? ???????c t??n qu???c gia
    // let canhiem = data.location.latest.confirmed; ?????u ti??n t??? data truy c???p v??o location r???i v??o ti???p latest v?? l???y ra canhiem l?? c?? ???????c canhiem
    // substring(0,10) b???t ?????u t??? v??? tr?? 0 ch??? l???y ra 10 ph???n t???
    // minimumFractionDigits:2,maximumFractionDigits:2 l???y ra 2 s??? cu???i sau ???? l??m tr??n
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
    //bi???n covid s??? l??u l???i to??n b??? d??? li???u (????y l?? bi???n t??? ?????t t??n)
    //Thay map b???ng foreach c??ng ???????c
    //Trong javascript n???i chu???i b???ng `` c??n php l?? ''
    // join("") n???u kh??ng c?? th???ng n??y th?? n?? s??? th??m d???u , ng??n c??ch m???i th???ng nh??n x???u v?? b??? giao di???n
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //L??u ?? ????? ngo??i v??ng l???p v?? ch??? hi???n th??? 1 l???n
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
                    <p>Code Qu???c Gia: ${code.toLocaleString("en")}</p>
                    <p style="color:red;">Qu???c Gia: ${quocgia.toLocaleString("en")}</p>
                    <p style="color:blue;">${tinh.toLocaleString("en")}</p>
                    <p>D??n S???: ${danso}</p>
                    <p>C???p Nh???t: ${capnhat.substring(0,10)}</p>
                    <p>Ca Nhi???m: ${canhiem.toLocaleString("en")}</p>
                    <p>T??? Vong: ${tuvong.toLocaleString("en")}</p>
                    <p>H???i Ph???c: ${hoiphuc.toLocaleString("en")}</p>
                    <p>Ph???n Tr??m: ${(Number(tuvong)/Number(canhiem)*100).toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})}%</p>
                </li>
            </ul>
            `
        }).join("");
        document.getElementById('list').insertAdjacentHTML("afterbegin",html);
    }).catch(error => console.log('ERROR'));
}

function getSelectWorld(){
    // option.value = id; g??n id v??o cho option
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