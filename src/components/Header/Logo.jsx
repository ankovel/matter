import React from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#030303',
  },
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
    <NavLink to="/" className={classes.link}>
      <h1 className={classes.logo}>matter</h1>
    </NavLink>
  );
}

export default Logo;