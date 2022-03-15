// * Better Comments
// ?
// !
// TODO: 
//

// * Kalitim - Inheritance

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(`Hey ich bin ${this.name}`);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    showInfos(){ // ! Overriding
        console.log(`Hey ich bin ${this.age} Jahre alt.`);
    }
    raiseSalary(amount){ // ! Ekstra
        this.salary += amount;
    }
}

const emp = new Employee('Mustafa', 25, 4000)
//console.log(emp);


emp.raiseSalary(500);
emp.showInfos();
console.log(emp.salary);