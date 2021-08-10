import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Facebook, Twitter } from '../../icons';

const useStyles = makeStyles({
  title: {
    marginBottom: '19px',
    color: '#dedede',
  },
  input: {
    width: '360px',
    padding: '10px',
    marginRight: '30px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    border: 'solid 1px #666666',
    outline: '0',
    color: 'white',
    '&::placeholder': {
      fontSize: '14px',
      fontWeight: '600',
      color: '#dedede',
      textTransform: 'uppercase',
    }
  },
  btn: {
    width: '166px',
    padding: '10px 19px',
    fontSize: '12px',
    fontWeight: '600',
    border: '0',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    backgroundColor: 'white',
    cursor: 'pointer',
    color: '#33333a',
  },
  icon: {
    marginTop: '20px',
    padding: '5px',
    borderRadius: '50%',
    backgroundColor: '#b2b2b2',
    color: '#33333a',
  },
  fb: {
    marginRight: '10px',
  },
});

const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.subscribe}>
      <h3 className={classes.title}>Subscribe to newsletter</h3>
      <form className={classes.form}>
        <input id="email" className={classes.input} placeholder="enter your email" type="text" />
        <button type="button" className={classes.btn}>Subscribe</button>
      </form>
      
      <Link href="/" className={classes.icons}>
        <Facebook className={cn(classes.icon, classes.fb)} />
      </Link>
      
      <Link href="/" className={classes.icons}>
        <Twitter className={classes.icon} />
      </Link>
    </div>
  );
}    

export default Subscribe;