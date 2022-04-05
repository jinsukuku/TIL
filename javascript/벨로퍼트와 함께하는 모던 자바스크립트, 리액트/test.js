function makeSound(name) {
  const sounds = {
    'Dog': '멍멍',
    'Cat': '야옹',
    'Bear': '우워어',
    'Bird': '짹짹',
  }
  return sounds[name] || "I don't know" ;
}


console.log(makeSound("Dog"));
console.log(makeSound("Chair"));