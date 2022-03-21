document.getElementById("change").addEventListener("click", change);

function change(){

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "link")

  xhr.onload = function(){
      if(this.status){
          const response = JSON.parse(this.responseText)

          const rate = this.response.TRY
          const amount = Number(document.getElementById("amount").value);
          document.getElementById("tl").value = amount*rate
      }
  }


xhr.send();


}