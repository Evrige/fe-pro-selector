const selector = (obj, keys) => {
	let result = obj, temp;
	for (let i = 0; i < keys.length; i++) {
		temp = result[keys[i]];
		result = temp;
		if (result === undefined) return "";
	}
	return result;
};


module.exports = selector;
