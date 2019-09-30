import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm.jsx';
import Confirmation from './Confirmation.jsx';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: '',
      last: '',
      email: '',
      businessName: '',
      address1: '',
      address2: '',
      city:'',
      state: '',
      zipcode: null,
      NPI: null,
      currentPage: 'personal',
      showMessage: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateData = this.validateData.bind(this);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  validateData() {
    let { NPI, email, zipcode, currentPage } = this.state;
    //edge case
    if (NPI === null || email === '' || zipcode === null) {
      this.setState({
        showMessage: true
      });
      return;
    }

    if (currentPage === 'confirmation') {
      return;
    }
    
    let NPILength = NPI.toString().length;
    (NPILength === 10 && zipcode.length >=5 && zipcode.length <= 10)
      ? this.setState({
          currentPage: 'confirmation',
          showMessage: false
        })
      : this.setState({
          showMessage: true
        });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateData()
  }

  next() {
    const { currentPage } = this.state;
    let nextPage = (currentPage === 'personal')
      ? 'business'
      : 'confirmation';
    this.setState({
      currentPage: nextPage,
    });
  }

  back() {
    const { currentPage } = this.state;
    let nextPage = (currentPage === 'business')
      ? 'personal'
      : 'business';
    this.setState({
      currentPage: nextPage,
    });
  }

  render() {
    const { currentPage, showMessage } = this.state;
    return (
      <div>
        {(currentPage === 'confirmation')
          ? <Confirmation />
          : <RegistrationForm
              currentPage={currentPage}
              showMessage={showMessage}
              next={this.next}
              back={this.back}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
        }
      </div>
    )
  }
}
