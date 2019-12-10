import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Photos extends React.Component {
  state = {
    photos: []
  }

  grabPhotoData = () => {
    axios.get('/photos')
      .then(response => {
        this.setState({
          photos: response.data
        })
      })
  }
  componentDidMount = () => {
    this.grabPhotoData()
  }

  render() {
    let mappedPhotos = this.state.photos.map((photo, id) => {
      return (
        <li key={id} className="collection-item">
          <div className="row">
            <div className="col s4">
              <p className="collections-content">{photo.title}</p>
            </div>
            <div className="col s5">
              <span className="subject-cat grey">{photo.img}</span>
            </div>
            {/* <div className="col s3">
                  <Link id={id} to="/home/photos" className="waves-effect waves-light btn" name={photo.title} onClick={this.props.handlePhotosOnClick}><i className="material-icons left"></i></Link>
                </div> */}
          </div>
        </li>

      )
    })
    return (
      <div className="container sidebar-active dashboard-bkgrd">
        <div className="row">
          <div className="col m6 s12">
            <div className="card red darken-4 darken-1" style={{ height: '225px' }}>
              <div className="card-content white-text">
                <span className="card-title">Categories</span>
              </div>
              <div className="card-action white-text">
                <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card red darken-4 horizontal" style={{ height: '225px' }}>
              {/* <div className="card-image"> */}
                {/* <img className="user-profile-img" src={this.props.userData.url} /> */}
              {/* </div> */}
              <div className="card-stacked">
                <div className="card-content white-text">
                  <span className="card-title">My Profile</span>
                  <p>{this.props.userData.name}</p>
                  <p>{this.props.userData.email}</p>
                </div>
                <div className="card-action">
                  <Link to="/EditProfile" className="text-white">Edit Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="collection">
            <li className="collection-item avatar">
              <h5>Photos</h5>
            </li>
            {mappedPhotos}
          </ul>
        </div>
      </div>


    )
  }

}

export default Photos;