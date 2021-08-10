import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../Main/Main';
import Links from './Links';
import Contacts from './Contacts';
import Subscribe from './Subscribe';

const useStyles = makeStyles({
    footer:{
        padding: '40px 0',
        backgroundColor: '#33333a',
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    text: {
        color: '#dedede',
        marginTop: '40px',
        textAlign: 'center',
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Main>
                <div className={classes.wrapper}>
                    <Links />
                    <Contacts />
                    <Subscribe />
                </div>
                <p className={classes.text}>© Copyright Matter PTE LTD  2021</p>
            </Main>
        </div>
    )
}

export default Footer;