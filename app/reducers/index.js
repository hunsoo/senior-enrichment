/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
//import { routerReducer } from 'react-router-redux';
//import { reducer as formReducer } from 'redux-form'
import selectedTab from './selectedTab';
import students from './students';
import campuses from './campuses';
import studentsFromSelectedCampus from './studentsFromCampus';
import student from './student';

const rootReducer = combineReducers({
  //selectedTab,
  students,
  campuses,
  studentsFromSelectedCampus,
  student,
  //form: formReducer,
  //routing: routerReducer,
});

export default rootReducer;
