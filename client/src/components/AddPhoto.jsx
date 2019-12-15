import React, { Component } from 'react';
import axios from 'axios';

class AddPhoto extends React.Component {
  state = {
    image: '',
    loading: false
  }

  uploadImage = e => {
    const files = e.target.files
    const data = new FormData()
    console.log(files)
    data.append('file', files[0])
    data.append('upload_preset', 'sxpvc5hj')
    data.append("api_key", '236216458223811');
    axios.post('https://api.cloudinary.com/v1_1/thisguysoftware28/image/upload', data)
      .then(response => {
        console.log(response.data)
        this.setState({
          image: response.data.secure_url
        })
      })
  }
  render() {
    {
      var content = this.state.loading ? (
        <h3>Loading...</h3>
      ) : (
          <img src={this.state.image} style={{ width: '300px' }} />
        )
    }
    return (
      <div className="container sidebar-active dashboard-bkgrd">
        <h1 className="inline">Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={this.uploadImage}
        />
        {content}
      </div>
    )
  }

}

export default AddPhoto;















