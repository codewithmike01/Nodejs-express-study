const mongoose = require('mongoose');

// Embeded
// const postSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// Reference
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Model: Create link from schema to collection
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
