function startComponent(parentClass){

    var parentElement = document.querySelector(parentClass);

    var overlay = parentElement.querySelector('.overlay');

    var width,height,button,click = 0;

    // offsetHeight, offsetWidth cho biết chiều cao thực sự không cộng thêm các yếu tố như padding, margin hay border.
    width = overlay.offsetWidth;                           // Độ rộng của overlay: 500
    height = overlay.offsetHeight;                         // Độ cao của overlay: 300

    // Tạo thẻ div với class add
    button = document.createElement('div');
    button.classList.add('button');
    overlay.parentElement.insertBefore(button,overlay);    // overlay.parentElement: Lấy ra div.container

    overlay.style.width = 0 + 'px';

    // Canh giữa button
    button.style.top = (height/2) + 'px';
    button.style.left = overlay.offsetWidth + 'px';
    button.style.transform = 'translate(-50%,-50%)';

    // Khi click/thả chuột trên element
    button.addEventListener('mousedown',ready);
    window.addEventListener('mouseup',finish);

    function ready(e){
        e.preventDefault();
        click = 1;
        // Khi con trỏ chuột di chuyển trên element.
        window.addEventListener('mousemove',slideMove);
    }

    function finish(){
        click = 0;
    }

    function slideMove(e){
        if(click == 0 ) {
            return false;
        }
        vitri = getButtonpos(e);
        if(vitri<0){
            vitri = 0;
        }
        if(vitri>width){
            vitri = width;
        }
        slide(vitri);
    }

    function getButtonpos(e){
        var a,x = 0;
        e = e || window.event;
        a = overlay.getBoundingClientRect();
        // getBoundingClientRect là một phương thức cung cấp tọa độ bù trên cùng, phải, dưới và trái của một phần tử.
        x = e.pageX - a.left;
        return x
    }

    function slide(x){
        overlay.style.width = x + 'px';                             // Set lại width cho overlay
        button.style.left = overlay.offsetWidth + 'px';             // Set lại vị trí cho button
    }

}

startComponent('.container');
