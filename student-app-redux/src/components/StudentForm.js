// src/components/StudentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, editStudent } from '../slice/studentSlice';

const StudentForm = ({ isEdit, existingStudent, onEditFinish }) => {
  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    id: existingStudent?.id || Date.now(),
    name: existingStudent?.name || '',
    age: existingStudent?.age || '',
    course: existingStudent?.course || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(editStudent(student));
      onEditFinish();
    } else {
      dispatch(addStudent(student));
    }
    setStudent({ id: Date.now(), name: '', age: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={student.age}
        onChange={(e) => setStudent({ ...student, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Course"
        value={student.course}
        onChange={(e) => setStudent({ ...student, course: e.target.value })}
      />
      <button type="submit">{isEdit ? 'Edit Student' : 'Add Student'}</button>
    </form>
  );
};

export default StudentForm;
