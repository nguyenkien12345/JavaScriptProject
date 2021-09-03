const images = document.querySelector(".images");
const prev   = document.querySelector(".prevBtn");
const next   = document.querySelector(".nextBtn");

let count = 0;

const arrImages = ["HUONG","KIEN","LIEN","MY","NGUYET","NHI","PHUONG","TRAN"];

next.addEventListener("click",nextImg)
function nextImg(){
    images.animate([{opacity:'0.5'},{opacity:'1'}], {duration:1000, fill:'forwards'})
    count++;
    if(count > arrImages.length - 1){
        count = 0;
    }
    images.style.background = `url('images/${arrImages[count]}.jpg')`
}

prev.addEventListener("click",prevImg)
function prevImg(){
    images.animate([{opacity:'0.5'},{opacity:'1'}], {duration:1000, fill:'backwards'})
    count--;
    if(count < 0){
        count = arrImages.length - 1;
    }
    images.style.background = `url('images/${arrImages[count]}.jpg')`
}