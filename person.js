class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

const person = {
  name: "Marco M",
  age: "142",
};

module.exports = Person;
