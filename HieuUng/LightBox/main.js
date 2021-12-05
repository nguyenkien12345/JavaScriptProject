const images = [...document.querySelectorAll(".content .content-image")]; // Chuyển thành array (mảng) [...]

const handleZoomImage = (event) => {
    console.log(event.target);
    const image_src = event.target.getAttribute("src");
    const image_alt = event.target.getAttribute("alt");
    const template = `
    <div class="lightbox">
        <div class="lightbox-content">
            <i class="fa fa-angle-left lightbox-previous"></i>
            <img
                src="${image_src}"
                alt="${image_alt}"
                class="lightbox-image"
            />
            <i class="fa fa-angle-right lightbox-next"></i>
        </div>
    </div> 
    `;
    document.body.insertAdjacentHTML("beforeend",template);    
}

images.forEach(item => item.addEventListener("click", handleZoomImage));

document.body.addEventListener("click", function(event){

    let index = 0;

    let image = document.querySelector(".lightbox-image");
    let imageSrc = "";
    let imageAlt = "";

    if(event.target.matches('.lightbox')){
        // remove lightbox out of dom
        event.target.parentNode.removeChild(event.target);
    }

    else if(event.target.matches('.lightbox-previous')){
        // Lấy ra src và alt của tấm hình được click
        imageSrc = image.getAttribute("src");
        imageAlt = image.getAttribute("alt");

        // So sánh src và alt của ảnh được click với ảnh trong mảng
        index = images.findIndex(item => (item.getAttribute("src") === imageSrc) && (item.getAttribute("alt") === imageAlt));

        // Lùi lại ảnh phía trước và cập nhật lại src vs alt
        index = index - 1;
        if(index < 0){
            index = images.length - 1;
        }
        let newImageSrc = images[index].getAttribute("src");
        let newImageAlt = images[index].getAttribute("alt");
        image.setAttribute("src", newImageSrc);
        image.setAttribute("alt", newImageAlt);
    }

    else if(event.target.matches('.lightbox-next')){
        // Lấy ra src và alt của tấm hình được click
        imageSrc = image.getAttribute("src");
        imageAlt = image.getAttribute("alt");

        // So sánh src và alt của ảnh được click với ảnh trong mảng
        index = images.findIndex(item => (item.getAttribute("src") === imageSrc) && (item.getAttribute("alt") === imageAlt));

        // Qua ảnh tiếp theo và cập nhật lại src vs alt
        index = index + 1;
        if(index > images.length - 1){
            index = 0;
        }
        let newImageSrc = images[index].getAttribute("src");
        let newImageAlt = images[index].getAttribute("alt");
        image.setAttribute("src", newImageSrc);
        image.setAttribute("alt", newImageAlt);
    }
})