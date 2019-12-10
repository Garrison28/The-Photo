import React from 'react';
import axios from 'axios'
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {
    token: '',
    user: null,
    errorMessage: '',
    categories: '',
    photographers: '',
    photos: ''
  }

  checkForLocalToken = () => {
    // look in local storage for a token
    let token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      // if no token, remove all evidence of the mernToken from local storage and state
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: null
      })
    } else {
      // if found a token, verify it on the backend
      axios.post('/auth/me/from/token', { token })
        .then(response => {
          if (response.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: response.data.message
            })
          } else {
            // if verified, store it back in local storage and state
            localStorage.setItem('mernToken', response.data.token)
            this.setState({
              token: response.data.token,
              user: response.data.user
            })
          }
        }
        )
    }
  }

  componentDidMount = () => {
    this.checkForLocalToken()
  }

  liftToken = ({ token, user }) => {
    this.setState({
      token,
      user
    })
  }

  logout = () => {
    localStorage.removeItem('mernToken')
    this.setState({
      token: '',
      user: null
    })
  }

  handleClick = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }
    axios.get('/locked/test', config).then( response => {
      this.setState({
        lockedResult: response.data
      })
    })
  }


  render() {
    let contents;
    if (this.state.user) {
      contents = (
        <>
          < Redirect to='/home/main' />
          < Route path='/home' render={(props) => <Home {...props} user={this.state.user} lockedResult={this.state.lockedResult} handleClick={this.handleClick} logout={this.logout}/>}/>
        </>
      )
    } else {
      contents = (<>
        <Signup liftToken={this.liftToken} />
        <Login liftToken={this.liftToken} />
      </>
      )
    }
    return (
      <>
      <Router>
        {contents}
      </Router>
      </>
    )
  }
}


export default App;

