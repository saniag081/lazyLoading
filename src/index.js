const app = document.querySelector('#app')
const btnAddImage = document.querySelector('#addImage')
const maxImage = 122
const minImage = 1

function numberRandom () {
	return Math.floor(Math.random() * (minImage, maxImage) + minImage)
}

function createImageNode() {
	const container = document.createElement('div')
	container.className = 'p-4'
	const elementImage = document.createElement('img')
	elementImage.className = 'mx-auto'
	elementImage.width = '320'
	elementImage.src = `https://randomfox.ca/images/${numberRandom()}.jpg`

	container.appendChild(elementImage)
	return container
}

function addedImage () {
	const newImage = createImageNode()
	app.appendChild(newImage)
}


btnAddImage.addEventListener('click',addedImage)