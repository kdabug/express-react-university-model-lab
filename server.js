const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const { Student, Instructor } = require("./models");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

// TODO: write route handelers for:
// GET / (should just respond with a welcome message)
app.get("/", (req, res) => {
  res.send(`Welcome to students app.`);
});

// GET ALL INSTRUCTORS /instructors
app.get("/instructors", async (req, res) => {
  try {
    const instructors = await Instructor.findAll();
    res.json(instructors);
  } catch (e) {
    console.error(e);
  }
});
// GET ALL STUDENTS /instructors/{id}/students
app.get("/instructors/:id/students", async (req, res) => {
  try {
    const id = req.params.id;
    const instructor = await Instructor.findByPk(id);
    const students = await instructor.getStudents();
    const returnedStudents = students.map(student => student.dataValues);
    res.json(returnedStudents);
  } catch (e) {
    console.error(e);
  }
});
// POST TO STUDENT LIST /instructors/{id}/students
app.post("/instructors/:id/students", async (req, res) => {
  try {
    const student = await Student.create({
      name: req.body.name
    });
    const id = req.params.id;
    const instructor = await Instructor.findByPk(id);
    await student.setInstructor(instructor);
    res.json({ student });
  } catch (e) {
    console.error(e);
  }
});

// GET INDIVIDUAL STUDENT /instructors/{instructor_id}/students/{id}
app.get("/instructors/:instructor_id/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // const instructor_id = req.params.instructor_id;
    // const instructor = await Instructor.findByPk(instructor_id);
    const student = await Student.findByPk(id);
    res.json(student);
  } catch (e) {
    console.error(e);
  }
});
// DELETE INDIVIDUAL STUDENT /instructors/{instructor_id}/students/{id}
app.delete("/instructors/:instructor_id/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Student.destroy({
      where: {
        id: id
      }
    });
    res.json({
      message: `Student with id ${id} was destroyed!`
    });
  } catch (e) {
    console.error(e);
  }
});

// UPDATE INDIVIDUAL STUDENT /instructors/{instructor_id}/students/{id}
app.put("/instructors/:instructor_id/students/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await student.findByPk(id);
    const updatedStudent = await student.update(req.body);
    console.log("UPDATED Student: ", updatedStudent);
    res.json({
      updatedStudent
    });
  } catch (e) {
    console.error(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
