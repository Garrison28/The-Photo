import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    carouselImage: {
        height: '50vh',
        width: '50vw',
        borderStyle: 'solid',
        borderColor: '#2E88D1',
    },
    name: {
        color: 'black',
    },
    prevItem:{
        color: 'black',
    },
    nextItem:{
        color: 'black',
    },
    carouselContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})

const Carousel = (props) => {
    const classes = useStyles()
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [current, setCurrent] = useState({});

    useEffect(() => {
        setCurrent(props.items[carouselIndex])
    })

    const nextItem = () => {
        if (carouselIndex >= props.items.length - 1) {
            setCarouselIndex(0)
        }
        else {
            setCarouselIndex(carouselIndex + 1)
        }
        setCurrent(props.items[carouselIndex])
    }

    const prevItem = () => {
        if ( carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1)
        }
        else {
            setCarouselIndex(props.items.length - 1)
        }
        setCurrent(props.items[carouselIndex])
    }

    // const handleClick = () => {
    //     props.updateData(current.name)
    //     props.updateImage(current.image)
    // }

    return (
        <div className={classes.carousel}>
            <ChevronLeftIcon className={classes.prevItem} onClick={prevItem} />
            <div className={classes.carouselContent}>
                {/* <h4 className={classes.name}>{current.name}</h4> */}
                <img className={classes.carouselImage} src={current.img} />
            </div>
            <ChevronRightIcon className={classes.nextItem} onClick={nextItem} />
        </div>
    )
}

export default Carousel;