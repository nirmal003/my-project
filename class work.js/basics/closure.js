const add = (function () {
  var counter = 0;

  console.log(counter);

  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
