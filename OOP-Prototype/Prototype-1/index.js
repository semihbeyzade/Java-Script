function Employee(name, age){
    this.name = name;
    this.age = age;
}

const emp1 = new Employee('Semih', 28);
console.log(emp1);

console.log(emp1.toString()); // Normalte bu bizim parametrelerimizde yok fakat temel prototypemizde bu özellik var.