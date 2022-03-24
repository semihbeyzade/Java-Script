/* async function test(data){

     return new Promise
     return data;
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Bu bir degerdir')
        }, 5000);
    })

    let response = await promise;

    return response
}

test('Merhaba').then(response => console.log(response)) */

/* async function testData(data){

    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof data === 'string'){
                resolve(data)
            }
            else{
                reject(new Error('Lütfen string bir deger girin'))
            }
        }, 5000);
    })
       const response = await promise;
       return response;
}

testData('Hello Semih')
.then(data => console.log(data))
.catch(err => console.log(err))

testData(12)
.then(data => console.log(data))
.catch(err => console.log(err)) */

async function getCurrency(url){

    const response = await fetch(url); // Response Object

    const data = await response.json(); // Json object

    return data;
}

let a = getCurrency('https://api.exchangerate.host/latest')
.then(object => console.log(object))







