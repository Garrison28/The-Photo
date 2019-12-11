import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

class Photographers extends React.Component {
  state = {
    photographers: []
  }

  grabPhotographerData = () => {
    axios.get('/home/photographers')
      .then(response => {
        this.setState({
          photographers: response.data
        })
      })
  }

  componentDidMount = () => {
    this.grabPhotographerData()
  }

  render() {
    let mappedPhotographers = this.state.photographers.map((photographer, id) => {
      return (
        <div class="card horizontal">
          <div class="card-image">
            <Avatar image={photographer.url} size="75" round={true} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <span class="card-title grey-text text-darken-4">{photographer.name}</span>
              <p>{photographer.categories}</p>
              <p className="tutor-bio">{photographer.bio}</p>
              <a href={photographer.linkdin} target="_blank" rel="noopener noreferrer">Visit my linkdin!</a>
            </div><br />
          </div>
        </div>
      )
    })
    return (
      <div className="container sidebar-active dashboard-bkgrd">
        <div className="row">
          <div className="col m6 s12">
            <div className="card red darken-4 darken-1">
              <div className="card-content white-text">
                <span className="card-title">Photographers</span>
              </div>
              <div className="card-action white-text">
              <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                  <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card red darken-4 horizontal">
              <div className="card-image">
                <img className="user-profile-img" src={this.props.userData.url} />
              </div>
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
          <ul>
            {mappedPhotographers}
          </ul>
        </div>
      </div>

    )
  }

}

export default Photographers;