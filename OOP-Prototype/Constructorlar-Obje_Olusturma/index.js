//console.log(window);
//console.log(this);

const emp1 = {
    name:'Mustafa',
    age:25,
    showInfos:function(){console.log('Bilgiler gösteriliyor');}
}

const emp2 = {
    name:'Ahmet',
    age:25
}

console.log(emp1);
emp1.salary = 5000;
console.log(emp1);

function Employee(name,age,salary){    // Yapici Fonksiyon - Constructor / function-name büyük yazilmalidir.
    this.name = name;  // this emp1'i gösteriyor
    this.age = age;
    this.salary = salary;
    //console.log(this); // Globalda olsaydi window objesini verecekti. Yapici fonksiyonun icinde ordaki objeleri gösteriyor.
    this.showInfos = function(){
        console.log(this.name , this.age);
    }
}

const emp1 = new Employee('Semih', 28, 5000);
const emp2 = new Employee('Ahmet', 25, 4000);
emp1.showInfos()
