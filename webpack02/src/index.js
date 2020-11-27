import TestPng from './test.png'

const image = new Image()
image.src = TestPng
const app = document.getElementById('app')
app.appendChild(image)
