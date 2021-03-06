import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( response => {
      if (response.data.type === 'error') {
        console.log('ERROR:, response.data.message')
      } else {
        localStorage.setItem('mernToken', response.data.token)
        this.props.liftToken(response.data)
      }
    }).catch(err => {
      // Rate limiter catch block
      console.log(err)
    })
  }
  render() {
    return(
      <div className="container dashboard-bkgrd">
        <h3>Login!</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" value="Log In!" />
        </form>
      </div>
    )
  }
}

export default Login;