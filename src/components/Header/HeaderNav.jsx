import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Logo from './Logo';


const useStyles = makeStyles({
    navWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    nav: {
        display: 'flex',
    },
    item: {
        marginLeft: '41px',
        listStyle: 'none',
        fontSize: '15px',   
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        fontSize: '15px',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#33333a',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#33333a',
            padding: '3px 6px',
            border: 'solid 3px #F4A460',
            borderRadius: '10%',
            transition: '0.3s all ease',
            '& $arrow': 
                { transform: 'rotate(180deg)' },
        }            
    },
    arrow: {
        width: '16px',
        transition: '0.3s all ease',
    }
     
});

const HeaderNav = () => {
    const classes = useStyles();
    return (
        <div className={classes.navWrapper}>
            <Logo />
            <nav className={classes.nav}>
                <li className={classes.item}>
                    <button type="button" className={classes.btn}>
                        <span>shop</span>
                        <ExpandMore className={classes.arrow} />
                    </button>                   
                </li>
                <li className={classes.item}>
                    <button type="button" className={classes.btn}>
                        <span>fabric</span>
                        <ExpandMore className={classes.arrow} />
                    </button>              
                </li>
                <li className={classes.item}>
                    <button type="button" className={classes.btn}>
                        <span>journal</span>
                        <ExpandMore className={classes.arrow} />
                    </button>                  
                </li>
                <li className={classes.item}>
                    <button type="button" className={classes.btn}>
                        <span>about</span>
                        <ExpandMore className={classes.arrow} />
                    </button>
                </li>
            </nav>
        </div>
    )
}

export default HeaderNav;