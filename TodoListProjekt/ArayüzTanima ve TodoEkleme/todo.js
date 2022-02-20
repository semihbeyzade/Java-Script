// Tüm elementleri secme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listenerler
    form.addEventListener("submit",addTodo);

}
function addTodo(e){
    const newTodo = todoInput.value.trim(); // trim basindaki ve sonundaki bosluklari siler.

   addTodoToUI(newTodo);



   e.preventDefault();
}
function addTodoToUI(newTodo){ // String degerini list item olarak UI' ye ekler.
    /*

    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

    </li>
     

     */

// List Item Olusturma

const listItem = document.createElement("li");


// Link Olusturma

const link = document.createElement("a");
link.href = "#";
link.className = "delete-item";
link.innerHTML = "<i class = 'fa fa-remove'></i>"

listItem.className = "list-group-item d-flex justify-content-between"

// Text Node Ekleme

listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);

// Todo List'e List Item'i ekleme

todoList.appendChild(listItem);
todoInput.value = "";


}