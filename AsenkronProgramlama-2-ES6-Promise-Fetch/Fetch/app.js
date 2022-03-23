/* function getTextFile(){ //* Text Dosyasi

    fetch('example.txt').then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err))

}
getTextFile(); */

/* function getJsonFile(){  //* Local bir Json Dosyasindan Veri Alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getJsonFile(); */

// https://api.exchangerate.host/latest

/* function getExternalAPI(){
    fetch('https://api.exchangerate.host/latest')
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err))
}

getExternalAPI() */





