import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#33333a',
  },
  item: {
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  new: {
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

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Link href="/" className={classes.link}> 
      <div className={classes.item}>
        <span className={classes.new}>new</span>
      </div>
        <img className={classes.img} src="images/product.png" alt="product" />
        <h3 className={classes.title}>Pueraria Mirifica And Study Phyto Estrogens</h3>
        <span className={classes.price}>$599.00</span>
    </Link>
  )
}

export default ProductCard;