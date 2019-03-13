const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { Student, Instructor } = require('./models');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

// TODO: write route handelers for:
// GET / (should just respond with a welcome message)
// GET /instructors/{id}/students 
// POST /instructors/{id}/students
// GET /instructors/{instructor_id}/students/{id}
// DELETE /instructors/{instructor_id}/students/{id}


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
