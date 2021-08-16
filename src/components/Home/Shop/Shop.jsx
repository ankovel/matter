import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  link: {
    position: 'relative',
    textDecoration: 'none',
    color: '#33333a',
    '&:hover': {
      '& $now': {
        visibility: 'visible',
        bottom: '40%',
      },
      '& $img': {
        filter: 'brightness(0.8)',
      },
      '& $title': {
        visibility: 'hidden',
      },
    },
  },
  title: {
    visibility: 'visible',
    position: 'absolute',
    textAlign: 'center',
    padding: '12px 0',
    bottom: '60px',
    left: '0',
    right: '0',
    fontSize: '18px',
    backgroundColor: '#fff',
    color: '#030303',
    zIndex: 1,
  },
  img: {
    width: '100%',
    transition: '0.3s all ease',
  },
  now: {
    visibility: 'hidden',
    position: 'absolute',
    textAlign: 'center',
    padding: '11.5px 0',
    bottom: '15%',
    left: '42px',
    right: '42px',
    backgroundColor: '#33333a',
    color: '#fff',
    fontSize: '12px',
    letterSpacing: '2px',
    transition: '0.3s all ease',
  },
});

const Shop = (props) => {
  const { className, title, image, href } = props;
  const classes = useStyles();

  return (
    <Link to={href} className={cn(className, classes.link)}> 
      <span className={classes.title}>{title}</span>
      <img className={classes.img} src={image} alt={title} />
      <span className={classes.now}>SHOP NOW</span>
    </Link>
  )
};

Shop.propTypes = propTypes;
Shop.defaultProps = defaultProps;

export default Shop;