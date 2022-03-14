const person = {
    name: 'Semih Beyzade',
    age:28,
    salary:4000
};

const langs = ['JavaScript', 'HTML', 'CSS']

const name = 'Semih'


// for In
// Object
for(let prop in person){
    console.log(prop, person[prop]);
}

// Array

for(let index in langs){
    console.log(index, langs[index]);
}

// String

for(let index in name){
    console.log(index, name[index]);


}

// For Of

// For of ile objeler üzerinde gezinemeyiz. Fakat Arraylerin degerleri üzerinde gezinebiliriz.

for(let value of langs){
    console.log(value);
}