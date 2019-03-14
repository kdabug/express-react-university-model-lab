import React from "react";

function StudentList(props) {
  // console.log("STUDENTLIST: props.match.params->", props.match);
  console.log("STUDENTLIST: props.students->", props.students);
  let students = [];
  props.match
    ? (students = props.students.filter(
        student => student.instructor_id === parseInt(props.match.params.id)
      ))
    : (students = props.students);
  // console.log("STUDENTLIST: students->", students);
  return (
    <div>
      <h3>Student List</h3>
      {students.map(student => (
        <div className="list-elements" key={student.id}>
          <ul>
            <li>Name: {student.name}</li>
            <li>From: {student.hometown}</li>
            <li>Bio: {student.bio}</li>
            <button onClick={() => props.handleDelete(student)}>
              Delete Student
            </button>
            <button onClick={() => props.editStudent(student)}>
              Edit Student
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
