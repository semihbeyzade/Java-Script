let value;

const programmer = {
    name : "Semih Beyzade",
    age : 25,
    email : "hello@gmail.com",
    langs : ["Python","Java","JavaScript"],

    address : {
        city : "Ankara",
        street : "Cankaya"
    },

    work : function(){
        console.log("Programci calisiyor...");
    }

};

value = programmer;

value = programmer.email;// Bu daha kolay
value = programmer["email"];

value = programmer.langs;

value = programmer.address.city;

// Function bu sekilde gösterilir:

programmer.work();

const programmers = [
    {name: "Semih Beyzade",age:25},
    {name: "Sevde Sultan",age:25}
];

value = programmers[0];

console.log(value);