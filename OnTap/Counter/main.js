// IFFE
(function(){
    const counter = document.querySelector("#counter");
    const buttons = document.querySelectorAll(".counterBtn");

    let count = 0;

    // Chuyển buttons thành cái mảng sau đó duyệt qua từng phần tử trong mảng, mỗi cái btn trong mảng sẽ thực hiện 1 function
    Array.from(buttons).forEach(function(btn){
        btn.addEventListener("click", function(e){
            if(e.target.classList.contains("nextBtn"))
            {
                count++;
            }
            else if(e.target.classList.contains("prevBtn")){
                count--;
            }
            counter.textContent = count;
            
            if(count == 0){
                counter.style.color = "red";
            }
            else if(count < 0){
                counter.style.color = "yellow";
            }
        })
    })
})()