class Pet{
    constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  describe(){
    return `I am a ${this.type} named ${this.name}.`;
  } 
}

const Pet1 = new Pet("Ruby", "Cat");
const Pet2 = new Pet("Shadow", "Dog");

console.log((Pet1.describe()));
console.log((Pet2.describe()));