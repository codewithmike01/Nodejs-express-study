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

// Create Method
// Student.create({
//   name: 'John Tiawo',
//   city: 'Lagos',
//   course: ['English', 'Computer Science'],
//   isMarried: false,
//   age: 29,
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// Delete Record
// Student.deleteOne({ _id: '644d105a27993d9cc6e62fc2' })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

Student.findOneAndUpdate(
  { _id: '644d13731570fc619474699d' },
  {
    name: 'Baba Sunday',
  },
  { new: true } // Gives you the updated value as response
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
