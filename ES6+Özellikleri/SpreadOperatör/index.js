// Spread Operatör

const langs = ['Java','PHP']
console.log(...langs);

const lang2 = ['JavaScript', 'C++', ...langs]
console.log(lang2);

const numbers = [1,2,3,4,5,6,7,8,9];

const[a,b, ...number2] = numbers;

console.log(a,b);
console.log(number2);