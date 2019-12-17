import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

class AddPhoto extends React.Component {
  state = {
    selectedImage: '',
    displayImage: '',
    loading: false,
    userData: [],
  }

  uploadImage = e => {
    const files = e.target.files
    const data = new FormData()
    // console.log(files)
    data.append('file', files[0])
    data.append('cloud_name', 'thisguysoftware28')
    data.append('upload_preset', 'garrison')
    data.append("api_key", '236216458223811');
    data.append('tags', ['wedding'])
    axios.post('https://api.cloudinary.com/v1_1/thisguysoftware28/image/upload', data)
      .then(response => {
        console.log('----------------------------', this.props.logUse)
        axios.post(`/home/photos`, { theImage: response.data.secure_url, theUserId: this.props.logUse._id }).then(
          console.log(response.data),
          console.log('the final console log', response.data.public_id))
        this.setState({
          displayImage: response.data.secure_url
        })
      })
  }

  //   uploadWidget() {
  //     cloudinary.openUploadWidget({ cloud_name: 'thisguysoftware28', upload_preset: 'garrison', tags:['wedding']},
  //         function(error, result) {
  //             console.log(result);
  //         });
  // }


  // componentDidMount = () => {
  //   axios.get('http://res.cloudinary.com/v1_1/thisguysoftware28/image/thePhoto/weddings.json')
  //     .then(res => {
  //       console.log(res.data.resources);
  //       this.setState({
  //         gallery: res.data.resources
  //       })
  //     })
  // }
  render() {
    console.log(this.props.logUse)
    var content;
    if (this.props.logUse.photographer === true) {
      content = (
        <div className="card-action white-text">
          <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
          <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/addphoto'} className="waves-effect active">Add Photos</Link></h3>
          <div className="container sidebar-active dashboard-bkgrd">
            <h1 className="inline">Upload Image</h1>
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={this.uploadImage}
            />
            <img src={this.state.displayImage} style={{ width: '300px' }} />
          </div>
        </div>
      )
    } else {
      content = (
        <div className="card-action white-text">
          <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
          <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/addphoto'} className="waves-effect active">Add Photos</Link></h3>
          <h1>You must be a photographer to to add photos</h1>
        </div>
      )
    }


    return (
      // <>

      <div className="container sidebar-active dashboard-bkgrd">
        {/* <h1 className="inline">Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={this.uploadImage}
        /> */}
        {/* <div className="container sidebar-active dashboard-bkgrd"> */}
        {content}
      </div>
    )
  }

}

export default AddPhoto;















