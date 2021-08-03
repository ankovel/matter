import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderNav from './HeaderNav';
import HeaderIcon from './HeaderIcon';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '29px 0',
    }, 
});

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <HeaderNav />
            <HeaderIcon />
        </div>
    )
}

export default Header;