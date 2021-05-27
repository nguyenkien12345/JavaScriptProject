const button_generate = document.querySelector(".btn.generate");

const quote_text = document.querySelector(".quote_text");

const img_quote = document.querySelector(".imgQuote");

const arrUser = {
    "NAME": ["KIEN","MY","LIEN","NHI","TRAN","PHUONG","NGUYET"],
    "KIEN": "Nguyễn Trung Kiên",
    "MY": "Ngô Nguyễn Phong My",
    "LIEN": "Nguyễn Hồng Liên",
    "NHI": "Hoàng Tô Yến Nhi",
    "TRAN": "Vương Huỳnh Quế Trân",
    "PHUONG": "Ngô Thảo Phương",
    "NGUYET": "Lê Trần Minh Nguyệt"
}

function randomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}

function changeQuete(){
    // arrUser['NAME'] => Lấy ra key NAME
    // [randomIndex(arrUser.NAME)] (cách khác: randomIndex(arrUser['NAME'])])=> Lấy ra index bất kì của key NAME
    // VD => vd array[1]
    const person = arrUser['NAME'][randomIndex(arrUser['NAME'])];
    img_quote.src = `images/${person}.jpg`
    quote_text.innerHTML = arrUser[person]
}

button_generate.addEventListener("click", changeQuete)