const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

image = new Image()
image.src = 'certificate.jpg'
image.onload = function () {
	drawImage()
}
function imgChange() {
	if(image.src.indexOf('certificate.jpg') > -1)
	image.src='alt.jpg';
	else
	image.src='certificate.jpg';
	image.onload = function(){
		drawImage()
  };

}
function drawImage() {
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '80px arial'
	if(image.src.indexOf('alt.jpg') > -1)
	ctx.fillText(nameInput.value, 850, 620)
	else
	ctx.fillText(nameInput.value, 800, 580)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})
