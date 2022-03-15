function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function(){
    console.log('Isim :' + this.name + ' ' + 'Yas :' + this.age);
}

const emp1 = new Employee('Semih', 28)
console.log(emp1);
emp1.showInfos();