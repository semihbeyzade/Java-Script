let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

// Child Nodes - Text Dahil

value = todoList.childNodes; // satirlari da sayiyor
value = todoList.childNodes[0];

// Children - Element

value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "semih";



value = cardrow;
value = cardrow.children[2].children[1].textContent = "sevde";


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

// Element Kardesleri

value = todo;
value = todo.previousElementSibling; // bir öncekine gider
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;
console.log(value);