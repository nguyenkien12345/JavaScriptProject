// function Course(name, price){
//     this.name = name;
//     this.price = price;
// }

class Course{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }
}

const php = new Course("PHP", 1000);
const js  = new Course("Javascript", 2000);

console.log(php);
console.log(js);