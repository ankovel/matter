import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingTop: '130px',
  },
  title: {
    marginBottom: '35px',
    fontSize: '70px',
    fontWeight: 'normal',
    filter: 'brightness(0)',
  },
  text: {
    fontSize: '20px',
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Apparels</h1>
      <p className={classes.text}>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
    </div>
  )
}

export default Banner;