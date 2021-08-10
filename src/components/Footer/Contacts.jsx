import React from 'react';
import { makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles({
  contact: {
    width: '149px',
    color: '#dedede',
  },
  title: {
    marginBottom: '19px',
  },
  text: {
    lineHeight: '1.83',
    '&:hover': {
      color: '#ff6008',
    } 
  },
  item: {
    display: 'block',
    marginTop: '27px',
    textDecoration: 'none',
    color: '#dedede',
    '&:hover': {
      color: '#ff6008',
      textDecoration: 'underline',
    } 
  },
});

const Contacts = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.contact}>
      <h3 className={classes.title}>Contact Us</h3>
      <p className={classes.text}>26A Pagoda St, TANGS, Singapore, 058187</p>
      <Link className={classes.item} href='tel:+6562215462'>+65 6221 5462</Link>
    </div>
  );
}    

export default Contacts;