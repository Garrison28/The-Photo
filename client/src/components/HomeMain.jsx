import React from 'react';
import axios from 'axios';
import Home from './Home';
import Categories from './Categories';
import Photos from './Photos';
import Photographers from './Photographers';
import { Link } from 'react-router-dom';

class HomeMain extends React.Component {
  render() {
    return (
      <>
        <div className="container sidebar-active dashboard-bkgrd">
          <div className="row">
            <div className="col m6 s12">
              <div className="card red darken-4 darken-1" style={{ height: '225px' }}>
                <div className="card-content white-text">
                  <span className="card-title"></span>
                </div>
                <div className="card-action white-text">
                  <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                  <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card red darken-4 horizontal" style={{ height: '225px' }}>
                <div className="card-image">
                  {/* <img className="user-profile-img" src={this.props.userData.url} /> */}
                </div>
                <div className="card-stacked">
                  <div className="card-content white-text">
                    <span className="card-title">My Profile</span>
                    <p>{this.props.userData.name}</p>
                    <p>{this.props.userData.email}</p>
                  </div>
                  <div className="card-action">
                    {/* <Link to="/EditProfile" className="text-white">Edit Profile</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row"> */}
            {/* this will be the Pick a School Level div*/}
            {/* <div className="card"> */}
              {/* <div className="card-content"> */}
                {/* <span className="center card-title grey-text text-darken-4 level-p">Choose your education level</span> */}
                {/* <p className="center"> To get started, please choose from one of the following options</p> */}
                {/* <div className="row center"> */}
                  {/* <Link to="/dashboard/pickasubject" name="Highschool" className="waves-effect waves-light btn-large level-margin" onClick={this.props.levelAdd}>High School */}
                                        <i className="material-icons left"></i>
                  {/* </Link> */}
                  {/* <Link to="/dashboard/pickasubject" name="Middleschool" className="waves-effect waves-light btn-large level-margin" onClick={this.props.levelAdd}>Middle School */}
                                        <i className="material-icons left"></i>
                  {/* </Link> */}
                  {/* <Link to="/dashboard/pickasubject" name="Elementaryschool" className="waves-effect waves-light btn-large level-margin" onClick={this.props.levelAdd}>Elementary School */}
                                        <i className="material-icons left"></i>
                  {/* </Link> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
          {/* <div className="row"> */}
            {/* <div className="col m6 s12"> */}
              {/* <TutorWidget user={this.props.userData._id} /> */}
            {/* </div> */}
            {/* <div className="col m6 s12"> */}
              {/* <UserMessages user={this.props.userData._id} /> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </>
    )
  }
}

export default HomeMain;