const person = {
	name: 'Costel',
	age: 30,
	city: 'Bucuresti',
};

console.log(person.name, person.age, person.city);

// const name = person.name;
// const age = person.age;
// const city = person.city;

const { age, name, city } = person;

console.log(name, age, city);

const productToHtmlCard = (product) => {
	const { name, price, imageURL } = product;

	return `
      <div class="card">
         <h2>${name}</h2>
         <img src=${imageURL} />
         <p>${price}</p> 
      </div>
   `;
};

const newPerson = { ...person, gender: 'M' };
console.log(newPerson);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...others] = numbers; // rest operator
const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 6];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);
