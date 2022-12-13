const add = (function () {
  var counter = 0;

  console.log("hi", counter);

  return function () {
    counter += 1;
    return counter;
  };
})();

console.log("hello", add());
console.log("hello", add());
console.log("hello", add());
console.log("hello", add());

//  hoisting

// function test() {
//   var x = 2;
//   let z = 3;
//   if (1 == 1) {
//     console.log(x);
//     console.log(z);

//     var x = 9;
//     var y = 10;
//     let w = 5;
//   }
//   console.log(x);
//   console.log(y);
//   console.log(z);
//   console.log(w);
// }

// test();
