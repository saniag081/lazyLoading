let loadImages = 0
let totalIamges = 0

function logImages() {
	console.log('=============================')
	console.log(`Total Images: ${totalIamges}`)
	console.log(`Imagenes cargadas: ${loadImages}`)
	console.log('=============================')
}

function isInterecting(entry) {
	return entry.isIntersecting
}

function loadImage(entry) {
	loadImages++
	const container = entry.target
	const elementImage = container.firstChild
	const url =  elementImage.dataset.src
	elementImage.src = url
	observer.unobserve(container)
	logImages()
}

const observer = new IntersectionObserver((entries) => {
	entries.filter(isInterecting).forEach(loadImage)
})

export function registerImage(image) {
	logImages()
	totalIamges++
	observer.observe(image)
}