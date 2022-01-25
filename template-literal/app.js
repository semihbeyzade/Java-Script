const name = "Semih Beyzade Örscelik";
const department = "Bilisim";
const salary = 4000;


// const a = "isim: " + name + "\n" + "Departman: " + department + "\n" + "Maas: " + salary 

// const a = `isim:${name}\nDepartman:${department}\nMaas:${salary}`;

// const html = "<ul> " +
              "<li>" + name + "</li>" +
              "<li>" + department + "</li>" +
              "<li>" + salary + "</li>" + 
              "</ul>";


function a(){
    return "Merhaba";
}


const html = `
            <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${a()}</li>
            </ul>

`;



document.body.innerHTML = html;

// console.log(a);

