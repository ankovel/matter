import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
      marginBottom: '19px',
      fontSize:' 18px',
      color: '#dedede',
  },
  item: {
      marginBottom: '5px',
      listStyle: 'none',
      color: '#dedede',
      fontSize:' 14px',
      '&:last-child': {
          marginBottom: '0',
      }
  },
  list: {
      padding: '0',
  },
  link: {
      textDecoration: 'none',
      color: '#dedede',
  },
});

const Links = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.infoBlock}>
        <h3 className={classes.title}>Categories</h3>
        <ul className={classes.list}>
          <li className={classes.item}>
              <NavLink to="/" className={classes.link}>About us</NavLink>
          </li>
          <li className={classes.item}>
              <NavLink to="/" className={classes.link}>Testimonials</NavLink>
          </li>
          <li className={classes.item}>
              <NavLink to="/" className={classes.link}>Contact</NavLink>
          </li>
          <li className={classes.item}>
              <NavLink to="/" className={classes.link}>Journal</NavLink>
          </li>
          <li className={classes.item}>
              <NavLink to="/" className={classes.link}>Privacy Policy</NavLink>
          </li>
        </ul>
      </div>

      <div className={classes.infoBlock}>
        <h3 className={classes.title}>Partners </h3>
        <ul className={classes.list}>
            <li className={classes.item}>
                <NavLink to="/" className={classes.link}>Support</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/" className={classes.link}>Shipping&#38;Returns</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/" className={classes.link}>Size Guide</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to="/" className={classes.link}>Product Care</NavLink>
            </li>
          </ul>
      </div>
    </>
  )
}

export default Links;