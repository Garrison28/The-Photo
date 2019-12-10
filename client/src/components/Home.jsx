import React from 'react';
import axios from 'axios';
import Login from '../Login';
import Signup from '../Signup';
import HomeHeader from './HomeHeader';
import HomeMain from './HomeMain';
import Categories from './Categories';
import Photographers from './Photographers';
import Photos from './Photos';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';


class Home extends React.Component {
  state = {
    loggedInUser: this.props.user,
    userData: [],
    categories: '',
    photographers: '',
    photographerid: '',
    photos: ''
  }

  handleCategoryOnClick = (e) => {
    this.setState({
      categories: e.target.name
    })
  }

  handlePhotographerOnClick = (e) => {
    this.setState({
      photographers: e.target.name,
      photographerid: e.target.id
    })
  }

  handlePhotoClick = (e) => {
    this.setState({
      photos: e.target.name
    })
  }

  grabUserData = () => {
    axios.get(`/home/${this.state.loggedInUser._id}`)
    .then( response => {
      this.setState({
        userData: response.data
      })
    })
  }

  componentDidMount = () => {
    this.grabUserData()
  }

  render () {
    return (
      <>
        <Router>
          < HomeHeader logout={this.props.logout} />
          < Route path='/home/main' render={(props) => <HomeMain {...props} categories={this.state.categories} photos={this.state.photos} userData={this.state.userData} lockedResult={this.state.lockedResult} handleClick={this.state.handleClick}/>}/>
          < Route path='/home/categories' render={(props) => <Categories {...props} categories={this.state.categories} userData={this.state.userData} handleCategoryOnClick={this.handleCategoryOnClick} />}/>
          < Route path='/home/photos' render={(props) => <Photos {...props} />}/>
          < Route path='/home/photographers' render={(props) => <Photographers {...props} categories={this.state.categories} userData={this.state.userData} handlePhotographerOnClick={this.handlePhotographerOnClick} />}/>
        </Router>
      </>
    )
  }

}

export default Home;



{/* <p>Hello, {this.state.user.name}</p>
          <button onClick={this.handleCategoryClick}>Categories</button>{' | '}
          <button onClick={this.handlePhotographerClick}>Photographers</button>{' | '}
          <button onClick={this.handlePhotoClick}>Photos</button>{' | '}
          <button onClick={this.logout}>Log Out</button><br />
          <p>{this.state.lockedReasult}</p> */}