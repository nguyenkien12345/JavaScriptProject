const text = document.querySelector("#message");
const submit = document.querySelector("#submit");
const show = document.querySelector("#show");
const input_text = document.querySelector("#input_text");
const form = document.querySelector("#form");

function SubmitForm(e){
    e.preventDefault();
    if(text.value === ""){
        show.textContent = "Please Input A Value";
        show.style.display = "block";
        show.style.backgroundColor = "red";
        setTimeout(function(){
            show.style.display = "none";
        },3000)
    }
    else{
        input_text.textContent = text.value;
        input_text.style.textTransform = "uppercase";
        input_text.style.fontSize = "30px"
        input_text.style.color = "teal"
    }
}

form.addEventListener("submit", SubmitForm)

