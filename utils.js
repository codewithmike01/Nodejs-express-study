const fs = require('fs');

const defaultPosts = `[
  {
    "id": "212",
    "title": "Why we pray",
    "url": "https:someurl.com",
    "description": "The best path of Life"
  }
]`;

const createFolder = (folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
};

const createFile = (fileName) => {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, defaultPosts);
  }
};

module.exports = { createFolder, createFile, defaultPosts };
