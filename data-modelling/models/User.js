const mongoose = require('mongoose');

//  Create Schema

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
    posts: Array,
  },
  {
    timestamps: true,
  }
);

// Colection to Schema

const User = mongoose.model('User', userSchema);

module.exports = User;
