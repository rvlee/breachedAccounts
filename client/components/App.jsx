import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import OutputResult from './OutputResult.jsx';
import OutputBreach from './OutputBreach.jsx';

const HOST = '/';

const SERVICE = {
  BREACHEDACCOUNT: 'breachedaccount',
  BREACH: 'breach',
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      service: SERVICE.BREACHEDACCOUNT,
      searchText: '',
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
      service: event.target.value,
      data: null
    })
  }

  _handleClick() {
    const { service, searchText } = this.state;
    if (searchText !== '') {
      axios.get(
        `${HOST}breached`, 
        {
          params: {
            service,
            searchText
          }
        }
      )
      .then((res) => {

        const data = res.data !== '' ? JSON.parse(res.data) : '';
          this.setState({
            data
          })
      })
      .catch((err) => {
        throw err;
      });
    }
  }

  _getAllBreaches() {
    axios.get(`${HOST}breaches`)
    .then((res) => {
      this.setState({
        data: res.data,
        service: SERVICE.BREACHEDACCOUNT
      });
    })
    .catch((err) => {
      throw err;
    });
  }

  _renderAccountInfo() {
    const {data, service} = this.state;
    switch (service) {
      case SERVICE.BREACHEDACCOUNT:
        return <OutputResult data={data} />
      case SERVICE.BREACH:
        return <OutputBreach data={data} />
    }
    
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="header-container">
          <h1>Have you been PWNED?</h1>
          <p>Select breachedaccount for email and breach for domain searches</p>
          <Search 
            handleChange={this._handleChange} 
            handleClick={this._handleClick} 
            onChange={this._dropDownSelector}
            getAll={this._getAllBreaches}
            dropdownValue={this.state.service}
          />
          <h2>Results</h2>
        </div>
        {this._renderAccountInfo()}
      </div>
    )
  }
}

export default App;