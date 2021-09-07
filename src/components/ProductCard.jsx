import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import QuickView from './QuickView';

const propTypes = {
  className: PropTypes.string,
  product: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    isNew: PropTypes.bool,
  }).isRequired,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  card: {
    position: 'relative',
    textDecoration: 'none',
    color: '#33333a',
    transition: '0.3s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      '& $btn': {
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
    fontWeight: 'normal',
  },
  price: {
    fontSize: '14px',
    fontWeight: 'normal',
  },
  btn: {
    visibility: 'hidden',
    position: 'absolute',
    width: '180px',
    textAlign: 'center',
    padding: '16.5px 0',
    bottom: '45%',
    right: '42px',
    left: '42px',
    fontSize: '12px',
    letterSpacing: '2px',
    backgroundColor: '#33333a',
    cursor: 'pointer',
    color: '#fff',
    transition: '0.3s all ease',
  },
});

const ProductCard = (props) => {
  const { className, product } = props;
  const { id, title, image, price, isNew } = product;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={cn(classes.card, className)}>
      {isNew && <span className={classes.new}>new</span>}
      <img className={classes.img} src={image} alt={title} />
      <h3 className={classes.title}>{title}</h3>
      <span className={classes.price}>{price}</span>
      <button type="button" className={classes.btn} onClick={handleOpen}>
        QUICK VIEW
      </button>
      <QuickView open={open} onClose={handleClose} id={id} />
    </div>
  );
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;
