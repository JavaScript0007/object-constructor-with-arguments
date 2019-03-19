// object constructor with passed values

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("Bras", "See sand")

console.log(terrier)
