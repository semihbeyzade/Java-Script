let value;

const numbers = [43,56,33,23,44,35,5];

// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];


//Uzunluk
value = numbers.length;

// Indekslenme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length -1];

// Herhangi bir indeksteki degeri degistirme

numbers[2] = 1000;
value = numbers;

// Index Of

value = numbers.indexOf(1000);

// Arrayin sonuna Deger Ekleme - Push

numbers.push(2000);
value = numbers;

// Arrayin Basina Deger Ekleme

numbers.unshift(3000);

// Sonundan Deger Atma

numbers.pop()

// Basindan Deger Atma

numbers.shift()

// Birden Fazla Index Cikarma

numbers.splice(0,3);

// Reverse (tersten siralama):

numbers.reverse();

// Sort Ilk rakama göre siralar:

value = numbers.sort();


// kücükten büyüge siralama:

value = numbers.sort(function(x,y){
    return x-y;
});

// büyükten Kücüge siralama:

value = numbers.sort(function(x,y){
    return y-x;
});

console.log(value);