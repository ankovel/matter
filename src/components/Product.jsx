import React, { useState, useEffect } from 'react';
import { makeStyles, Tooltip } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import ProductSlider from './ProductSlider';
import RadioSize from './RadioSize';
import Button from './Button';
import Counter from './Counter';
import Wishlist from './Wishlist';
import Main from './Main/Main';

const useStyles = makeStyles({
  paper: {
    margin: 0,
    maxWidth: '70%',
    height: '100%',
    overflow: 'hidden',
  },
  content: {
    display: 'flex',
    height: 'calc(100% - 108px)',
    justifyContent: 'space-between',
    padding: '16px 24px 24px',
  },
  slider: {
    width: '45%',
  },
  info: {
    width: '53%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '10px',
    borderBottom: 'solid 2px #f3f3f3',
  },
  price: {
    fontSize: '24px',
    fontWeight: 400,
    color: '#ff6008',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingStars: {
    marginRight: '10px',
    fontSize: '25px',
    color: '#ff6008',
  },
  ratingNumb: {
    fontSize: '16px',
    color: '#666',
  },
  infoProduct: {
    padding: '10px 0',
    borderBottom: 'solid 2px #f3f3f3',
  },
  description: {
    width: '52%',
    fontSize: '18px',
    fontWeight: '600',
  },
  text: {
    margin: '10px 0',
    textAlign: 'justify',
    fontSize: '16px',
    color: '#666',
  },
  btnMore: {
    padding: '0',
    fontSize: '12px',
    fontWeight: 'normal',
    border: 'none',
    letterSpacing: '2px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  company: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: 'solid 2px #f3f3f3',
  },
  collab: {
    width: '48%',
    fontSize: '16px',
    color: '#666',
  },
  label: {
    margin: '10px 0',
    fontSize: '12px',
    letterSpacing: '1px',
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  radio: {
    display: 'flex',
    alignItems: 'center',
  },
  radioSize: {
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  tooltip: {
    width: '500',
    height: '150px',
  },
  guidelines: {
    marginLeft: 'auto',
    cursor: 'default',
    fontSize: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  helper: {
    fontSize: '12px',
    color: '#666',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartBtn: {
    width: '180px',
  },
  btn: {
    width: '302px',
    margin: '0 auto',
  },
});

const Product = () => {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [selectedValue, setSelectedValue] = useState('XS');
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike((prevValue) => !prevValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <div className={classes.content}>
        <ProductSlider className={classes.slider} />
        <div className={classes.info}>
          <h1 className={classes.title}>
            The Sideswept Dhoti + Bottom Line Grey (Silk)
          </h1>
          <div className={classes.item}>
            <span className={classes.price}>SGD 139.90 </span>
            <div className={classes.rating}>
              <Rating
                className={classes.ratingStars}
                defaultValue={1}
                precision={0.5}
              />
              <span className={classes.ratingNumb}>4.8 of 5</span>
            </div>
          </div>
          <div className={classes.infoProduct}>
            <h2 className={classes.description}>Description</h2>
            <p className={classes.text}>
              Inspired by the continuous length of the lunghi or sarong seen in
              hot climates everywhere from South Asia to the Horn of Africa and
              southern Arabian pen…
            </p>
            <button type="button" className={classes.btnMore}>
              SEE MORE
            </button>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>Artisan Employment</h2>
            <span className={classes.collab}>54 jobs</span>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>Partnership</h2>
            <span className={classes.collab}>Randall Armstrong</span>
          </div>
          <div className={classes.company}>
            <h2 className={classes.description}>In Collab</h2>
            <span className={classes.collab}>Augusta Mendoza</span>
          </div>
          <h3 className={classes.label}>size</h3>
          <div className={classes.radio}>
            <RadioSize
              className={classes.radioSize}
              onChange={setSelectedValue}
              value={selectedValue}
              label="XS"
            />
            <RadioSize
              className={classes.radioSize}
              onChange={setSelectedValue}
              value={selectedValue}
              label="S"
            />
            <RadioSize
              className={classes.radioSize}
              onChange={setSelectedValue}
              value={selectedValue}
              label="M"
            />
            <RadioSize
              className={classes.radioSize}
              onChange={setSelectedValue}
              value={selectedValue}
              label="L"
            />
            <RadioSize
              className={classes.radioSize}
              onChange={setSelectedValue}
              value={selectedValue}
              label="XL"
            />
            <Tooltip
              title={
                <img
                  src="./images/size.png"
                  alt="Size Guidelines"
                  className={classes.tooltip}
                />
              }
            >
              <span className={classes.guidelines}>Size Guidelines</span>
            </Tooltip>
          </div>
          <p className={classes.helper}>
            Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.
          </p>
          <h3 className={classes.label}>Quantity</h3>
          <div className={classes.wrapper}>
            <Counter
              className={classes.counter}
              value={count}
              onChange={setCount}
            />
            <Button variant="black" className={classes.cartBtn}>
              Add To Cart
            </Button>
            <Wishlist
              checked={like}
              onChange={toggleLike}
              className={classes.whitelist}
            />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Product;
