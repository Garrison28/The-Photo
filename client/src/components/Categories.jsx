import React from 'react';
import axios from 'axios';
import Carousel from '../carosel/Carousel';
import Photos from './Photos'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const useStyles = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    color: 'black',
  },
  button: {
    width: '50vw',
    height: '10vh',
    backgroundColor: '#2E88D1',
  }

})


class Categories extends React.Component {
  state = {
    categories: [],
    name: '',
    content: '',
    photos: []
  }

  grabCategoryData = () => {
    axios.get('/home/categories')
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
  }

  grabPhotoData = () => {
    axios.get('/home/photos')
      .then(res => {
        console.log(res);
        this.setState({
          photos: res.data
        })
      })
  }

  componentDidMount = () => {
    this.grabCategoryData()
    this.grabPhotoData()
    this.propsIntoState()
  }

  propsIntoState = () => {
    this.setState({
      name: this.props.categories.name,
      content: this.props.categories.content
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/home/categories`, {
      name: this.state.categories.name,
      content: this.state.categories.content,
    }).then(response => {
      if (response.data.type === 'error') {
        console.log("ERROR:", response.data.message)
      } else {
        console.log("Successfuly sent")
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render() {

    let mappedCategories = this.state.categories.map((category, id) => {
      return (
        <li key={id} className="collection-item">
          <div className="row">
            <div className="col s4">
              <p className="subject-title">{category.name}</p>
              <p className="collections-content">{category.content}</p>
            </div>
            <div className="col s5">
              <div className="card-action white-text">

                <h3><Link to={'/home/weddingphotos'} className="waves-effect active">Photos</Link></h3>
              </div>
            </div>
            <div className="col s3">
              <Link id={id} to="/home/category" className="waves-effect waves-light btn" name={category.name} onClick={this.props.handleCategoryOnClick}><i className="material-icons left"></i></Link>
            </div>
          </div>
        </li >
      )
    })
    let mappedPhotos = this.state.photos.map((photo, id) => {
      return (
        <li key={id} className="collection-item">
          <div className="row">
            <div className="col s4">
              <p className="subject-title">{photo.title}</p>
              <p className="collections-content">{photo.img}</p>
            </div>
            {/* <div className="col s5">
              <div className="card-action white-text">

                <h3><Link to={'/home/weddingphotos'} className="waves-effect active">Photos</Link></h3>
              </div>
            </div> */}
            {/* <div className="col s3">
            <Link id={id} to="/home/category" className="waves-effect waves-light btn" name={category.name} onClick={this.props.handleCategoryOnClick}><i className="material-icons left"></i></Link>
          </div> */}
          </div>
        </li>
      )
    })
    return (
      <div className="container sidebar-active dashboard-bkgrd" >
        <div className="row">
          <div className="col m6 s12">
            <div className="card red darken-4 darken-1" style={{ height: '75px' }}>
              <div className="card-content white-text">
                <span className="card-title">Categories</span>
              </div>
              <div className="card-action white-text">
                  <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                  <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/addphoto'} className="waves-effect active">Add Photos</Link></h3>
                </div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="collection">
            {mappedCategories}
            {mappedPhotos}
          </ul>
        </div>
        <div className='container sidebar-active dashboard-bkgrd'>
          <h3>Add category</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} /><br />
              <input type="text" name="content" placeholder="Content" onChange={this.handleChange} value={this.state.content} /><br />
            </div>
            <div className="row">
              <input class="waves-effect waves-light btn" type="submit" value="SAVE" Redirect='/home/categories' />
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default Categories;