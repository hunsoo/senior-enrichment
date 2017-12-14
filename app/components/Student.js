// @flow weak

import React, {Component} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Icon from "material-ui/Icon/";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class Student extends Component {
  // componentDidMount() {

  // }

  render() {
  const { classes, student } = this.props;

  return (
    <Paper className={classes.root}>
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
                  <Link to={`/students/${student.id}`} alt="edit">
                    <Icon>border_color</Icon>
                  </Link>
                  <Link to={`/students/${student.id}`} alt="delete">
                    <Icon>border_color</Icon>
                  </Link>
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

Student.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Student);
