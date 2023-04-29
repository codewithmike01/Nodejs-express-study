// Get mongo client
const { MongoClient } = require('mongodb');

// connection String to MangoDb
const url =
  'mongodb+srv://kanumikechibundu:QOZc1s0sHWmAV7LO@mongodb-demo.roz9auo.mongodb.net/?retryWrites=true&w=majority';

// Create new Client
const client = new MongoClient(url);

// Connect to mongoDB
const dbConnect = async () => {
  try {
    //connect to db
    await client.connect();
    console.log('DB connected Successful!!');
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
