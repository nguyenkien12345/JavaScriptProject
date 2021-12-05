window.addEventListener('load',function(){
    const links = [...document.querySelectorAll('.menu-link')]; // Chuyển thành array (mảng) [...]

    const line = document.createElement('div');
    line.className = 'line-effect';
    document.body.appendChild(line);

    const handleHoverLink = (event) => {
        // console.log(event.target);
        const offsetBottom = 5;                                                     // Khoảng trắng so với Bottom
        const { left,top,width,height } = event.target.getBoundingClientRect();     // Lấy ra toạ độ của điểm được mouseenter
        console.log({ left,top,width,height } );
        line.style.left = `${left}px`;
        line.style.width = `${width}px`;
        line.style.top = `${top + height + offsetBottom}px`;
    }
    
    links.forEach(item => item.addEventListener('mouseenter',handleHoverLink));

    const menu = document.querySelector('.menu');
    menu.addEventListener('mouseleave',function(){
        line.style.width = 0;
    })
})