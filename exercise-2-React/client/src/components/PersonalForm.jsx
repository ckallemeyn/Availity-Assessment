import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { TextField, FormControl, Paper, Button } from '@material-ui/core';
import { orange, green, deepPurple } from '@material-ui/core/colors'
import { spacing } from '@material-ui/system';

const btnColor = deepPurple[700];

const styles = theme => ({
  shortInput: {
    width:'35%',
    label: btnColor,
    marginTop: theme.spacing(3),
    marginLeft: '16px',
  },
  longInput: {
    width: '50%',
    marginTop: theme.spacing(3),
    marginLeft: '16px',
  },
  button: {
    marginLeft: '24em',
    background: btnColor,
    color:'#fff3e0',
    margin: theme.spacing(3),
  }
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

function PersonalForm({ next, classes, handleInputChange }) {

  return (
    <Fragment>
      <TextField
        className={classes.shortInput}
        name="first"
        label="First Name"
        id="signInUsername"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.shortInput}
        name="last"
        label="Last Name"
        id="registerLastname"
        required={true}
        onChange={handleInputChange}
        />
      <TextField
        className={classes.longInput}
        name="email"
        label="Email"
        id="registerEmail"
        type="email"
        required={true}
        onChange={handleInputChange}
      />
      <Button
        className={classes.button}
        size="small"
        variant="contained"
        color="secondary"
        type="submit"
        onClick={next}
        > Next
      </Button>
    </Fragment>
  )
}

PersonalForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalForm);
