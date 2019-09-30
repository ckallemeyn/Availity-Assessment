import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import { FormControl, Paper } from '@material-ui/core';
import { orange, green, red } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core';

const textColor = orange[500];

const styles = theme => ({
  paper: {
    width: '30em',
    marginTop: theme.spacing(3),
    marginLeft: '38%',
    overflowX: 'auto',
    marginBottom: theme.spacing(3)
  },
  subtitle: {
    marginTop: '36px',
    marginLeft: '16px',
    marginBottom: '0px',
    color: textColor,
  },
  body: {
    marginTop: '10px',
    marginLeft: '22px',
    marginBottom: '5px',
  },
});


function Confirmation({ classes }) {
  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom className={classes.subtitle}>
          Congratulations!
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.body}>
          You are now registered with <a href="https://www.availity.com/">Availity!</a>
        </Typography>

      </Paper>
    </Fragment>
  )
}

Confirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirmation);