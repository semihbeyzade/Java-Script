// Fonksiyon Tanimlama

function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){
   // if(typeof name === "undefined") name = "Bilgi yok";
   // if(typeof age === "undefined") age = "Bilgi Yok";
  
   console.log(`Isim: ${name} Yas: ${age}`);
}

merhaba("Semih",27); // Fonksiyon cagrisi (Function Call)
merhaba("Ayse", 30); // birden fazla sekilde farkli degerlerde cagirabiliriz
merhaba();

function square(x) {
   // console.log(x*x);
   return x*x;
   console.log("Naber"); // Hic bir zaman calistirilmaz
}                                                        // return sayesinde degeri disarida da döndürebilirim.
function cube(x) {
  //  console.log(x*x*x);
  return x*x*x;
}

let a = square(12);
    
    a = cube(a);

    // let a = cube(square(12));

    console.log(a);

function merhaba (){
    return "Hello";
}

console.log(merhaba());

// Function Expression

const begrüß = function(name){
    console.log("Merhaba" + name);
};

begrüß("Semih");


// Immediately Invoked Function Expression (IIFE)

(function(name) {
    console.log("Merhaba" + " " + name);
})("Sevde");


const dataBAse = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(dataBAse.host);

dataBAse.add();
dataBAse.delete(10);
dataBAse.update("Google");