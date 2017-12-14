import axios from 'axios';

// action types
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT';
const RESET_SINGLE_STUDENT = 'RESET_SINGLE_STUDENT';

//action creators
const gotSingleStudent = (student) => {
  return {
    type: GOT_SINGLE_STUDENT,
    student,
  }
};

const resetSingleStudent = () => {
  return {
    type: RESET_SINGLE_STUDENT,
  }
};

// thunks
export const getSingleStudent = (id) => {
  return function thunk(dispatch) {
    return axios.get('/api/students/' + id)
      .then(res => res.data)
      .then(student => {
        dispatch(gotSingleStudent(student));
      });
  }
};

const initialState = {
  firstName: '', lastName: '', email: '', gpa: 0.0, campusId: 0,
};

// reducers
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SINGLE_STUDENT:
      return action.student;
    case RESET_SINGLE_STUDENT:
      return initialState;
    default:
      return state;
  }
};

export default studentReducer;
