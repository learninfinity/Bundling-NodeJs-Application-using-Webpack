const test = require('./test');
const app = require('./styles/app.scss');


console.log(test.addNum());
console.log(test.addNum(10, 10));
console.log(test.addNum(100, 25));

console.log(test.subNum());
console.log(test.subNum(10, 10));
console.log(test.subNum(100, 25));

// alert('Hi Users');


console.log('Webpack dev server log');
console.log('Bundling NodeJs Application using Webpack ');