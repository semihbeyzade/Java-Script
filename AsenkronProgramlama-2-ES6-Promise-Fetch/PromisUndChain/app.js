 /*function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(typeof data === 'string'){
                //Olumlu
                resolve(data)
            }
            else{
                // Olumsuz
                reject(new Error('Lütfen bir string giriniz'))
            }
        }, 5000);
    })
}



getData(24)
.then(response => console.log('Gelen Deger' + ' ' + response))
.catch(err => console.error(err))
*/

function addTwo (number){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof number === 'number'){
                resolve(number+2)
            }
            else{
                reject(new Error('Lütfen bir sayi girin'))
            }
            
        }, 3000);
    })
}

addTwo(10)
.then(response => {
    console.log(response);
    return response+2
}).then(response2 => console.log(response2))
.catch(err => console.log(err))

// 1 tane catch - birden cok then - Promise Chain