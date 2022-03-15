class Employee{
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log(`Isim: ${this.name} Yas: ${this.age} Maas: ${this.salary}`);
    }
}

const emp = new Employee('Semih', 28, 5000);
console.log(emp);
emp.showInfos()