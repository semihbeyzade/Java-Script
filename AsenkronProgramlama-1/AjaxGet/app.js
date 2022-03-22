// Ajax, callback, http request

class Request {
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // Get Request

    get(url,callback){
        this.xhr.open("GET", url); // Baglanti actik
        
        //const temp = this;

        this.xhr.onload = function(){
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText)
            }
            else{
                callback("Hata olustu", null)
            }
        }.bind(this) // request'teki this i gösterir. arrow function da güzel bir metod


        this.xhr.send();
    }
}

const request = new Request();
 request.get("https://jsonplaceholder.typicode.com/albums/51", function(err,response){
     if(err === null){
        console.log(response);
     }else{
         console.log(err);
     }
 })

