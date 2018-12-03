const { Class, Student, Instructor } = require('./models');

async function seed() {
  await Student.destroy({ where: {}});
  const students = await Student.bulkCreate([
    // TODO: add 3+ seeds.
    // E.G.:
    {
      name: 'Bob',
      hometown: 'Boston',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    },
    {
      name: 'Cat',
      hometown: 'Washington',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    },
    {
      name: 'David',
      hometown: 'Arlington',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam arcu nec diam finibus, vel congue leo vulputate. Aliquam id laoreet nunc. Sed nec porttitor diam. Aenean et rutrum lorem. Aliquam ac commodo urna. Donec et turpis molestie, rutrum orci vitae, eleifend nisl. Etiam facilisis pharetra facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis risus enim, sit amet eleifend tellus cursus quis.'
    },
  ]);
  process.exit();
}

seed();
