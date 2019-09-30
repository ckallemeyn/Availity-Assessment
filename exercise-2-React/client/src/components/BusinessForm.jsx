import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { TextField,  Button, ButtonGroup } from '@material-ui/core';
import { orange,  deepPurple } from '@material-ui/core/colors'

const btnColor = deepPurple[700];
const registerBtnColor = orange[800];

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
    marginLeft: '18em',
    background: btnColor,
    color:'#fff3e0',
    margin: theme.spacing(1),
  },
  register: {
    background: registerBtnColor,
    color:'#fff3e0',
    margin: theme.spacing(1),
  },
});

function BusinessForm({ back, classes, handleInputChange, handleSubmit }) {

  return (
    <Fragment>
      <TextField
        className={classes.shortInput}
        name="businessName"
        label="Business Name"
        id="registerBusinessName"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.longInput}
        name="address1"
        label="Address Line 1"
        id="registerAddress1"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.longInput}
        name="address2"
        label="Address Line 2"
        id="registerAddress2"
        required={false}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.shortInput}
        name="city"
        label="City"
        id="registerCity"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.shortInput}
        name="state"
        label="State"
        id="registerState"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.shortInput}
        name="zipcode"
        label="Zipcode"
        id="registerZipcode"
        required={true}
        onChange={handleInputChange}
      />
      <TextField
        className={classes.shortInput}
        name="NPI"
        label="NPI"
        id="registerNPI"
        type="number"
        required={true}
        onChange={handleInputChange}
      />
      <ButtonGroup>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={back}
          > Back
        </Button>
        <Button
          className={classes.register}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
          > Register
        </Button>
      </ButtonGroup>
    </Fragment>
  )
}

BusinessForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessForm);
