import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import OutputContainer from './OutputContainer.jsx';

const HOST = '/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      service: 'breachedaccount',
      email: ''
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this._dropDownSelector = this._dropDownSelector.bind(this);
    this._getAllBreaches = this._getAllBreaches.bind(this);
  }

  _handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  _dropDownSelector(event) {
    this.setState({
      service: event.target.value
    })
  }

  _handleClick() {
    const { service, email } = this.state;
    axios.get(
      `${HOST}breached`, 
      {
        params: {
          service,
          email
        }
      }
    )
    .then((res) => {
      this.setState({
        data: res.data
      });
    })
    .catch((err) => {
      throw err;
    });
  }

  _getAllBreaches() {
    axios.get(
      `${HOST}breaches`)
    .then((res) => {
      this.setState({
        data: res.data
      });
    })
    .catch((err) => {
      throw err;
    });
  }

  _checkAccount() {
    const {data} = this.state;
    if (data === '') {
      return <center>Congratulations! You have not been breached </center>
    } else {
      return <OutputContainer data={data} />
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="header-container">
          <h1>Have you been PWNED?</h1>
          <p>Select breachedaccount for email and breach for domain searches</p>
          <Search handleChange={this._handleChange} 
                  handleClick={this._handleClick} 
                  onChange={this._dropDownSelector}
                  getAll={this._getAllBreaches}
          />
          <h2>Results</h2>
        </div>     
        {this._checkAccount()}
      </div>
    )
  }
}

export default App;