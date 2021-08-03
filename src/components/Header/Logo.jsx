import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    logo: {
        margin: '0',
        fontSize: '45px',
        fontWeight: 'normal',
        letterSpacing: '2px',
    },    
});

const Logo = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.logo}>matter</h1>
    )
}

export default Logo;