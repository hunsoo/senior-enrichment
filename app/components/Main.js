"use strict";

import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import store from "../store";

import Navbar from './Navbar';
import Home from "./Home";
import Campuses from "./Campuses";
import Students from "./Students";
import StudentForm from './StudentForm';

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import { getAllStudents, addStudent, updateStudent, deleteStudent } from "../reducers/students";
import { getAllCampuses } from "../reducers/campuses";
import { getStudentsFromCampus } from "../reducers/studentsFromCampus";
import { getSingleStudent, resetSingleStudent } from "../reducers/student";
//import { tabChanged } from "../reducers/selectedTab";

const styles = theme => ({
  main: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

const Main = (props) => {

  const { classes, student, students, campuses, studentsFromSelectedCampus } = props;

    return (
      <div className={classes.main}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}
          //onEnter={changeTab(0)}
           />
          <Route exact path="/campuses" render={() =>
            <Campuses campuses={campuses} load={props.loadAllCampuses} />
           }
           //onEnter={changeTab(1)}
            />
          <Route exact path="/students" render={() =>
            (<Students
              students={students}
              load={props.loadAllStudents}
              deleteStudent={props.onDeleteStudent}
            />)
           }
           //onEnter={changeTab(2)}
            />
          <Route exact path="/campuses/:id/students" render={(route) =>
            (<Students
              route={route}
              students={studentsFromSelectedCampus}
              load={props.loadStudentsFromSelectedCampus}
              deleteStudent={props.onDeleteStudent}
            />)
           }
           //onEnter={changeTab(1)}
            />
          <Route exact path="/students/add" render={() =>
            <StudentForm campuses={campuses} student={student} resetStudent={props.resetSingleStudent} loadCampuses={props.loadAllCampuses} handleSubmit={props.onAddStudent} />
           }
           //onEnter={changeTab(1)}
            />
          <Route exact path="/students/:id/edit/" render={(route) =>
            <StudentForm route={route} campuses={campuses} student={student} loadStudent={props.loadSingleStudent} resetStudent={props.resetSingleStudent} loadCampuses={props.loadAllCampuses} handleSubmit={props.onUpdateStudent} />
          }
          //onEnter={changeTab(1)}
          />
        </Switch>
      </div>
    );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

const StatefulMain = connect(
  function mapStateToProps(state, ownProps) {
    return {
      student: state.student,
      students: state.students,
      campuses: state.campuses,
      studentsFromSelectedCampus: state.studentsFromSelectedCampus,
    };
  },

  function mapDispatchToProps(dispatch, ownProps) {
    return {
      loadAllCampuses() {
        dispatch(getAllCampuses());
      },

      loadAllStudents() {
        dispatch(getAllStudents());
      },

      loadStudentsFromSelectedCampus(id) {
        dispatch(getStudentsFromCampus(id))
      },

      loadSingleStudent(id) {
        dispatch(getSingleStudent(id));
      },

      resetSingleStudent() {
        dispatch(resetSingleStudent());
      },

      onAddStudent(student) {
        dispatch(addStudent(student, ownProps.history));
      },

      onUpdateStudent(student) {
        dispatch(updateStudent(student, ownProps.history));
      },

      onDeleteStudent(id) {
        dispatch(deleteStudent(id));
      },
    };
  }
)(Main);

export default withRouter(withStyles(styles)(StatefulMain));
