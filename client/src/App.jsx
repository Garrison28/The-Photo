import React from 'react';
import axios from 'axios'
import './App.css';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component {
  state = {
    token: '',
    user: null,
    errorMessage: ''
  }

  checkForLocalToken = () => {
    // look in local storage for a token
    // if no token, remove all evidence of the mernToken from local storage and state
    
  }
}

export default App;
