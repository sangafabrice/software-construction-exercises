/**
 * @param {number[]} [keys = []]
 * @returns {number} 
 */
function findMax(keys = []) {
    if (!Array.isArray(keys))
        throw new Error()
    let max = 0
    for (const key of keys)
        if (typeof key === "number" && max < key)
            max = key
    return max;
}