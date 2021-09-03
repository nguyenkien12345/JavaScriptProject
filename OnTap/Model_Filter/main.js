const element_cakes = document.querySelectorAll(".element_cakes");          // Toàn bộ các thẻ div bọc ảnh, tên sản phẩm, giá sản phẩm
const name_items = document.querySelectorAll(".name_item");                 // Toàn bộ các thẻ tên sản phẩm
const prices = document.querySelectorAll(".price");                         // Toàn bộ các thẻ giá sản phẩm

const search_item = document.querySelector("#search-item");                 // Thanh tìm kiếm
const filter_buttons = document.querySelectorAll("#filter_button .btn");    // Các nút lọc sản phẩm

const show = document.querySelector("#showtext");                           // Hiển thị thông báo tìm thấy sản phẩm

const modal = document.querySelector("#modal");                             // Khi click vào ảnh hiển thị lên
const imgBox = document.querySelector(".lightbox");                         // Hiển thị ảnh

const cancel = document.querySelector(".fa-window-close");                  // Nút huỷ 
const next = document.querySelector(".fa-caret-right");                     // Nút kế tiếp
const prev = document.querySelector(".fa-caret-left");                      // Nút lùi lại

const arrImg = ['cake-1','cake-2','cake-3','cupcake-1','cupcake-2','cupcake-3','doughnut-1','doughnut-2','doughnut-3','sweets-1','sweets-2','sweets-3'];

// Chuyển filter_buttons thành cái mảng sau đó duyệt qua từng phần tử trong mảng, mỗi cái element đại diện 1 cái nút trong mảng sẽ thực hiện 1 function
Array.from(filter_buttons).forEach(function(element){
    element.addEventListener("click",function(event){
        for(i = 0; i < filter_buttons.length; i++){
            filter_buttons[i].classList.remove('active');
        }
        //this là element đang đươc bấm
        this.classList.add('active');

        // vì các element có thuộc tính data-filter
        let name_filter = element.dataset.filter;

        Array.from(element_cakes).forEach(function(ele){
            // vì các ele có thuộc tính data-item
            if(ele.dataset.item === name_filter || name_filter === 'all'){
                ele.style.display = 'block';
            }
            else{
                ele.style.display = 'none';
            }
        })
    })
})

function searchItem(){
    let searchValue = search_item.value.toLowerCase();
    Array.from(element_cakes).forEach(function(ele){
        // Trong class infor có 2 thằng con mà ta chỉ muốn lấy nội dung thằng con đầu tiên
        let nameItem = ele.querySelector('.infor').firstElementChild.textContent;
        if(nameItem.toLowerCase().indexOf(searchValue) !== -1){
            ele.style.display = 'block';
        }
        else{
            ele.style.display = 'none';
        }
    })
    checkEmpty(element_cakes);
}

function checkEmpty(element){
    let count = 0;
    for (i = 0; i < element.length; i++){
        if (element[i].style.display === 'block'){
            count++;
        }
    }
    if(count === 0){
        show.textContent = "Không tồn tại loại bánh này";
    }
    else{
        show.textContent = "";
    }
}

search_item.addEventListener('keyup',searchItem);

let pos = 0;

Array.from(element_cakes).forEach(function(element){
    element.addEventListener("click", function(event){
        // Vì thằng con đầu tiên của element_cakes là img
        let img = element.firstElementChild.src;
        // Tìm vị trí của images
        let imgPos = img.indexOf('images');
        // Tìm vị trí của .jpeg
        let jpegPos = img.indexOf('.jpeg');

        // console.log(img);     -> http://127.0.0.1:5500/OnTap/Model_Filter/images/cake-1.jpeg
        // console.log(imgPos);  -> KQ: 41 
        // console.log(jpegPos); -> KQ: 58

        // let images = img.slice(imgPos,jpegPos);
        // console.log(images)   -> KQ: images/cake-1

        let image = img.slice(imgPos+7) 
        // console.log(image)   -> KQ: cake-1.jpeg (Nó sẽ bắt đầu từ images/. +7 là bỏ qua cụm images/ lấy các kí tự cuối còn lại)

        modal.style.display = 'block';
        imgBox.style.backgroundImage = `url(images/${image})`;
        imgBox.style.backgroundSize = 'cover';

        for(i = 0; i < arrImg.length; i++){
            if(image === arrImg[i]){
                // Khi được click cập nhật lại vị trí pos
                pos = i;
            }
        }
    })
})

cancel.addEventListener('click', cancelModal);

function cancelModal(){
    modal.style.display = 'none';
}

next.addEventListener('click',nextSlide);

function nextSlide(){
    imgBox.animate([{opacity:'0.5'},{opacity:'1'}], {duration:1000, fill:'forwards'});
    pos++;
    if(pos > arrImg.length - 1){
        pos = 0;
    }
    imgBox.style.backgroundImage = `url(images/${arrImg[pos]}.jpeg)`;
}

prev.addEventListener('click',prevSlide);

function prevSlide(){
    imgBox.animate([{opacity:'0.5'},{opacity:'1'}], {duration:1000, fill:'backwards'});
    pos--;
    if(pos < 0){
        pos = arrImg.length - 1;
    }
    imgBox.style.backgroundImage = `url(images/${arrImg[pos]}.jpeg)`;
}
