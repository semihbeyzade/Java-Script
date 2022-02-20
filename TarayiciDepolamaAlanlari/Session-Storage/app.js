// Session Storage - Key ve Value

// Butonlari Secmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
delete.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear();
}