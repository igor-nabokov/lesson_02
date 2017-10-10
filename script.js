//Задача 1
(function () {
	var arr = [1, 2, 3, 4, 67, 78, 89, 908];
	function getNumber(x) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == x) {
				return arr[i];
			}
		}
	}
	console.log(getNumber(4));
	console.log(getNumber(10));
})();

//Задача2
(function () {
	var arr = [1, 2, 3, 4, 5, 6];
	function reverse() {
		var newArr = [];
		for (var i = arr.length - 1; i >= 0; i--) {
			newArr.push(arr[i]);
		}
		return newArr;
	}
	console.log(reverse());
})();


//Задача3
(function () {
	var arr = [1, 2, 3, "строка", 5, 6];
	function getString() {
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'string') {
				return arr[i];
			}
		}
	}
	console.log(getString());
})();

