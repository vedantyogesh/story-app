import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email : '',
    password : ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn