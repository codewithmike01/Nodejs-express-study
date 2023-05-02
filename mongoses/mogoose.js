const mongoose = require('mongoose');

//connect to mogoose
mongoose
  .connect(
    'mongodb+srv://kanumikechibundu:QOZc1s0sHWmAV7LO@mongodb-demo.roz9auo.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Db Connnected!!'))
  .catch((err) => console.log(err.message));
