const centerDiv = document.querySelector(".centerDiv");

const arrayUserList = [
    {img: "HUONG", quote: "This is Nguyen Huong Girl Beautiful", name: "HUONG"},
    {img: "KIEN", quote: "This is Nguyen Trung Kien Boy Handsome", name: "KIEN"},
    {img: "LIEN", quote: "This is Nguyen Hong Lien Girl Beautiful", name: "LIEN"},
    {img: "MY", quote: "This is Ngo Nguyen Phong My Girl Beautiful", name: "MY"},
    {img: "NGUYET", quote: "This is Le Tran Minh Nguyet Girl Beautiful", name: "NGUYET"},
    {img: "NHI", quote: "This is Hoang To Yen Nhi Girl Beautiful", name: "NHI"},
    {img: "PHUONG", quote: "This is Ngo Thao Phuong Girl Beautiful", name: "PHUONG"},
    {img: "TRAN", quote: "This is Vuong Huynh Que Tran Girl Beautiful", name: "TRAN"}
];

function User(img,quote,name){
    this.img = img;
    this.quote = quote;
    this.name = name;
}

let pos = 0;

function changeSlider(event){
    if(event.target.classList.contains("fa-caret-right")){
        pos++;
        if(pos > arrayUserList.length - 1){
            pos = 0;
        }

        // arrayUserList[pos] -> Lấy ra vị trí slide; arrayUserList[pos]['img'] -> Lấy ra ảnh của vị trí đó
        let img = arrayUserList[pos]['img'];
        let quote = arrayUserList[pos]['quote'];
        let name = arrayUserList[pos]['name'];
        
        let nextSlide = new User(img,quote,name);
        nextSlide.showInformation();

        const image = document.querySelector(".artist");
        image.animate([{transform: 'translateY(-100px)'},{transform: 'translateY(0)'}], {duration: 1000, fill: "forwards"})
    }
    else if(event.target.classList.contains("fa-caret-left")){
        pos--;
        if(pos < 0){
            pos = arrayUserList.length - 1;
        }

        let img = arrayUserList[pos]['img'];
        let quote = arrayUserList[pos]['quote'];
        let name = arrayUserList[pos]['name'];

        let prevSlide = new User(img, quote, name);
        prevSlide.showInformation();

        const image = document.querySelector(".artist");
        image.animate([{transform: 'translateY(-100px)'},{transform: 'translateY(0)'}], {duration: 1000, fill: "forwards"})
    }
}

User.prototype.showInformation = function(){
    centerDiv.innerHTML =   `
        <li class="person">
            <div class="artist"><img src="images/${this.img}.jpg" alt=""></div>
            <h1 class="nameArtist">${this.name}</h1>
            <div class="star"><img src="images/5star.png" alt=""></div>
            <div class="quote">${this.quote}</div>
            <div class="btn btn-left">
                <div class="fa fa-caret-left"></div>
            </div>
            <div class="btn btn-right">
                <div class="fa fa-caret-right"></div>
            </div>
        </li>
    `
}

centerDiv.addEventListener("click", changeSlider);