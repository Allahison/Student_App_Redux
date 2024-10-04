import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const { id, name, age, course } = action.payload;
      const existingStudent = state.students.find((student) => student.id === id);
      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.age = age;
        existingStudent.course = course;
      }
    },
  },
});

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
