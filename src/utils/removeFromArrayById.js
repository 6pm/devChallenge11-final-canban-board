
export default function removeFromArrayById(arr, id) {
	const index = arr.map((i) => i.id).indexOf(id)
	
	return [
		...arr.slice(0, index),
		...arr.slice(index + 1),
	]
}
