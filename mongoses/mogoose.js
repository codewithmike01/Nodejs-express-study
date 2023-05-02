const mongoose = require('mongoose');

//connect to mogoose

mongoose
  .connect(
    'mongodb+srv://kanumikechibundu:QOZc1s0sHWmAV7LO@mongodb-demo.roz9auo.mongodb.net/school?retryWrites=true&w=majority'
  )
  .then(() => console.log('Db Connnected!!'))
  .catch((err) => console.log(err.message));

// Create a Schema

const studentSchema = mongoose.Schema({
  name: String,
  city: String,
  course: Array,
  isMarried: Boolean,
  age: Number,
});

// Create a model (its a class use to create Document)
// to create collection

const Student = mongoose.model('Student', studentSchema);

// Student.create({
//   name: 'John Tiawo',
//   city: 'Lagos',
//   course: ['English', 'Computer Science'],
//   isMarried: false,
//   age: 29,
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

Student.find()
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
