import axios from 'axios';

// action types
const GOT_STUDENTS_FROM_SELECTED_CAMPUS = 'GOT_STUDENTS_FROM_SELECTED_CAMPUS';

//action creators
const gotStudentsFromSelectedCampus = (studentsFromSelectedCampus) => {
  return {
    type: GOT_STUDENTS_FROM_SELECTED_CAMPUS,
    studentsFromSelectedCampus,
  }
};

// thunks
export const getStudentsFromCampus = (id) => {
  return function thunk(dispatch) {
    return axios.get('/api/campuses/' + id + '/students')
      .then(res => res.data)
      .then(students => {
        dispatch(gotStudentsFromSelectedCampus(students));
      });
  }
};

// reducers
const studentsFromCampusReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS_FROM_SELECTED_CAMPUS:
      return action.studentsFromSelectedCampus;
    default:
      return state;
  }
};

export default studentsFromCampusReducer;
