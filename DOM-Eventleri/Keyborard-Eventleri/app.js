// Klavye Eventleri

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){

    header.textContent = e.target.value
}








// keypress (sadece sayi ve rakamlar)
//document.addEventListener("keypress",run);

//function run(e){
   //  console.log(e.which); her sayi bir harfe karsilik geliyor ascii tabelle
  // console.log(e.key);
//}

// keydown (Tüm tuslar yukari ok dahil calisti)

//document.addEventListener("keydown",run);

//function run(e){
  //  console.log(e.which);
    //console.log(e.key);
//}

// keyup (tusa basmayi biraktigimizda karakterler cikiyor)

//document.addEventListener("keyup",run);

//function run(e){
   
    //console.log(e.which);
  //  console.log(e.key);


//}