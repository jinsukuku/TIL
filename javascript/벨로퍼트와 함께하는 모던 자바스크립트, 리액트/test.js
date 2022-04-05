function test(n){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if(value == 5){
        const error = new Error();
        error.name = 'ValueIsFive';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

test(0)
  .then(test)
  .then(test)
  .then(test)
  .then(test)
  .then(test)
  .catch(e => console.error(e) );