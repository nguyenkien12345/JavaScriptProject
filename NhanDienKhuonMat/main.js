const video = document.querySelector("#videoElm");

const loadFaceAPI = async () => {
	await faceapi.nets.faceLandmark68Net.loadFromUri('./models');
	await faceapi.nets.faceRecognitionNet.loadFromUri('./models');
	await faceapi.nets.tinyFaceDetector.loadFromUri('./models');
	await faceapi.nets.faceExpressionNet.loadFromUri('./models'); // Cho chúng ta dự đoán về thông tin biểu cảm của khuôn mặt trên webcam
}

function getCameraStream(){
	// Truy cập camera
	if(navigator.mediaDevices.getUserMedia){
	    navigator.mediaDevices.getUserMedia({video:{}})
	    .then(stream => {
	        video.srcObject = stream;
	    })
	}
}

video.addEventListener('playing', () => {
	// Lấy ra hình ảnh từ video
	const canvas = faceapi.createCanvasFromMedia(video);
	// Thêm hình ảnh vô html
	document.body.append(canvas);
	const displaySize = {
		width: video.videoWidth,
		height: video.videoHeight
	}
	setInterval( async () => {
		const detects = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
			.withFaceLandmarks()
			.withFaceExpressions();
		console.log('detects',detects);
		// Sử dụng dữ liệu từ face api trả về để truyền vào thẻ canvas
		const resizeDetects = faceapi.resizeResults(detects,displaySize);
		canvas.getContext('2d').clearRect(0,0, displaySize.width, displaySize.height);
		faceapi.draw.drawDetections(canvas, resizeDetects);
		faceapi.draw.drawFaceLandmarks(canvas, resizeDetects);
		faceapi.draw.drawFaceExpressions(canvas, resizeDetects);
	}, 300)
});

loadFaceAPI().then(getCameraStream());
// Vì đây là 1 async function nên chúng ta phải có .then 