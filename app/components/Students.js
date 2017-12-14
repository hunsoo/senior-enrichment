// @flow weak

import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Icon from 'material-ui/Icon/';
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
  }
});

class Students extends Component {
  componentDidMount() {
    if (this.props.route) {
      this.props.load(this.props.route.match.params.id);
    } else {
      this.props.load();
    }
  }

  render() {
  const { classes, students, deleteStudent} = this.props;

  return (
    <Paper className={classes.root}>
      {!this.props.route &&
      <Link to="/students/add" className={classes.link}>
        <Button className={classes.button} raised color="primary" alt="add">
            <Icon>group_add</Icon>&nbsp;
            Add New Student
        </Button>
      </Link>}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell numeric>GPA</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(student => {
            return (
              <TableRow key={student.id}>
                <TableCell numeric>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell numeric>{student.gpa}</TableCell>
                <TableCell>
                  <Link to={`/students/${student.id}/edit`}>
                  <Icon alt ="edit">border_color</Icon></Link>
                  <Button onClick={() => deleteStudent(student.id)} ><Icon alt="delete">cancel</Icon></Button>
                </TableCell>
              </TableRow>
              );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

Students.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Students);
