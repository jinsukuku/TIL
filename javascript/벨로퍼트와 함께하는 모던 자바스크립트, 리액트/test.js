class Animal {
  constructor(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal{
  constructor(name, sound){
    super('Dog', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
dog.say();