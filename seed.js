const { Student, Instructor } = require("./models");

async function seed() {
  await Student.destroy({ where: {} });
  await Instructor.destroy({ where: {} });

  // 1. Create 1 instructor
  // 2. Create 4 students
  // 3. Set the relationship between the students and their teacher

  const instructor = await Instructor.create({
    name: "Sir",
    age: 78,
    favorite_subject: "water polo"
  });

  const students = await Student.buldCreate([
    {
      name: "Alonso",
      hometown: "Naples",
      bio:
        "Grapples in understanding the power of decision-making and consequences. Mournes son deeply and makes stupid decisions because of it. Has taken over a country."
    },
    {
      name: "Cordelia",
      hometown: "British court",
      bio:
        "Is honest and has many virtues. Gains enemies because of those virtues. Loves family who disowns her. Dies, as does all virtue."
    },
    {
      name: "Thaisa",
      hometown: "Pentapolis",
      bio:
        "Reverent, but a loyal fighter. When you think she is down-and-out, she might just wash ashore and serve as a priestess for the gods."
    },
    {
      name: "Jessica",
      hometown: "Venice",
      bio:
        "Is not like her father. Will not seek a pound of flesh. Chooses love over religious cultural norms."
    }
  ]);
  await students.setInstructor(instructor);
  process.exit();
}

seed();
