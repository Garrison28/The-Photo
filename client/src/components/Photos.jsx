import React, { useState, useEffect } from 'react';
import Carousel from '../carosel/Carousel';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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

const Photos = (props) => {
  const [userImages, setUserImages] = useState([])

  useEffect(() => {
    console.log(props)
    axios.get(`/home/photos/all/${props.logUse._id}`).then(response => {
      console.log(response.data)
      setUserImages(response.data)
    })
  }, [])

  const classes = useStyles()
  const weddingphotos = [
    {
      name: 'Wedding Photos',
      image: '/weddings/thekiss.jpg'
    },
    {
      name: 'Wedding Photos',
      image: '/weddings/IMG_2553.jpg'
    },
    {
      name: 'Wedding Photos',
      image: '/weddings/IMG_2554.jpg'
    }
  ]
  const headshots = [
    {
      name: 'Headshots',
      image: '/headshots/IMG_1698.jpg'
    },
    {
      name: 'Headshots',
      image: '/headshots/IMG_1703.jpg'
    },
    {
      name: 'Headshots',
      image: '/headshots/IMG_1722.jpg'
    },
  ]

  const cars = [
    {
      name: 'top 10',
      image: '/cars/top-ten.jpg'
    },
    {
      name: 'Bugatti Veyron',
      image: '/cars/bugatti-veyron.jpg'
    },
    {
      name: 'Mustang',
      image: '/cars/mustang.jpeg'
    },
  ]

  axios.get('/')


  var myImages;
  if (userImages) {
    console.log('these are my userImages', userImages)
    var myMappedImages = userImages.map((ele, id) => <img key={id} src={ele} style={{width: '300px', padding: '20px'}}/>)
    myImages = (
      <>
        {myMappedImages}
      </>
    )
  } else {
    myImages = ('loading')
  }
  return (
    <>
      <div className="container sidebar-active dashboard-bkgrd" style={{ height: '300vh' }}>
      <div className="card-action white-text">
                  <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                  <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/addphoto'} className="waves-effect active">Add Photos</Link></h3>
                </div>
        {/* <div className={classes.home}>
          <h3 className={classes.prompt}>Wedding Photos By: Sarah Brink</h3>
          <Carousel items={weddingphotos}
          // updateData={props.updateData}
          // updateImage={props.updateImage}
          /><br />
          <a href="/home/photographers/5deeb660a29dcd0eb35d53c2">
            <Button className={classes.button}>Go to the Photographer!</Button>
          </a>
        </div>
        <div className={classes.home}>
          <h3 className={classes.prompt}>Headshot By: Sarah Brink</h3>
          <Carousel items={myMappedImages}
          // updateData={props.updateData}
          // updateImage={props.updateImage}
          /><br />
          <a href="/home/photographers/5deeb660a29dcd0eb35d53c2">
            <Button className={classes.button}>Go to the Photographer!</Button>
          </a>
        </div>
        <div className={classes.home}>
          <h3 className={classes.prompt}>Cars By: Christina M</h3>
          <Carousel items={cars}
          // updateData={props.updateData}
          // updateImage={props.updateImage}
          /><br />
          <a href="/home/photographers/5deeb660a29dcd0eb35d53c2">
            <Button className={classes.button}>Go to the Photographer!</Button>
          </a>
        </div> */}
        <div>
          {myMappedImages}
        </div>
      </div>
    </>
  )
}

export default Photos;
