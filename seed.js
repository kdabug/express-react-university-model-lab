const { Student, Instructor } = require('./models');

async function seed() {
  await Student.destroy({ where: {}});
  await Instructor.destroy({where: {}});

  const instructor = await Instructor.create({
    name: "Brian",
    age: 33,
    favorite_subject: "Home Ec"
  })

  const student1 = await Student.create({
      name: 'Bob',
      hometown: 'Boston',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    });

    const student2 = await Student.create({
      name: 'Cat',
      hometown: 'Washington',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    })

    const student3 = await Student.create({
      name: 'David',
      hometown: 'Arlington',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    })

  await instructor.setStudents([student1, student2, student3])

  process.exit();
}

seed();
