const { Student, Instructor } = require("./models");

async function seed() {
  await Student.destroy({ where: {} });
  await Instructor.destroy({ where: {} });

  // 1. Create 1 instructor
  // 2. Create 4 students
  // 3. Set the relationship between the students and their teacher

  const instructorSir = await Instructor.create({
    name: "Sir",
    age: 78,
    favorite_subject: "water polo"
  });
  const instructorMam = await Instructor.create({
    name: "Mam",
    age: 78,
    favorite_subject: "playwriting"
  });

  const alonso = await Student.create({
    name: "Alonso",
    hometown: "Naples",
    bio:
      "Grapples in understanding the power of decision-making and consequences. Mournes son deeply and makes stupid decisions because of it. Has taken over a country."
  });
  const cordelia = await Student.create({
    name: "Cordelia",
    hometown: "British court",
    bio:
      "Is honest and has many virtues. Gains enemies because of those virtues. Loves family who disowns her. Dies, as does all virtue."
  });
  const thaisa = await Student.create({
    name: "Thaisa",
    hometown: "Pentapolis",
    bio:
      "Reverent, but a loyal fighter. When you think she is down-and-out, she might just wash ashore and serve as a priestess for the gods."
  });
  const jessica = await Student.create({
    name: "Jessica",
    hometown: "Venice",
    bio:
      "Is not like her father. Will not seek a pound of flesh. Chooses love over religious cultural norms."
  });

  const dromioE = await Student.create({
    name: "Dromio of Ephesus",
    hometown: "Ephesus",
    bio: "has a twin brother. but don't tell him he has a twin brother."
  });
  const dromioS = await Student.create({
    name: "Dromio of Syracuse",
    hometown: "Syracuse",
    bio: "has a twin brother. but don't tell him he has a twin brother."
  });
  const soothsayer = await Student.create({
    name: "Soothsayer",
    hometown: "None",
    bio:
      "Will tell you cryptic things that you will not want to hear - things you think you can best - but those things will happen."
  });
  const snug = await Student.create({
    name: "Snug",
    hometown: "Athens",
    bio:
      "Plays the roles, allows people to believe he knows nothing. Maybe he really doesn't know much. Genuine nonetheless."
  });
  // await sirStudents.setInstructor(instructorSir);
  // await mamStudents.setInstructor(instructorMam);
  await jessica.setInstructor(instructorSir);
  await thaisa.setInstructor(instructorSir);
  await cordelia.setInstructor(instructorSir);
  await alonso.setInstructor(instructorSir);
  await snug.setInstructor(instructorMam);
  await soothsayer.setInstructor(instructorMam);
  await dromioE.setInstructor(instructorMam);
  await dromioS.setInstructor(instructorMam);

  process.exit();
}

seed();

//TODO: Ask about how to map through .bulkCreate to assign relationships
