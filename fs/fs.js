// const fs = require('fs');

// name of file, text on file, callback func

// fs.writeFile('index.html', 'Hello world', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written');
//   }
// });

// Using Async Await

// const fs = require('fs/promises');

// const createFile = async () => {
//   try {
//     await fs.writeFile('login.html', 'You are Logged In');
//     console.log('File created Successfully');
//   } catch (err) {
//     console.log(err);
//   }
// };

// createFile();

// Read file Sync
const fs = require('fs');

// const result = fs.readFileSync('login.html');
// console.log(result.toString());

// Read File Async

// fs.readFile('login.html', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// Rename a file

// fs.rename('login.html', 'signin.html', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('File Renamed Successfullly');
// });

// Copy content from file1 to File2
// fs.copyFile('signin.html', 'index.html', (err) => {
//   if (err) console.log(err);
//   console.log('Copied Successfully');
// });

// Append a File
// fs.appendFile('signin.html', 'This signin is Authenticated', (err) => {
//   if (err) console.log(err);
//   console.log(' Appended Successfully');
// });

//Trincate a File
// fs.truncate('signin.html', 7, (err) => {
//   if (err) console.log(err);
//   console.log('Content truncated');
// });

// Statistics of a File
// fs.stat('signin.html', (err, stats) => {
//   if (err) console.log(err);
//   console.log(stats);
// });

// Deletimg a File
// fs.unlink('index.html', (err) => {
//   if (err) console.log(err);
//   console.log('File deleted Successfully');
// });

//--------
// Working with Folder
//---------

// Creating a Folder
// fs.mkdir('src', (err) => {
//   if (err) console.log(err);
//   console.log('Folder created Successfully');
// });

// create file in Folder
// fs.writeFile('src/index.html', 'Hello world', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written');
//   }
// });

// Read Directory
// fs.readdir('src', (err, files) => {
//   if (err) console.log(err);
//   console.log(files);
// });

// Remove folder
// fs.rmdir('src/pages', (err) => {
//   if (err) console.log(err);
//   else console.log('Deleted Successfuly');
// });
