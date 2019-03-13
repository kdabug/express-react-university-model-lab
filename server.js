const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { Student, Instructor } = require('./models');
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
    message: 'Welcome to the University of Bananas API'
  });
});

app.get('/instructors', async (req, res) => {
  try {
    const instructors = await Instructor.findAll();
    res.json(instructors);
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
})

app.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
})

app.post('/instructors', async (req, res) => {
  try {
    const instructor = await Instructor.create({
      ...req.body
    })
    res.json({instructor})
  } catch(e) {
    console.error(e);
  }
})

app.get('/instructors/:id', async (req, res) => {
  try {
    const id = req.params.id
    const instructor = await Instructor.findByPk(id);
    res.json(instructor);
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
})

app.put('/instructors/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updateInstructor = await Instructor.findByPk(id);
    await updateInstructor.update(req.body);
    res.json({
      updateInstructor
    })
  } catch(e) {
    console.error(e);
    res.json({
      message: e.message
    })
  };
});

app.get('/instructors/:id/students', async (req, res) => {
  try {
    const id = req.params.id
    const instructor = await Instructor.findByPk(id)
    const students = await instructor.getStudents()
    res.json(students);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

app.post('/instructors/:id/students', async (req, res) => {
  try {
    const id = req.params.id
    const instructor = await Instructor.findByPk(id)
    const student = await Student.create(req.body);
    await instructor.setStudents(student)
    res.json(student);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

app.get('/instructors/:instructor_id/students/:id', async (req, res) => {
  try {
    const instructor_id = req.params.instructor_id
    const instructor = await Instructor.findByPk(instructor_id)
    const id = req.params.id
    const student = await Student.findOne({
      where: {
        instructor_id: instructor_id,
        id: id
      }
    });
    res.json(student);
  } catch(e){
    console.error(e);
    res.status(500).json({ message: e.message});
  }
})

app.put('/instructors/:instructor_id/students/:id', async (req, res) => {
  try {
    const instructor_id = req.params.instructor_id
    const instructor = await Instructor.findByPk(instructor_id)
    const id = req.params.id
    const updateStudent = await Student.findOne({
      where: {
        instructor_id: instructor_id,
        id: id
      }
    });
    await updateStudent.update(req.body);
    res.json({
      updateStudent
    })
  } catch(e) {
    console.error(e);
    res.json({
      message: e.message
    })
  };
});

app.delete('/instructors/:instructor_id/students/:id', async (req, res) => {
  try {
    const instructor_id = req.params.instructor_id
    const instructor = await Instructor.findByPk(instructor_id)
    const id = req.params.id
    const student = await Student.findOne({
      where: {
        instructor_id: instructor_id,
        id: id
      }
    });
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
