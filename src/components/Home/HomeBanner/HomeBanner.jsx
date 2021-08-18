import React from 'react';
import Slider from "react-slick";
import { makeStyles, Link } from '@material-ui/core';
import { Arrow } from '../../../icons';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  banner: {
    position: 'absolute',
    top: '173px',
    right: '149px',
  },
  leftBtn: {
    position: 'absolute',
    zIndex: 1,
    padding: '38px 22px 30px 2px',
    left: 0,
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '0',
    borderRadius: '0 55px 55px 0',
  },
  rightBtn: {
    position: 'absolute',
    zIndex: 1,
    padding: '38px 2px 30px 22px',
    right: 0,
    top: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    border: '0',
    borderRadius: '55px 0 0 55px',
    '& $arrow': {
      transform: 'rotate(180deg)',
    },
  },
  arrow: {
    width: '40px',
    height: '35px',
  },
  title: {
    width: '458px',
    marginBottom: '27px',
    lineHeight: '1.33',
    fontSize: '60px',
    color: '#fff',
    fontWeight: 'normal',
  },
  btn: {
    paddingBottom: '12px',
    fontSize: '13px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#fff',
    borderBottom: 'solid 2px #fff',
    '&:hover': {
      textDecoration: 'none',
    },
  }

});

const HomeBanner = () => {
  const classes = useStyles();

  const PrevArrow = (props) => (
    <button {...props} type= "button" className={classes.leftBtn}>
      <Arrow className={classes.arrow} />
    </button>
  );
  
  const NextArrow = (props) => (
    <button {...props} type= "button" className={classes.rightBtn}>
      <Arrow className={classes.arrow} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return(
    <Slider {...settings}>
      <div className={classes.container}>
        <div className={classes.banner}>
          <h1 className={classes.title}>Perfume Tips Tricks</h1>
          <Link href="/shop" className={classes.btn}>Shop now</Link>
        </div>
        <img className={classes.img} src="images/slider.png" alt="slider" />
      </div>
      <div className={classes.container}>
        <div className={classes.banner}>
          <h1 className={classes.title}>Perfume Tips Tricks</h1>
          <Link href="/shop" className={classes.btn}>Shop now</Link>
        </div>
        <img  className={classes.img} src="images/slider2.png" alt="slider2" />
      </div>
    </Slider>
  )
}

export default HomeBanner;