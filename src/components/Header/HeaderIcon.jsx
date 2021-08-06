import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { Search, Like, Bag } from '../../icons';

const useStyles = makeStyles({
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
      color: '#ff6008',
    }            
  },
  iconsWrapper: {
    display: 'flex',
  },
  iconButton: {
    marginLeft: '20px',
    '&:hover': {
      backgroundColor: 'transparent',
    }            
  },
  icons: {
    width: '25px',
    height: '25px',
    '&:hover': {
      width: '35px',
      height: '35px',
      color: '#ff6008',
      transition: '0.3s all ease',
    }            
  },
});

const HeaderIcon = () => {
  const classes = useStyles();

  return (
    <div className={classes.iconsWrapper}>
      <button type="button" className={classes.btn}>login</button>
      <IconButton className={classes.iconButton}>
        <Search className={classes.icons} />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Like  className={classes.icons} />
      </IconButton>
      <IconButton className={classes.iconButton}>
        <Bag className={classes.icons} />
      </IconButton>
  </div>
  );
}

export default HeaderIcon;