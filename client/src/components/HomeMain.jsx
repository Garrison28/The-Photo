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
              <div className="card red darken-4 darken-1" >
                <div className="card-content white-text">
                  <span className="card-title"></span>
                </div>
                <div className="card-action white-text">
                  <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                  <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3><h3 className="inline"><Link to={'/home/addphoto'} className="waves-effect active">Add Photos</Link></h3>
                </div>
              </div>
            </div>
            <div className="col s12 m6 profile">
              <div className="card red darken-4 horizontal">
                <div className="card-image">
                  <img className="user-profile-img" src={this.props.userData.url} />
                </div>
                <div className="card-stacked">
                  <div className="card-content white-text">
                    <span className="card-title">My Profile</span>
                    <p style={{color: 'black'}}>{this.props.userData.name}</p>
                    <p style={{color: 'black'}}>{this.props.userData.email}</p>
                  </div>
                  <div className="card-action">
                    <Link to="/EditProfile" className="text-white">Edit Profile</Link>
                  </div>
                  <div>
                    <h1>Welcome {this.props.userData.name}!  </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HomeMain;