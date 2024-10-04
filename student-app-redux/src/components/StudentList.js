// src/components/StudentList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent } from '../slice/studentSlice';
import StudentForm from './StudentForm';

const StudentList = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleEdit = (student) => {
    setCurrentStudent(student);
    setIsEditing(true);
  };

  const handleEditFinish = () => {
    setIsEditing(false);
    setCurrentStudent(null);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.age} years old - Course: {student.course}
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => dispatch(removeStudent(student.id))}>Remove</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <StudentForm
          isEdit={true}
          existingStudent={currentStudent}
          onEditFinish={handleEditFinish}
        />
      )}
    </div>
  );
};

export default StudentList;
