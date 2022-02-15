const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event

// title.addEventListener("click",run);
//  title.addEventListener("dblclick",run);

// Mouse Down
//title.addEventListener("mousedown",run);
// Mouse Up
//title.addEventListener("mouseup",run);
// Mouse Over
//title.addEventListener("mouseover",run);
// Mouse Out
//title.addEventListener("mouseout",run);

//cardBody.addEventListener("mouseover",run); (her elementte ayri ayri yazdirir)
//cardBody.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave (girince ve cikinca bir kere yazdirir)

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
}