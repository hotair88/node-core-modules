const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if (err) throw err;
//   console.log('Folder created...');
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'jai shree ram',
//   (err) => {
//     if (err) throw err;
//     console.log('written to file');

//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       '\njai shree HANUMAN',
//       (err) => {
//         if (err) throw err;
//         console.log('file appended');
//       }
//     );
//   }
// );
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
