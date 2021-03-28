var basicExample = {
	execute: function findIfExists(element, array) {
		if (element === array[0]) {
			return true;
		} else if (element !== array[0] && !array.length) {
			return false;
		} else {
			var tail = array.slice(1);
			return findIfExists(element, tail);
		}
	},
};
console.log(basicExample.execute(3001, [1, 2, 3, 4, 3001]));
console.log(basicExample.execute(3001, [1, 2, 3, 4]));
