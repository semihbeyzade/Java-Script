const cities = new Map()
cities.set('Ankara', 10);
cities.set('Izmir', 5)

cities.forEach(function(value,key){
    console.log(key,value);
})