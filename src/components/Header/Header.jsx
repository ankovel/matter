import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { ExpandMore, Search, FavoriteBorder, LocalMall } from '@material-ui/icons';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '29px 0',
    },
    navWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        margin: '0',
        fontWeight: 'normal',
        letterSpacing: '2px',
    },
    nav: {
        display: 'flex',
    },
    item: {
        marginLeft: '41px',
        listStyle: 'none',
        fontSize: '12px',        
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'white',
        color: '#33333a',
        letterSpacing: '1px',
        textTransform: 'uppercase',       
    },
    arrow: {
        width: '15px',
    },
    iconsWrapper: {
        display: 'flex',
    },
    iconButton: {
        padding: '0',
        marginLeft: '30px',
    }
   
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.navWrapper}>
                <h1 className={classes.title}>matter</h1>
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
            <div className={classes.iconsWrapper}>
                <button type="button" className={classes.btn}>login</button>
                <IconButton className={classes.IconButton}>
                    <Search />
                </IconButton>
                <IconButton className={classes.IconButton}>
                    <FavoriteBorder />
                </IconButton>
                <IconButton className={classes.IconButton}>
                    <LocalMall />
                </IconButton>

            </div>

        </div>
    )
}

export default Header;