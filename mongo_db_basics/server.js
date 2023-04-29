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

    // Create One Document
    // const doc = {
    //   name: 'Samuel Shew',
    //   email: 'Vashaw@gmail.com',
    //   age: 28,
    //   major: 'Aero Specialist',
    // };

    // Create Many Documents
    // const studentDocs = [
    //   {
    //     name: 'Linkko Seem',
    //     email: 'Linkko@gmail.com',
    //     age: 28,
    //     major: 'English',
    //   },
    //   {
    //     name: 'John Deo',
    //     email: 'JohnDoe@gmail.com',
    //     age: 23,
    //     major: 'Robotics',
    //   },
    //   {
    //     name: 'Jack Fisher',
    //     email: 'Jackfish@gmail.com',
    //     age: 20,
    //     major: 'Psyco therapist',
    //   },
    // ];

    // Send doc to mangodb
    const result = await studnents.insertOne({
      name: 'Samuel Shew',
      email: 'Vashaw@gmail.com',
      age: 28,
      major: 'Aero Specialist',
    });
    // const result = await studnents.insertMany(studentDocs);

    //  Find a new Documnet
    // const allStudents = await studnents.find().toArray();

    // Query
    // const allStudents = await studnents.findOne({ age: 20 });

    // Query
    const allStudents = await studnents.find({ age: 28 }).toArray();
    console.log(allStudents);
  } catch (err) {
    console.log(err);
  }
};

dbConnect();
