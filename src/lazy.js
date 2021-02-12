function isInterecting(entry) {
	return entry.isIntersecting
}

function accion(entry) {
	const nodo = entry.target
	console.log('even')
	observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
	entries.filter(isInterecting).forEach(accion)
})

export function registerImage(image) {
	observer.observe(image)
}