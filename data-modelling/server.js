require('./utils/dbConnect'); // Connect to DB
const express = require('express');
const postRouter = require('./routes/postRoute');
const userRouter = require('./routes/userRoute');

// App connection
const app = express();

// Middleware
app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

// Get environment Post
const PORT = process.env.PORT || 3000;

// Listen to post
app.listen(PORT, () => console.log(`Server is runnign on post ${PORT}`));
