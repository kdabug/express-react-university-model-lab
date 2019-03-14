import React from "react";

import "./StudentForm.css";

function StudentForm(props) {
  return (
    <>
      <h2>Enroll a new student:</h2>
      <form onSubmit={props.onSubmit} className="StudentForm">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.name}
            onChange={props.onChange}
          />
        </label>
        <label>
          Hometown:
          <input
            type="text"
            name="hometown"
            value={props.hometown}
            onChange={props.onChange}
          />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={props.bio} onChange={props.onChange} />
        </label>
        <label>Select an Instructor</label>
        <select
          onChange={props.onChange}
          name="selectInstructor"
          value={props.selectInstructor}
        >
          {props.instructors.map(instructor => (
            <option value={instructor.id} key={instructor.id}>
              {instructor.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default StudentForm;
