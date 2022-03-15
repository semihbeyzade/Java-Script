// Kalitim - Inheritance

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log('Isim: ' + this.name + ' Yas: ' + this.age);
}

function Employee(name,age,salary){
    //this.name = name;
    //this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee('Semih', 28, 5000);
emp.showInfos();

