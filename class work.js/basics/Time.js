const currentTime = new Date().getTime();

const expireTime = new Date().getTime() + 300 * 1000;

console.log(expireTime > currentTime);
