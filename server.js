const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { Student } = require('./models');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
/**
 * TODO write route handelers for:
 * 0. Root Route: GET / (should just send a welcome message a JSON)
 * 1. Student Index: GET /students
 * 2. Student Create: POST /students
 * 3. Student Delete: DELETE /students
 */
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the University of Octonion API'
  });
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

app.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (student) await student.destroy(); // if there is no Student record with given id, student will be null and calling `student.destroy` will throw a type error
    res.json({ message: `Student with id ${req.params.id} deleted`});
  } catch (e) {
    res.status(500).json({
      message: e.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

