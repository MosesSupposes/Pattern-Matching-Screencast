var conciseExample = {
	execute: function findIfExists(element, array) {
		var head = array[0],
			tail = array.slice(1);
		if (element === head) {
			return true;
		} else if (element !== head && !tail.length) {
			return false;
		} else {
			// If the first element doesn't match but the list is not not empty
			return findIfExists(element, tail);
		}
	},
};
console.log(conciseExample.execute(3001, [1, 2, 3, 4, 3001]));
console.log(conciseExample.execute(3001, [1, 2, 3, 4]));
