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

    // Create Db
    const db = client.db('school');

    // Create collection
    const studnents = db.collection('students');

    // Create Document
    const doc = {
      name: 'Vashaw Shew',
      email: 'Vashaw@gmail.com',
      age: 24,
      major: 'Mathematics',
    };

    // Send doc to mangodb
    const result = await studnents.insertOne(doc);

    console.log(result);
    console.log(studnents);
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
