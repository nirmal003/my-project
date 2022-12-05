//   we will show the message to user this promise resolved or rejected

const myPromise = new Promise((resolve, reject) => {
  let condition = 9;

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
