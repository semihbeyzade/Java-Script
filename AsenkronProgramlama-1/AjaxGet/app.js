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
    post(url,data,callback){
         this.xhr.open("POST",url);
         this.xhr.setRequestHeader("Content-type", "application/json"); // JSON Verisi

         this.xhr.onload = () => {
             if(this.xhr.status === 201){
                 callback(null,this.xhr.responseText);
             }
             else{
                 callback("Hata olustu", null);
             }
         }

         this.xhr.send(JSON.stringify(data));

    }
}

 const request = new Request();
 /*request.get("https://jsonplaceholder.typicode.com/albums/51", function(err,response){
     if(err === null){
        console.log(response);
     }else{
         console.log(err);
     }
 }) */


request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
    if(err === null){
        console.log(album);
    }
    else{
        console.log(err);
    }
})