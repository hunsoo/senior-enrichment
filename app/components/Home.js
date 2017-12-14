import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const style = {
  root: {
    marginTop: 8 * 3,
    padding: 8 * 3,
    backgroundImage: 'url("images/interplanetary.jpg")',
    zIndex: -1,
    height: "1080px"
  },
  paper: {
    padding: 8 * 3,
    width: 400,
    opacity: 0.3,
  }
};

const Home = props => (
  <div style={style.root}>
    <Paper style={style.paper}>
      <Typography type="display3" component="h1" gutterBottom>
        The Margaret Hamilton Interplanetary Academy of JavaScript
      </Typography>
      <Typography type="headline" component="h3" gutterBottom>
        A long time ago in a galaxy far, far away...
      </Typography>
      <Typography type="body1" component="p" gutterBottom>
        Over the last millenium, Javascript has gotten so popular that even
        extraterrestial creatures are learning Express, Sequelize, React and
        Redux. Meanwhile, <em>Fullstack Academy of Code</em> has transformed itself into
        an interplanetary organization with multiple campuses on different
        planets. It was renamed after <em>Margaret Hamilton</em>, an alias that the
        famous <em>Omri</em> used when he wanted to pretend as a woman. In 31th
        century, <em>Cassio</em> is still alive as the legendary code master. His wisdom
        and fame has spread all over the universe, and it was not long before he
        sensed the the rise of the dark lord of code. Cassio left the
        organization, pursuing the dark lord for the peace of the universe, but
        has not returned since then. In order to find Cassio, we must manage the
        interplanetary campuses and their students to find his successor.
      </Typography>
      <Typography type="headline" component="h3" gutterBottom>
        Young fullstacker, may the code be with you.
      </Typography>
    </Paper>
  </div>
);

export default Home;
