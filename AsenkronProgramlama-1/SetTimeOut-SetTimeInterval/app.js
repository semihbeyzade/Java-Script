// Set Timeout

setTimeout(() => {
    
  console.log("Naber");

}, 2000);

let i = 0;
let value = setInterval(() => {
    i++;
    console.log("saydir", i);
    
}, 1000);

document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
})


// Clear Interval
