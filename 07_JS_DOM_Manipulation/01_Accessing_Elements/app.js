var mainDiv = document.getElementById('myDiv');
// console.log(mainDiv);

var myInput = document.getElementById('myInput');
// console.log(myInput);

var listItems = document.getElementsByClassName('item');
console.log(listItems[2]);
var buttons = document.getElementsByTagName('button');
console.log(buttons);
var headings5 = document.getElementsByTagName('h5');
console.log(headings5);

var secondListItem = document.querySelector(
	'body > #myDiv > ul > li:nth-child(2)'
);

console.log(secondListItem);

// var inputElement = document.querySelector('#myInput');
var inputElement = document.querySelector('[value="Hello World"]');
console.log(inputElement);
var $ = document.querySelector.bind(document);
var button = $('#myButton');
console.log(button);

var allItems = document.querySelectorAll('.item');
console.log(allItems);
