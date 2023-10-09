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

var arr1 = ['A', 'n', 'a', ' ', 'a', 'r', 'e', ' ', 'm', 'e', 'r', 'e', '.'];
console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);

var str = 'Ana are mere.';
console.log(str[0]);
console.log(str[str.length - 2]);

var words = str.split(' ');
console.log(words);

var dateArr = ['12', '02', '2023'];
var dateStr = dateArr.join('-');
console.log(dateStr);

var a = 'Ana';
var b = 'are';
var c = 'mere';
var concatStr = a + ' ' + b + ' ' + c + '.';
// var concatStr = a.concat(' ').concat(b).concat(' ').concat(c).concat('.');
console.log(concatStr);

var name = 'Costel';
var age = 35;

console.log('Ma numesc ' + name + ' si am ' + (age - 1) + ' ani.');
console.log(age + 1 + ' ani' + ' am implinit');
console.log(22 + 1);
console.log('22' + 1);
console.log(22 + 1 + '1' + 22 + 1);
console.log('Ma numesc Costel si am ' + 35 * 2);

console.log('Ana are mere'.indexOf('aree'));

var cnp = '1921212232434';
var cnpArr = cnp.split('');
console.log(cnpArr);
cnpArr[0] = '2';
cnp[0] = '2';
cnp = '2' + cnp.substring(1);
console.log(cnp);
console.log(cnpArr);

console.log(cnp.substring(1, 3));
console.log(cnp.slice(1, 3));

console.log('Ana are mere'.toLowerCase());
console.log('Ana are mere'.toUpperCase());

console.log('    Ana are mere    '.trim());
