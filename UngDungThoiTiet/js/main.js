const APP_ID = 'cb8b4de59a5f1eb403da5e70687ae330';
const DEFAULT_VALUE = '---';

const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("change", (e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
    .then(async res =>{
        const data = await res.json();
        console.log('[Search Input]',data);

        cityName.innerHTML = data.name || DEFAULT_VALUE;
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE; 
        sunset.innerHTML = moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
        humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
        windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
    });
})

// Trợ lý ảo

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

// Nhận diện giọng nói
const recognition = new SpeechRecognition();

// Nhận diện giọng nói bằng tiếng việt
recognition.lang = 'vi-VI';

// Dữ liệu từ web api sẽ được trả về ngay sau khi kết thúc giọng nói
recognition.continuous = false;

const microphone = document.querySelector('.microphone');

// Setup để google nói chuyện 
const synth = window.speechSynthesis;

const speak = (text) => {
    // Kiểm tra xem synth có đang nói hay ko
    if(synth.speaking){
        console.error('Busy. Speaking...');
        return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    
    utter.onend = () =>{
        console.log('SpeechSynthesisUtterance.onend');
    }

    utter.onerror = (err) =>{
        console.error('SpeechSynthesisUtterance.onerror',error);
    }

    synth.speak(utter);
}

// Xử lý phần âm thanh
const handleVoice = (text) => {
    console.log(text);
    // Thời tiết tại Đà Nẵng => ["Thời tiết tại","Đà Nẵng"]
    const handledText = text.toLowerCase();
    if(handledText.includes("thời tiết tại")){
        const location = handledText.split('tại')[1].trim(); // Ngăn cách bởi chữ tại và lấy ra phần tử 1 (có 2 phần tử là 0 và 1)
        searchInput.value = location;
        // Tạo sự kiện change
        const changeEvent = new Event('change');
        searchInput.dispatchEvent(changeEvent);
        return;
    }

    // Thay đổi màu nền Black => ["Thay đổi màu nền","Black"]
    if(handledText.includes("thay đổi màu nền")){
        const color = handledText.split('màu nền')[1].trim(); // Ngăn cách bởi chữ màu nền và lấy ra phần tử 1 (có 2 phần tử là 0 và 1)
        const container = document.querySelector(".container");
        container.style.background = color;
        return;
    }

    // Trả về màu nền mặc định
    if(handledText.includes("màu nền mặc định")){
        const container = document.querySelector(".container");
        container.style.background = '';
        return;
    }

    // Trả về thời gian
    if(handledText.includes("mấy giờ")){
        const textToSpeech = `${moment().hours()} hours ${moment().minutes()} minutes`;
        speak(textToSpeech);
        return
    }

    speak("Try Again");
}

microphone.addEventListener('click',(e)=>{
    e.preventDefault();
    // Mở microphone
    recognition.start();
    microphone.classList.add("recording");
})

// Tắt microphone
recognition.onspeechend = () => {
    recognition.stop();
    microphone.classList.remove("recording");
}

// Khi có lỗi xảy ra
recognition.onerror = (err) => {
    console.error(err);
    microphone.classList.remove("recording");
}

// Khi có kết quả trả về từ web api
recognition.onresult = (e) => {
    console.log('OnResult: ', e);
    const text = e.results[0][0].transcript; 
    // Vì results là 1 array với 1 element lấy ra element duy nhất là 0 và trong element này chúng ta lại có 1 array với 1 element duy nhất có index là 0
    handleVoice(text);
}