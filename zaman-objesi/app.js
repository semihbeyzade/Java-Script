let value;

const now = new Date(); // su anki zamani almamizi saglar...

const date1 = new Date("4-9-1993 03:30:00");

const date2 = new Date("April 09 1993");

const date3 = new Date("9/04/1993");

value = date1;

value = date1.getMonth(); // sifirdan basliyor
value = date1.getDate(); // gunu söyler
value = date1.getDay(); // pazardan (0) baslar

value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

// set ile degistirme yapabiliyoruz:

date1.setMonth(5);
date1.setDate(10);
date1.setFullYear(1995);
date1.setHours(02);
date1.setMinutes(15);
date1.setSeconds(10);


value = date1;

console.log(value);