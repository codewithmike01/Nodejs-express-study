const mongoose = require('mongoose');

//  Create Schema

// Embeded
// const userSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//     posts: Array,
//   },
//   {
//     timestamps: true,
//   }
// );

// Reference
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Colection to Schema

const User = mongoose.model('User', userSchema);

module.exports = User;
