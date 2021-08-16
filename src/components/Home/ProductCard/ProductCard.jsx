import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#33333a',
  },
  item: {
    position: 'relative',
    top: '10px',
    left: '10px',
  },
  new: {
    position: 'absolute',
    padding: '0 7px',
    fontSize: '12px',
    textTransform: 'uppercase',
    backgroundColor: '#ff6008',
    color: '#fff',
  },
  img: {
    marginBottom: '12px',
  },
  title: {
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'normal',
  },
  price: {
    fontSize: '14px',
  }
});

const ProductCard = (props) => {
  const { className } = props;
  const classes = useStyles();

  return (
    <Link to="/" className={cn(classes.link, className)}> 
      <div className={classes.item}>
        <span className={classes.new}>new</span>
      </div>
        <img className={classes.img} src="images/product.png" alt="product" />
        <h3 className={classes.title}>Pueraria Mirifica And Study Phyto Estrogens</h3>
        <span className={classes.price}>$599.00</span>
    </Link>
  )
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;