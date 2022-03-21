const person = {
    age:25,
    tellAge : function(){
        console.log(this);
        console.log(this.age);
    }.bind(this),

    sagAlter: () => {
        console.log(this);;
        console.log(this.age);
    }
}

person.tellAge();
person.sagAlter();