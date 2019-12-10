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

const WeddingPhotos = (props) => {
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
        },
    ]
    return (
        <>
            <div className="card-action white-text">
                <h3 className="inline"><Link to={'/home/categories'} className="waves-effect active">Categories</Link></h3><span className="spacer">|</span><h3 className="inline"><Link to={'/home/photographers'} className="waves-effect active">Photographers</Link></h3>
                <span className="spacer">|</span><h3 className="inline"><Link to={'/home/photos'} className="waves-effect active">Photos</Link></h3>
            </div>
            <div className={classes.home}>
                <h3 className={classes.prompt}>Photos</h3>
                <Carousel items={weddingphotos}
                // updateData={props.updateData}
                // updateImage={props.updateImage}
                /><br />
                <a href="/home/photographers">
                    <Button className={classes.button}>Go to the Photographer!</Button>
                </a>
            </div>
        </>
    )
}

export default WeddingPhotos;
