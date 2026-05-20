/**
 * @param {number[]} keys
 * @returns {number}
 */
function findMax(keys) {
	let max = 0
	for(const key of keys)
		if(max < key)
			max = key
	return max
}