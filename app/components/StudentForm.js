import React from "react";
//import { Field, reduxForm } from 'redux-form'

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";

// const renderTextField = ({ input, label, meta: { touched, error }}) => (
//   <TextField hintText={label}
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     //{...custom}
//   />
// )

// const renderSelectField = ({ input, label, meta: { touched, error }, children  }) => (
//   <SelectField
//     floatingLabelText={label}
//     errorText={touched && error}
//     {...input}
//     onChange={(event, index, value) => input.onChange(value)}
//     children={children}
//     //{...custom}
//      />
// )

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    paddingBottom: 50,
    overflowX: "auto"
  },
  container: {
    // display: "flex",
    // flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: 20,
    width: 320
  },
  menu: {
    width: 320
  },
  button: {
    margin: 10,
  }
});

// const validate = values => {
//   const errors = {};
//   const requiredFields = ['firstName', 'lastName', 'email'];
//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required';
//     }
//   })
//   if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// };

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', lastName: '', email: '', gpa: 0.0, campusId: 0,
    };

    if (props.campuses.length === 0) {
      props.loadCampuses();
    }

    if (props.route) {
      props.loadStudent(props.route.match.params.id);
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.route) {
      this.setState(props.student);
    }
  }

  handleChange (name) {
    return event => {
      this.setState({
        [name]: event.target.value
      });
    };
  }

  validate() {
    console.log(this.state);
    const required = ['firstName', 'lastName', 'email', 'gpa'];
    required.forEach(field => {
      if (this.state[field] === '') return false;
    });
    const gpa = Number(this.state.gpa);
    if (gpa < 0 || gpa > 4) return false;
    if (this.state.campusId === 0) return false;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(this.state.email);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validate()) return;
    this.props.handleSubmit(this.state);
  }

  reset() {
    this.setState({
      firstName: '', lastName: '', email: '', gpa: 0.0, campusId: 0,
    });
  }

  renderTextField(name, label, type = 'text') {
    return (<TextField
      id={name}
      label={label}
      className={this.props.classes.textField}
      type={type}
      value={this.state[name]}
      onChange={this.handleChange(name)}
      margin="normal"
    />);
  }

  render() {
    const { classes, campuses, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Paper className={classes.root}>
      <form className={classes.container} autoComplete="off"
        onSubmit={this.handleSubmit}>
          {/* <Field name="firstName" component={renderTextField} label="First Name" />
          <Field name="lastName" component={renderTextField} label="Last Name" />
          <Field name="email" component={renderTextField} label="EMail" />
          <Field name="gpa" component={renderTextField} label="GPA" type="number" /> */}
        {this.renderTextField('firstName', 'First Name')}
        <br />
        {this.renderTextField('lastName', 'Last Name')}
        <br />
        {this.renderTextField('email', 'Email')}
        <br />
        {this.renderTextField('gpa', 'GPA', 'number')}
        <br />
        <TextField
          id="campus"
          select
          label="Select"
          className={classes.textField}
          value={this.state.campusId}
          onChange={this.handleChange("campusId")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your campus"
          margin="normal"
        >
          {/* <Field name="campusId" component={renderSelectField} label="Select a Campus"> */}
          {campuses.map(campus => (
            <MenuItem key={campus.id} value={campus.id}>
              {campus.name}
            </MenuItem>
          ))}
        {/* </Field> */}
        </TextField>
        <br /><br />
          <Button type="submit" className={classes.button} raised color="primary" alt="Submit">Submit</Button>
          <Button type="button" raised className={classes.button} onClick={this.reset}>Clear
        </Button>
      </form>
      </Paper>
    );
  }
}

StudentForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
//   reduxForm({
//   form: 'student', // a unique name for this form
//   validate,
// })(
  StudentForm);
