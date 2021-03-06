import React from "react";
import { withRouter } from "react-router-dom";
function InstructorList(props) {
  //console.log('PROPS.INSTRUCTOR: INSTRUCTORLIST ->', props.instructors);
  return (
    <div>
      <h3>Instructor List</h3>
      {props.instructors.map(instructor => (
        <div key={instructor.id}>
          <ul>
            <li>{instructor.name}</li>
            <li>{instructor.age}</li>
            <li>{instructor.favorite_subject}</li>
            <button
              onClick={() =>
                props.history.push(`/instructors/${instructor.id}/students`)
              }
            >
              See Students
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default withRouter(InstructorList);
