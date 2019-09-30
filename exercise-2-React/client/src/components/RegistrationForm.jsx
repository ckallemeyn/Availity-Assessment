import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import { FormControl, Paper } from '@material-ui/core';
import { orange, green, red } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core';
import Confirmation from './Confirmation.jsx';
import BusinessForm from './BusinessForm.jsx';
import PersonalForm from './PersonalForm.jsx';

const errorBackground = red[100];
const errorColor = red[600];
const btnColor = orange[800];

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  heading: {
    color: btnColor,
    margin: '16px'
  },
  body: {
    marginTop: '0px',
    marginLeft: '18px'
  },
  error: {
    marginTop: '0px',
    marginLeft: '18px',
    margin: theme.spacing(2),
    color: errorColor,
    background: errorBackground
  },
  subtitle: {
    marginTop: '36px',
    marginLeft: '16px',
    marginBottom: '0px'
  },
  paper: {
    width: '28em',
    marginTop: theme.spacing(3),
    marginLeft: '38%',
    overflowX: 'auto',
    marginBottom: theme.spacing(3)
  },
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

function RegistrationForm(props) {
const { currentPage, next, back, classes,
  handleInputChange, handleSubmit, showMessage } = props;

  return (
    <Fragment>

      <Paper className={classes.paper}>
      <Typography variant="h4" gutterBottom className={classes.heading}>
        Welcome to Availity!
      </Typography>
        <Typography variant="h6" gutterBottom className={classes.subtitle}>
          Register below:
        </Typography>
        <Typography variant="body2" gutterBottom className={classes.body}>
          each "*" indicates a required field
        </Typography>
        <Fragment>
          {(showMessage) ?
            <Typography variant="body2" gutterBottom className={classes.error}>
              Error: we were unable to register you at this time. Please check your information and resubmit.
            </Typography>
            : null
          }
        </Fragment>
        <FormControl className={classes.root} >
          {(currentPage === 'personal')
            ? <PersonalForm next={next} back={back}
            handleInputChange={handleInputChange}/>
            : <BusinessForm next={next} back={back}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            />
          }
        </FormControl>
      </Paper>
    </Fragment>
  )
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);
