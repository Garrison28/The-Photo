import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    name: '',
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
    axios.post('/auth/signup', {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    }).then( response => {
      if (response.data.type === 'error') {
        console.log('ERROR:', response.data.message)
        // TODO: Maybe put this message in state
      } else {
        localStorage.setItem('mernToken', response.data.token)
        this.props.liftToken(response.data)
      }
    }).catch(err => {
      // this block will catch rate limiter errors
      console.log(err)
    })
  }
  render() {
    return(
      <div className='Signup'>
        <h3>Create new account:</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" onChange={this.handleChange} value={this.state.name} />
          <input type="text" placeholder="email" name="email" onChange={this.handleChange} value={this.state.email} />
          <input type="password" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password} />
          <input type="submit" value="Sign Up!" />
        </form>
      </div>
    )
  }
}

export default Signup;