import React from 'react';

function StudentList(props) {
  return (
    <div>
    <h3>Student List</h3>
    {props.students.map(student => (
      <div key={student.id}>
      <ul>
        <li>{student.name}</li>
        <li>{student.hometown}</li>
        <li>{student.bio}</li>
        <button
          onClick={() => props.handleDelete(student)}>
          Delete Student
        </button>
      </ul>
      </div>
    ))}
    </div>
  )
}

export default StudentList;
