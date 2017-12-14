import axios from 'axios';

// action types
const GOT_ALL_CAMPUSES = 'GOT_ALL_CAMPUSES';

//action creators
const gotAllCampuses = (campuses) => {
  return {
    type: GOT_ALL_CAMPUSES,
    campuses,
  }
};

// thunks
export const getAllCampuses = () => {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(gotAllCampuses(campuses));
    });
  }
};

// reducers
const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusesReducer;
