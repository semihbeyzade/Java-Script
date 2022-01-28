// Karsilastirma Operatörleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2 === 2);
console.log("js" == "java");

console.log(2 == "2");
console.log(2 === "2");

console.log(4 > 2);
console.log(2 > 4);

console.log(2 != 4); // 2 esit degil midir 4 true

console.log(2 < 4);
console.log(4 < 2);

console.log(4 >= 2);

console.log(2 <= 3);

// Mantiksal Baglaclar:

// Not Operatörü

console.log(!(2 === 2)); // ! isareti not yapar

// And Operatörü

console.log((2 == 2) && ("Semih" == "Semih")); // Degerlerden biri falsh oldugunda sonuc falsh olur.

// Or Operatörü

console.log((4 == 2) || ("Semih" == "Semih")); // En az biri true ise sonuc true oluyor

const error = false;

if (error == true){
    console.log("Hata Olustu"); // Deger uyusmasaydi program calismazdi
}
else {
  console.log("Hata Olusmadi");
}

const user = "mmc";

if (user === "mmc"){
    console.log("Kullanici Bulundu");
}
else{
    console.log("Kullanici Bulunamadi...")  // If kosulu calismazsa devreye else girer.
}

const process = "1";

if (process === "1"){
    console.log("islem 1");
}
else if (process === "2"){
    console.log("islem 2");
}
else if (process === "3"){
    console.log("islem 3");
}
else if (process === "4"){
    console.log("islem 4");
}
else{
    console.log("gecersiz islem");
}

const number = 1001;

if (number === 100){
    console.log("sayi 100 'e esit");
}
else{
    console.log("sayi 100 'e esit degil.");
}

// Ternary Operatör

console.log(number === 100 ? "sayi 100" : "sayi 100 degil");

if (number === 100){
    console.log("sayi 100");
}

if (number === 100) console.log("sayi 100 bro");
else console.log("sayi 100 degil bro"); // Eger islemimiz bir tane ise tek siraya yazabiliriz..