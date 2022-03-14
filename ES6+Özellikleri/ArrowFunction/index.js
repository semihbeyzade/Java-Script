const merhaba = function(){
    console.log('merhaba');
}

merhaba();

// Arrow Function

const merhaba = () => {
    console.log('merhaba');
}

merhaba()

const merhaba = firstName => console.log('Merhaba', firstName);
merhaba('Semih')

const cube = x => x*x*x;
console.log(cube(4));