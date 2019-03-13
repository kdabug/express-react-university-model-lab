const { Student, Instructor } = require('./models');

async function seed() {
  await Student.destroy({ where: {}});
  await Instructor.destroy({where: {}});

  // 1. Create 1 instructor
  // 2. Create 4 students
  // 3. Set the relationship between the students and their teacher

  process.exit();
}

seed();
