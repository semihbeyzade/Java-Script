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
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);

}
function deleteTodo(e){

if(e.target.className === "fa fa-remove"){
   e.target.parentElement.parentElement.remove();
   deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
   showAlert("success","Todo basariyla silindi...")
}


}
function deleteTodoFromStorage(deletetodo){
   let todos = getTodosFromStorage();

   todos.forEach(function(todo,index){
       if(todo === deletetodo){
           todos.splice(index,1); // Arraydan degeri silebiliriz. 
       }
   });

   localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}
function addTodo(e){
    const newTodo = todoInput.value.trim(); // trim basindaki ve sonundaki bosluklari siler.

    if(newTodo === ""){
      
       showAlert("danger","Lütfen bir todo girin...");
    }
    else{

        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo basariyla eklendi...")

    }

  



   e.preventDefault();
}

function getTodosFromStorage(){ // Storagedan Todolari Alma
    let todos;
if(localStorage.getItem("todos") === null){
    todos = [];
}
else{
    todos = JSON.parse(localStorage.getItem("todos"));
}
return todos;

}

function addTodoToStorage(newTodo){
  let todos = getTodosFromStorage();
todos.push(newTodo)
localStorage.setItem("todos", JSON.stringify(todos));

}

function showAlert(type,message){

 const alert = document.createElement("div");

 alert.className = `alert alert-${type}`;

 alert.textContent = message;

 firstCardBody.appendChild(alert);

 // setTimeout : 1sn sonra uyari kalkacak

 setTimeout(function(){
      alert.remove();

 },1000);


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