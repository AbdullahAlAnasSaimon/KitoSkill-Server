const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
  res.send('kito skill data running');
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

app.get('/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCourse = courseDetails.find(course => course.id === id);
  res.send(selectedCourse);
})

app.listen(port, () => {
  console.log('Kito Skill Running on port: ', port);
})