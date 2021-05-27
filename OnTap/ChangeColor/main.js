const background = document.querySelector(".background");

const button_change = document.querySelector(".btn.change");

const hex_text = document.querySelector(".hex_text");

const arrColor = ['red','yellow','blue','orange','green','black','gray','pink'];

const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}

function changeColorHex(){
    let hex = "#";
    for (i = 1; i <= 6; i++){
        hex += arrHex[randomIndex(arrHex)];
    }
    background.style.backgroundColor = hex;
    hex_text.textContent = hex;
}

function changeColor(){
    let random = arrColor[randomIndex(arrColor)];
    background.style.backgroundColor = random;
}

button_change.addEventListener("click", changeColorHex)