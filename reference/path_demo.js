const path = require('path');
console.log(__filename, __dirname);

const obj = path.parse(__filename);
console.log(obj);

console.log(path.join(__dirname, 'test', 'new.js'));
