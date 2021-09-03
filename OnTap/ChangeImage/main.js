const img_quote = document.querySelector(".imgQuote");

const quote_text = document.querySelector(".quote_text");

const button_generate = document.querySelector(".btn.generate");

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
    const person = arrUser['NAME'][randomIndex(arrUser['NAME'])];
    img_quote.src = `images/${person}.jpg`
    quote_text.innerHTML = arrUser[person]
}

button_generate.addEventListener("click", changeQuete)