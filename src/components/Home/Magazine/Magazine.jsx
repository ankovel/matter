import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles ({
  title: {
    marginBottom: '40px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
  },
  shop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  image: {
    height: '30px',
    filter: 'contrast(0.1)',
    '&:hover': {
      filter: 'drop-shadow(2px 1px 0px #ff6008)',
      transition: '0.3s all ease',
    },
  },
});

const Magazine = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>As Seen On</h1>
      <div className={classes.shop}>
        <Link to="/" classes={classes.link}>
          <img className={classes.image} src="images/sinsay.png" alt="vogue" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/hm.png" alt="mariefrance" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/coolhunting.png" alt="coolhunting" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/peppermint.png" alt="peppermint" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/pb.png" alt="conscious" />
        </Link>
        <Link to="/"> 
          <img className={classes.image} src="images/traveler.png" alt="traveler" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/zara.png" alt="zara" />
        </Link>
        <Link to="/">
          <img className={classes.image} src="images/mango.png" alt="eluxe" />
        </Link>
      </div>
    </div>
  )
}

export default Magazine;