import React from 'react';
import { NavLink } from 'react-router-dom';
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
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#33333a',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: '0.3s color ease',
    '&:hover': {
      color: '#ff6008',
      '& $arrow': {
          transform: 'rotate(180deg)',
        },
    }            
  },
  arrow: {
    fontSize: '16px',
    transition: '0.3s transform ease',
  },
});

const HeaderNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.navWrapper}>
      <Logo />
      <nav className={classes.nav}>
        <li className={classes.item}>
          <NavLink to="/shop"className={classes.link}>
            <span>shop</span>
            <ExpandMore className={classes.arrow} />
          </NavLink>                   
        </li>
        <li className={classes.item}>
          <NavLink to="/fabric"className={classes.link}>
            <span>fabric</span>
            <ExpandMore className={classes.arrow} />
          </NavLink>            
        </li>
        <li className={classes.item}>
          <NavLink to="/journal"className={classes.link}>
            <span>journal</span>
            <ExpandMore className={classes.arrow} />
          </NavLink>                 
        </li>
        <li className={classes.item}>
          <NavLink to="/about"className={classes.link}>
            <span>about</span>
            <ExpandMore className={classes.arrow} />
          </NavLink> 
        </li>
      </nav>
    </div>
  )
}

export default HeaderNav;