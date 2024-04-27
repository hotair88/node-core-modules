const url = require('node:url');
const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// Serialized URL
console.log(myUrl.href, myUrl.host);

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams);
