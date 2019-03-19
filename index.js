// object constructor with passed values

// ES5 
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("Bras", "See sand")
console.log(terrier)

// ES6
class Cat {
  constructor(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
}

const normalCat = new Cat("Jim", "white")
console.log(normalCat)
