// Statik Metodlar

class Matematik{
    sqrt(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}

const math = new Matematik();
Matematik.cube(3)
math.sqrt(4)