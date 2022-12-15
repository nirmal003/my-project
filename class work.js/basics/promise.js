//   we will show the message to user this promise resolved or rejected

const myPromise = new Promise((resolve, reject) => {
  let condition = 10;

  if (condition < 0) {
    resolve(
      "Promise is resolved successfully and then() menthod will be called"
    );
  } else {
    reject("Promise is rejected and catch() medhod will be called");
  }
});

myPromise
  .then((message) => {
    console.log(message); //       display message if resolved
  })
  .catch((message) => {
    console.log(message); //       display message if rejected
  });

const promise = new Promise((res) => res(2));

console.log(promise);

promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return 0;
  })
  .then((v) => {
    console.log(v);
    return 1;
  })
  .then((v) => {
    console.log(v);
  });
