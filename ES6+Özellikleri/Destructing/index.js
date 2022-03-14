// Destructing

let arr = [100,200,300,400]
let [num1,num2] = arr;
console.log(num1,num2);

// Obje Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const{a:number1,b:number2,e:number3} = numbers;

console.log(number1,number2,number3);

const getLangs = () => ['Python', 'Java', 'C++'];

const[lang1,lang2,lang3] = getLangs()
console.log(lang1,lang2,lang3);