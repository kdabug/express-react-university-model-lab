import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import InstructorList from "./components/InstructorList";

const BASE_URL = "http://localhost:3002";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      instructors: [],
      formData: {
        name: "",
        hometown: "",
        selectInstructor: "",
        bio: ""
      }
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  editStudent(student) {
    const { name, hometown, bio, instructor_id } = student;
    this.setState({
      formData: {
        name,
        hometown,
        bio,
        selectInstructor: instructor_id
      }
    });

    this.props.history.push(`/students/edit/${student.id}`);
  }

  async handleUpdate(ev) {
    ev.preventDefault();
    console.log("called: ", this.props.location.pathname.split("/"));
    const pathArray = this.props.location.pathname.split("/");
    const id = pathArray[pathArray.length - 1];
    console.log("id", id);
    const { name, hometown, bio, selectInstructor } = this.state.formData;
    const url = `${BASE_URL}/instructors/${selectInstructor}/students/${id}`;
    const resp = await axios.put(url, {
      name,
      hometown,
      bio,
      instructor_id: selectInstructor
    });
    // console.log("response handleUp", typeof resp.data);
    const updatedStudent = resp.data.updateStudent;
    this.setState(prevState => {
      const students = prevState.students.map(student => {
        if (student.id === updatedStudent.id) {
          return updatedStudent;
        } else {
          return student;
        }
      });

      return {
        students,
        formData: {
          name: "",
          hometown: "",
          selectInstructor: prevState.instructors[0].id,
          bio: ""
        }
      };
    });
    this.props.history.push("/");
  }

  async componentDidMount() {
    await this.fetchInstructors();
    await this.getAllStudents();
  }

  async fetchInstructors() {
    const resp = await axios(`${BASE_URL}/instructors`);
    const instructors = resp.data;
    this.setState(prevState => ({
      instructors,
      formData: {
        ...prevState.formData,
        selectInstructor: instructors[0].id
      }
    }));
  }

  //Write an async function to getAllStudents()
  async getAllStudents() {
    const resp = await axios(`${BASE_URL}/students`);
    const students = resp.data;
    this.setState({
      students
    });
  }

  async createStudent(studentData) {
    const instructor_id = studentData.selectInstructor;
    const url = `${BASE_URL}/instructors/${instructor_id}/students`;
    const resp = await axios.post(url, studentData);
    const student = resp.data;
    this.setState(prevState => ({
      students: [...prevState.students, student],
      formData: {
        name: "",
        hometown: "",
        instructor: "",
        bio: ""
      }
    }));
  }

  handleChange = async e => {
    const { name, value } = e.target;
    await this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.formData);
    await this.createStudent({
      ...this.state.formData,
      instructor_id: this.state.formData.selectInstructor
    });
  };

  async handleDelete(student) {
    console.log(`Deleting student with an id of ${id}`);
    const { id, instructor_id } = student;
    await axios.delete(
      `${BASE_URL}/instructors/${instructor_id}/students/${id}`
    );
    this.setState(prevState => ({
      students: prevState.students.filter(student => student.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>University of Bananas</h1>
        {/* TODO: create a StudentsList component that renders all students fetched from server */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/instructors">Instructors</Link>
        </nav>
        <Route
          exact
          path="/"
          render={() => (
            <StudentForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              name={this.state.formData.name}
              hometown={this.state.formData.hometown}
              instructors={this.state.instructors}
              selectInstructor={this.state.formData.instructor}
              bio={this.state.formData.bio}
            />
          )}
        />
        <Route
          exact
          path="/students"
          render={() => (
            <StudentList
              editStudent={this.editStudent}
              students={this.state.students}
              handleDelete={this.handleDelete}
            />
          )}
        />
        <Route
          exact
          path="/students/edit/:id"
          render={() => (
            <StudentForm
              onChange={this.handleChange}
              onSubmit={this.handleUpdate}
              name={this.state.formData.name}
              hometown={this.state.formData.hometown}
              instructors={this.state.instructors}
              selectInstructor={this.state.formData.instructor}
              bio={this.state.formData.bio}
            />
          )}
        />
        <Route
          exact
          path="/instructors"
          render={() => <InstructorList instructors={this.state.instructors} />}
        />
        <Route
          exact
          path="/instructors/:id/students"
          render={props => (
            <StudentList
              {...props}
              editStudent={this.editStudent}
              students={this.state.students}
              handleDelete={this.handleDelete}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
