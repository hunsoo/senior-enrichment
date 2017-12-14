import axios from 'axios';

// action types
const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';
const STUDENT_ADDED = 'STUDENT_ADDED';
const STUDENT_UPDATED = 'STUDENT_UPDATED';
const STUDENT_DELETED = 'STUDENT_DELETED';

//action creators
const gotAllStudents = (students) => {
  return {
    type: GOT_ALL_STUDENTS,
    students,
  }
};

const studentAdded = (student) => {
  return {
    type: STUDENT_ADDED,
    student,
  }
};

const studentUpdated = (student) => {
  return {
    type: STUDENT_UPDATED,
    student,
  }
};

const studentDeleted = (id) => {
  return {
    type: STUDENT_DELETED,
    id,
  }
};

// thunks
export const getAllStudents = () => {
  return function thunk(dispatch) {
    return axios.get('/api/students/')
    .then(res => res.data)
    .then(students => {
      dispatch(gotAllStudents(students));
    });
  }
};

export const addStudent = (student, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/students/', student)
      .then(res => res.data)
      .then(createdStudent => {
        dispatch(studentAdded(createdStudent));
        history.push('/students/');// + createdStudent.id);
      });
  }
};

export const updateStudent = (student, history) => {
  return function thunk(dispatch) {
    return axios.put('/api/students/' + student.id, student)
      .then(res => res.data)
      .then(updatedStudent => {
        dispatch(studentUpdated(updatedStudent));
        history.push('/students/')// + updatedStudent.id);
      });
  }
};

export const deleteStudent = (id) => {
  return function thunk(dispatch) {
    return axios.delete('/api/students/' + id)
    .then(res => {
      dispatch(studentDeleted(id));
    });
  }
};

// reducers
const studentsReducer = (state = [], action) => {
  let index;
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return action.students;
    case STUDENT_ADDED:
      return [...state, action.student];
    case STUDENT_UPDATED:
      index = state.findIndex(student => student.id === action.student.id);
      return [...state.slice(0, index), action.student, ...state.slice(index + 1)];
    case STUDENT_DELETED:
      index = state.findIndex(student => student.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
      //return state.slice(0, index).concat(state.slice(index + 1));
    default:
      return state;
  }
};

export default studentsReducer;
