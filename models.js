const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'school_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true, // use underscored column names for columns generated by sequelize (e.g. timestamps as created_at rather than createdAt)
  }
});

const Student = sequelize.define('student', {
  name: Sequelize.STRING,
  hometown: Sequelize.STRING,
  bio: Sequelize.TEXT
});

const Instructor = sequelize.define('instructor', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  favorite_subject: Sequelize.STRING
});

Student.belongsTo(Instructor);
Instructor.hasMany(Student, {onDelete: 'cascade'});

module.exports = {
  sequelize,
  Student,
  Instructor
};
