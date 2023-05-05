const mongoose = require('mongoose');

// Connecting to server with mongoose
mongoose
  .connect(
    'mongodb+srv://kanumikechibundu:QOZc1s0sHWmAV7LO@mongodb-demo.roz9auo.mongodb.net/school?retryWrites=true&w=majority'
  )
  .then((res) => console.log('Connected to Server'))
  .catch((err) => console.log(err));
