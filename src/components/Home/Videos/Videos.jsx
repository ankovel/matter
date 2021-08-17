import React from 'react';
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles ({
  container: {
    display: 'grid',
    padding: '60px 0',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '50px',
  },
  video: {
    width: '361px',
    height: '240px',
    marginBottom: '25px',
    filter: 'drop-shadow(1px 2px 3px black)',
   },
  btn: {
    width: '174px',
    margin: '0 auto',
    padding: '11.5px 0',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    backgroundColor: '#33333a',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
    '&:hover': {
      color: '#ff6008',
      transition: '0.3s all ease',
    },
  },
  description: {
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: 'normal',
  },
});

const Videos = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Recommended Videos</h1>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <YouTube videoId="UVC9UTXBbzk" className={classes.video} />
          <h3 className={classes.description}>Jamdani Weaving Process</h3>
        </div>
        <div className={classes.item}>
          <YouTube videoId="f3E99whjRUk" className={classes.video} />
          <h3 className={classes.description}>Traditional art of Jamdani weaving</h3>
        </div>
        <div className={classes.item}>
          <YouTube videoId="2Xx7hKALsW4" className={classes.video} />
          <h3 className={classes.description}>New Dhakai Jamdani Sarees</h3>
        </div>
      </div>
      <button type="button" className={classes.btn}>SHOW MORE</button>
    </div>
  )
}


export default Videos;
