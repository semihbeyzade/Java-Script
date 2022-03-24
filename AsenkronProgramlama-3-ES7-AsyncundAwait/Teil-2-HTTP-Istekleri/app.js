class Request {
    async get(url){
        
        const response = await fetch(url); // Response Object
        const data = await response.json(); // JSON Object
        return data;

        
    }
    async post(url,data){
 

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }) // Response Object

     const responseData = await response.json();
     return responseData;
        
    }

   async put(url,data){
     

        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          }); // Response Object

          const responseData = await response.json();
          return responseData;
        
    }

  async  delete(url){
     
        const response = await fetch(url, {
            method: 'DELETE'
            })

        const data = await response.json();

        return  'Veri silme islemi basarili'
    }
}

const request = new Request()

/* request.get('https://jsonplaceholder.typicode.com/albums')
.then(albums => console.log(albums))
.catch(err => console.log(err)) */

/* request.post('https://jsonplaceholder.typicode.com/albums', {userId:1,title:'SEmih'})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err)) */



/*request.put('https://jsonplaceholder.typicode.com/albums/10', {userId:10,title:'Tarkan Karma'})
.then(album => console.log(album))
.catch(err => console.log(err))*/

request.delete('https://jsonplaceholder.typicode.com/albums/1')
.then(message => console.log(message))
.catch(err => console.log(err))