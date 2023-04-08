const express = require('express');

app = express();

// set view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/about', (req, res) => {
  res.render('aboutUs.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/profile', (req, res) => {
  const user = {
    name: 'Mike',
    age: 20,
    city: 'Lagos',
  };
  res.render('profile', { user });
});

app.get('/posts', (req, res) => {
  const posts = [
    {
      title: 'Home of Rust',
      desc: 'Rusty Rusty Get the Job done',
      date: '10-20-2024',
    },
    {
      title: 'Gilad Giants',
      desc: 'Frosty Beans from jack stalks',
      date: '10-28-2024',
    },
    {
      title: 'Homeloon lonly',
      desc: 'Screem screem hear ye the lone in your lonly',
      date: '10-24-2024',
    },
  ];

  res.render('posts', { posts });
});

app.listen(9000, () => console.log('Server Connected'));
