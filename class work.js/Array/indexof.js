const str = [
  "nirmal",
  "mahesh",
  "pradeep",
  "amit",
  "sunil",
  "mahesh",
  "pradeep",
  "nirmal",
  "amit",
  "sunil",
];

const idx = str.indexOf("mahesh"); //          find the value of the position

console.log(idx);

const lasdtidx = str.lastIndexOf("mahesh"); //           find the value of the position from last

console.log(lasdtidx);

//          replace the string by using indexof

const rep = str.indexOf("pradeep"); //          find the value of the position

str[rep] = "naveen"; //                        replace the value in the only one position

console.log(rep);

console.log(str);

//           so do some fun

if (rep > -1) {
  console.log("yey, we have pradeep");
} else {
  console.log("we dont have pradeep");
}
