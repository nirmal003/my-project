//   this method will merge the two or more arrays and  can push the value into the array

const a = [1, 2, 3];

const b = [4, 5, 6];

const c = a.concat(b);

console.log(c);

//  merge 2more arrays

const d = [7, 8, 9];

const e = a.concat(b, d);

console.log(e);

console.log(a);

console.log(b);

console.log(d);

//     if you wantto push in these array can do

c.push(7); //                   in this case we are pushing the value in "c" only not for "a & b"

console.log(c);

e.push(10);

console.log(e);

const f = a.concat(); //          can use some array in diff variables

console.log(f);

a.push(4); // pushing only in "a"

console.log(a);

f.push(4); //                   in this case we are pushing  in "f" only not for "a"

console.log(f);

//   and we can push the value insude concat function

const h = [10, 11, 12];

const i = h.concat(13, 14, 15, d);

console.log(i);
