class Request {
    get(url){
        return new Promise((resolve,reject)=>{
           
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

        })
        
    }
    post(url,data){
      return new Promise((resolve,reject) => {
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
      })
        
    }
}

const request = new Request()
request.post('https://jsonplaceholder.typicode.com/albums',{userId:1,title:'Thriller'})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err))