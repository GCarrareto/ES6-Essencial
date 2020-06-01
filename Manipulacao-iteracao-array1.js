// Criar um array

const arr = [1, 2, 3];
console.log(arr);

const arr2 = new Array(1, 2, 3);
console.log(arr2);

const arr3 = Array.of(1, 2, 3);
console.log(arr3);

const arr4 = Array(3);    // [empty x3]
console.log(arr4);

const arr5 = Array(3, 2); // [3, 2]
console.log(arr5);

//const divs = document.querySelectorAll('div'); // Não é array. É um node list.
//const arr6 = Array.from(divs);

const arr7 = ['banana', 'melancia', 'abacate'];
const arrLength = arr7.push('acerola');
console.log(arrLength);
console.log(arr7);

const arr8 = ['banana', 'melancia', 'abacate'];
const removedItem = arr8.pop();
console.log(removedItem);
console.log(arr8);

const arr9 = ['banana', 'melancia', 'abacate'];
const arrLength = arr9.unshift('acerola');
console.log(arrLength);
console.log(arr9);

const arr10 = ['banana', 'melancia', 'abacate'];
const removedItem = arr10.shift();
console.log(removedItem);
console.log(arr10);

const arr11 = [1, 2, 3];
const arr12 = [4, 5, 6];
const novoArr = arr11.concat(arr12);
console.log(arr11);
console.log(arr12);
console.log(novoArr);

const arr13 = [1, 2, 3, 4, 5];
console.log(arr13.slice(0, 2));
console.log(arr13.slice(2));
console.log(arr13.slice(-1));
console.log(arr13.slice(-3));

const arr14 = [1, 2, 3, 4, 5];
console.log(arr14.splice(2));
console.log(arr14.splice(0, 0, 'first')); // primeiro parâmetro indica o index, segundo parâmetro indica quantidade, terceiro indica o elemento a ser adicionado

const arr15 = [1, 2, 3, 4, 5];
arr15.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

const arr16 = [1, 2, 3, 4, 5];
console.log(arr16.map(value => value * 2));
/*
const arr17 = [1, 2, [3, 4]];
console.log(arr17.flat());
*/
/*
const arr18 = [1, 2, 3, 4];
console.log(arr18.flatMap(value => [value *2]));
console.log(arr18.flatMap(value => [[value *2]]));
*/

const arr19 = [1, 2, 3, 4];
const arrIterator = arr19.keys();
console.log(arrIterator.next());   //{ value: 0, done: false }
console.log(arrIterator.next());   //{ value: 1, done: false }
console.log(arrIterator.next());   //{ value: 2, done: false }
console.log(arrIterator.next());   //{ value: 3, done: false }
console.log(arrIterator.next());   //{ value: undefined, done: true }

const arr20 = [1, 2, 3, 4];
const arrIterator = arr20.entries();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

const arr21 = [1, 2, 3, 4];
const firstGreaterThanTwo = arr21.find(value => value > 2);
console.log(firstGreaterThanTwo);

const arr22 = [1, 2, 3, 4];
const firstIndexGreaterThanTwo = arr22.findIndex(value => value > 2);
console.log(firstIndexGreaterThanTwo);

const arr23 = [1, 2, 3, 4];
const allValuesGreaterThanTwo = arr23.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

const arr24 = [1, 3, 3, 4, 3];
const firstIndexOfItem = arr24.indexOf(3);
console.log(firstIndexOfItem);

const arr24 = [1, 3, 3, 4, 3];
const lastIndexOfItem = arr24.lastIndexOf(3);
console.log(lastIndexOfItem);

const arr25 = [1, 3, 3, 4, 3];
const hasItemOne = arr25.includes(1);
console.log(hasItemOne);
const hasItemOne2 = arr25.includes(2);
console.log(hasItemOne2);

const arr26 = [1, 3, 3, 4, 3];
const hasSomeEvenNumber = arr26.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

const arr27 = [1, 3, 3, 4, 3];
const allEvenNumbers = arr27.every(value => value % 2 === 0);
console.log(allEvenNumbers);

const arr28 = [1, 3, 2, 5, 4];
console.log(arr28.sort());

const arr29 = [1, 3, 2, 5, 4];
console.log(arr29.sort().reverse());

const arr30 = [1, 2, 3, 4, 5];
console.log(arr30.join(' - '));

const arr30 = [1, 2, 3, 4, 5];
console.log(arr30.reduce((total, value) => total += value, 0));





