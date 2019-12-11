import React from 'react';
import Axios from 'axios';
// import { makeStyles } from '@material-ui/styles';
import Photos from './Photos';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../App.css';

// const useStyles = makeStyles({
//   home: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   prompt: {
//     color: 'black',
//   },
//   button: {
//     width: '50vw',
//     height: '10vh',
//     backgroundColor: '#2E88D1',
//   }

// })


class AddPhoto extends React.Component {
  state = {
    details: null,
    selectedImage: null,
    displayImage: null
  }
  componentDidMount() {
    let config = {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }
    Axios.get(`/home/photos/${this.props.match.params.id}`, config)
    .then(response => {
      this.setState({
        details: response.data
      })
    })
  }
  handleFileChange = (e) => {
    this.setState({ selectedImage: e.target.files[0] })
  }
  handleImageSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData();
    fd.append('file', this.state.selectedImage);
    fd.append('upload_preset', 'namr3phs');
    Axios({
      url: 'https://api.cloudinary.com/v1_1/thisguysoftware28/upload',
      method: 'POST',
      headers: {
        'Content-Type': 'application-x-www-form-urlencoded'
      },
      data: fd
    }).then(res => {
      let config = {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      }
      Axios.put(`/home/photo/${this.props.match.params.id}`, {
        _id: this.props.match.params.id, name: this.state.details.name, description: this.state.details.description, photo: res.data.secure_url, catId: this.state.details.categories[0] }
        , config)
      .then(response => {
        this.setState({ displayImage: res.data.secure_url });;
      })
    }).catch(err => console.log(err));
  }
  render() {
    let content;
    // let classes = useStyles()
    let re = /^https/;
    if (this.state.details) {
      // If there are details on the page, continue from here...
      if (this.state.details.photo.match(re)) {
        // If there are details on the page and if the photo string starts with 'https', display details listed below
        content = (
          <div className="category-background">
            <h1>{this.state.photos.name}</h1>
            <h4>{this.state.photos.description}</h4>
            <img src={this.state.photos.photo} alt="Event" /> <br/>
            <a href="/home/photographers">
            <Button >Go to the Photographer!</Button>
          </a>
          </div>
        )
      } else if (this.state.displayImage){
        // To make uploaded image display immediately after user uploads it
        content = (
        <div className="category-background">
          <h1>{this.state.photos.name}</h1>
          <h4>{this.state.photos.description}</h4>
          <img src={this.state.displayImage} alt="Event"/> <br/>
          <Button waves="light">
              <Link className="white-text" to={`/home/users/${this.props.match.params.id}/edit/${this.props.match.params.cName}`}>Edit</Link><br/>
            </Button>
        </div>
        )
      } else {
        // If there are no displayed images and no photo in the database, will display the form
        content = (
          <div className="category-background">
            <h1>{this.state.details.name}</h1>
            <h4>{this.state.details.description}</h4>
            <input type="file" onChange={this.handleFileChange} />
            <Button onClick={this.handleImageSubmit}>Add Photo</Button> <br />
            <Button waves="light">
              <Link className="white-text" to={`/home/users/${this.props.match.params.id}/edit/${this.props.match.params.cName}`}>Edit</Link><br/>
            </Button>
          </div>
        )
      }
    } else {
      // Only when component did mount hasn't loaded
      content = (
        <p className="category-background">Loading...</p>
      )
    }
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}
export default AddPhoto;















