import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../Main/Main';

const useStyles = makeStyles({
    footer:{
        padding: '40px 0',
        backgroundColor: '#33333a',
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Main>
                hello
            </Main>
        </div>
    )
}

export default Footer;