var arr = [12, 34, 516, 2, 1, 516, 8, 13, 5, 23, 516, 12, 516];

console.log(arr[0]);
console.log(arr[3]);

for (var i = 0; i <= 4; i++) {
	console.log(i);
}

for (var i = 0; i <= arr.length - 1; i++) {
	console.log('La indexul ' + i + ' se afla elementul ' + arr[i]);
}

console.table(arr);

var max = arr[0];
for (var i = 1; i <= arr.length - 1; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}
var arrOfIdxForMaxValue = [];
for (var i = 0; i <= arr.length - 1; i++) {
	if (max === arr[i]) {
		arrOfIdxForMaxValue.push(i);
	}
}
console.log(arrOfIdxForMaxValue);

console.log(max);
