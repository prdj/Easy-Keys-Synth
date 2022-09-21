import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '1.7vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0,3s',
            color:'#397BA6',
            backgroundColor:'#397BA6'
        },
        right: '5%',
    }
})  

const showBelow = 250;

const Scroll = () => {
     
    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true);

    console.log(show)

    const handleScroll = () => {
        console.log(window.pageYOffset)

        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
        if (window.pageYOffset < showBelow) {
            setShow(false)
        }
    }

    const handleClick = () => {

        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }
    
    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    }, []);


    return (
        <div>
            { show &&
            <IconButton onClick={handleClick} className={classes.toTop}>
                <ExpandLessIcon/>
            </IconButton>
             
            }
        </div>
    )
}

export default Scroll


