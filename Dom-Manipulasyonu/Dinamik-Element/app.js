// Yeni Element Olusturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taslaklari Temizleyin</a>

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farkli Sayfaya Git"));

cardbody.appendChild(newLink);

// TextContext Tehlikeli Text - Node daha güvenli









console.log(newLink);