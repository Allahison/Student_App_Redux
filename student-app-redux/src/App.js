import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, removeStudent, updateStudent } from '..//src/slice/studentSlice';
import './App.css';

function App() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();

  const [studentData, setStudentData] = useState({
    id: null,
    name: '',
    age: '',
    course: '',
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // If editing, update the existing student
      dispatch(updateStudent(studentData));
      setIsEditing(false);
    } else {
      // If not editing, add a new student
      dispatch(addStudent({ ...studentData, id: Date.now() }));
    }
    setStudentData({ id: null, name: '', age: '', course: '' });
  };

  const handleEdit = (student) => {
    // Populate the form with the student's data for editing
    setStudentData(student);
    setIsEditing(true);
  };

  const handleRemove = (id) => {
    dispatch(removeStudent(id));
  };

  return (
    <div className="App">
      <h1> Student_App_Redux</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Name"
          value={studentData.name}
          onChange={(e) => setStudentData({ ...studentData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Age"
          value={studentData.age}
          onChange={(e) => setStudentData({ ...studentData, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={studentData.course}
          onChange={(e) => setStudentData({ ...studentData, course: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? 'Update Student' : 'Add Student'}</button>
      </form>

      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleRemove(student.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
