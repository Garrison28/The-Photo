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
    categories: []
  }

  grabCategoryData = () => {
    axios.get('/home/categories')
      .then(response => {
        this.setState({
          categories: response.data
        })
      })
  }

  componentDidMount = () => {
    this.grabCategoryData()
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
  return(
      <div className = "container sidebar-active dashboard-bkgrd" >
      <div className="row">
        <div className="col m6 s12">
          <div className="card red darken-4 darken-1" style={{ height: '75px' }}>
            <div className="card-content white-text">
              <span className="card-title">Categories</span>
            </div>
            <div className="card-action white-text">
              <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
              <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="collection">
          {mappedCategories}
        </ul>
      </div>
      </div>
    )
  }
}

export default Categories;