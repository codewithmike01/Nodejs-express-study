const { MongoClient } = require('mongodb');

// connection String
const url =
  'mongodb+srv://kanumikechibundu:QOZc1s0sHWmAV7LO@mongodb-demo.roz9auo.mongodb.net/?retryWrites=true&w=majority';

// Create new Client
const client = new MongoClient(url);

// Connect to mongoDB
const dbConnect = async () => {
  try {
    //connect to db
    await client.connect();
    console.log('Successful!!');
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
