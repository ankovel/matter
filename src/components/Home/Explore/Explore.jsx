import React from 'react';
import { makeStyles } from '@material-ui/core';
import BigArticle from './BigArticle';
import SmallArticle from './SmallArticle';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    padding: '60px 0',
    marginBottom: '62px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
  },
  btn: {
    margin: '0 auto',
    padding: '8px 20px',
    width: '172px',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    backgroundColor: '#33333a',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
  }
});

const Explore = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Explore</h1>
      <div className={classes.wrapper}>
        <BigArticle />
        <SmallArticle />
      </div>

      <button type="button" className={classes.btn}>See the journal</button>
    </div>
  )
}

export default Explore;