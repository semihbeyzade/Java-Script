let value;

const firstName = "Louis";
const lastName = "Armstrong";

const langs = "Java,Python,C++";

value = firstName + lastName;
value = firstName + " " + lastName;

value = "Semih Beyzade";

//value = value + " " + "Örscelik";

value += "Örscelik";

value = firstName.length;
value = firstName.concat(" ",lastName," ","caz");

value = firstName.toLowerCase();
value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[4];

// string uzunlugu belli olmadiginda

value = firstName[firstName.length - 1];

// Index of

value = firstName.indexOf("L");
value = firstName.indexOf("o");
// Aradigimiz deger yoksa sonuc -1

value = firstName.indexOf("1");

// Char At

value = firstName.charAt(0);
value = firstName.charAt(firstName.length -1);

// Split

value = langs.split(",");

// Replace

value = langs.replace("Python","CSS");

// Includes

value = langs.includes("Java");
value = langs.includes("hello");





console.log(value);