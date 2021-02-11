const app = document.querySelector('#app')


function createImageNode() {
	const container = document.createElement('div')
	container.className = 'p-4'
	const elementImage = document.createElement('img')
	elementImage.className = 'mx-auto'
	elementImage.width = '320'
	elementImage.src = 'https://randomfox.ca/images/2.jpg'

	container.appendChild(elementImage)
	return container
}

const newImage = createImageNode()
console.log(newImage)
app.appendChild(newImage)