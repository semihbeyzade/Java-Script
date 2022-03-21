document.getElementById("btn").addEventListener("click", function(){
   
    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    // console.log(xhr);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

   /* xhr.onreadystatechange = function(){
        // console.log(this.readyState);
        // console.log(this.status);

        if(this.status == 200 && this.readyState == 4){
            
            // response hazir
            console.log(this.responseText);
        }
    } */

    xhr.open("GET","example.txt",true);

    xhr.send();
    

})