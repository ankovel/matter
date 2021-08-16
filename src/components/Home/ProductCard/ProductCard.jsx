import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

const defaultProps = {
  className: '',
  isNew: false,
};

const useStyles = makeStyles({
  link: {
    position: 'relative',
    textDecoration: 'none',
    color: '#33333a',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      '& $view': {
        visibility: 'visible',
        bottom: '53%',
      },
      '& $img': {
        filter: 'opacity(0.5)',
      },
    },
  },
  new: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    padding: '0 7px',
    fontSize: '12px',
    textTransform: 'uppercase',
    backgroundColor: '#ff6008',
    color: '#fff',
    zIndex: 1,
  },
  img: {
    width: '100%',
    height: '390px',
    marginBottom: '12px',
    transition: '0.3s all ease',
  },
  title: {
    marginBottom: '5px',
    fontSize: '16px',
  },
  price: {
    fontSize: '14px',
    fontWeight: '600',
  },
  view: {
    visibility: 'hidden',
    position: 'absolute',
    textAlign: 'center',
    padding: '16.5px 0',
    bottom: '45%',
    right: '42px',
    left: '42px',
    fontSize: '12px',
    letterSpacing: '2px',
    backgroundColor: '#33333a',
    color: '#fff',
    transition: '0.3s all ease',
  },
});

const ProductCard = (props) => {
  const { className, image, title, price, href, isNew } = props;
  const classes = useStyles();

  return (
    <Link to={href} className={cn(classes.link, className)}> 
      {isNew && <span className={classes.new}>new</span>}
      <img className={classes.img} src={image} alt={title} />
      <h3 className={classes.title}>{title}</h3>
      <span className={classes.price}>{price}</span>
      <span className={classes.view}>QUICK VIEW</span>
    </Link>
  )
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;