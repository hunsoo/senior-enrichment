// @flow weak

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import Button from "material-ui/Button";
import Icon from 'material-ui/Icon/';
import Paper from "material-ui/Paper";

const styles = theme => ({
  container: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: 'none',
  },
  gridList: {
    margin: theme.spacing.unit,
    // width: 500,
    // height: 450,
  },
});

class Campuses extends Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
  const { classes, campuses } = this.props;

  return (
    <Paper className={classes.container}>
      <Link to="/campuses/add" className={classes.link}>
        <Button className={classes.button} raised color="primary" alt="add">
          <Icon>group_add</Icon>&nbsp;
            Add New Campus
        </Button>
      </Link>
      <GridList cellHeight={400} className={classes.gridList} cols={4}>
        {campuses.map(campus => (
            <GridListTile cols={1} key={campus.id}>
              <img src={"/images/" + campus.imageUrl} alt={campus.name} />
              <Link key={campus.id} to={`/campuses/${campus.id}/students`}>
              <GridListTileBar
                title={campus.name}
                subtitle={<span>{campus.description}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                  </IconButton>
                }
              />
          </Link>
            </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
}
}

Campuses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Campuses);
