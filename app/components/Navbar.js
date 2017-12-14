"use strict";

import React, {Component} from "react";
import {Link} from "react-router-dom";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Icon from 'material-ui/Icon';


export default class Navbar extends Component {
  constructor() {
    super();
    // let baseRoute = this.props.match.path.split('/')[0];
    // let selectedTab = 0;
    // if (baseRoute === 'campuses') selectedTab = 1;
    // else if (baseRoute === 'students') selectedTab = 2;
    this.state = {selectedTab: 0};
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event, value) {
    this.setState({selectedTab: value});
  }

  render() {
    let { selectedTab } = this.state;
    const img = <img src="images/logo.png" />;

    return (
      <AppBar position="static" title={img}>
        <Tabs value={selectedTab} onChange={this.handleTabChange} centered>
          <Tab icon={<Icon>home</Icon>} label="Home" alt="home" component={Link} to="/" />
          <Tab
            icon={<Icon>school</Icon>}
            label="Campuses"
            alt="campuses"
            component={Link}
            to="/campuses"
          />
          <Tab
            icon={<Icon>group</Icon>}
            label="Students"
            alt="students"
            component={Link}
            to="/students"
          />
        </Tabs>
      </AppBar>
    )
  }
}
