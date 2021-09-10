import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import {
  makeStyles,
  Tooltip,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { Facebook, Twitter } from '../icons';
import ProductSlider from './ProductSlider';
import RadioSize from './RadioSize';
import Button from './Button';
import Counter from './Counter';
import Wishlist from './Wishlist';
import Main from './Main/Main';

const useStyles = makeStyles({
  content: {
    display: 'flex',
    height: 'calc(100% - 108px)',
    justifyContent: 'space-between',
    paddingTop: '40px',
  },
  sliderWrapper: {
    margin: 0,
    maxWidth: '70%',
    height: '100%',
    overflow: 'hidden',
  },
  slider: {
    width: '94%',
  },
  share: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  textShare: {
    marginRight: '10px',
    fontSize: '16px',
    color: '#666',
  },
  icon: {
    padding: '5px',
    borderRadius: '50%',
    backgroundColor: '#d6d6d6',
    color: '#33333a',
  },
  fb: {
    marginRight: '15px',
    transition: '0.4s all ease',
    '&:hover': {
      transform: 'scale(1.5)',
      backgroundColor: 'transparent',
      color: '#4867aa',
    },
  },
  tw: {
    '&:hover': {
      transform: 'scale(1.5)',
      backgroundColor: 'transparent',
      color: '#28a9e0',
      transition: '0.4s all ease',
    },
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
  features: {
    marginTop: '20px',
  },
  root: {
    padding: 0,
  },
  subRoot: {
    flexDirection: 'column',
    padding: 0,
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
        <div className={classes.sliderWrapper}>
          <ProductSlider className={classes.slider} />
          <div className={classes.share}>
            <p className={classes.textShare}>Share this product</p>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className={classes.icons}
            >
              <Facebook className={cn(classes.icon, classes.fb)} />
            </Link>

            <Link
              href="https://twitter.com/"
              target="_blank"
              className={classes.icons}
            >
              <Twitter className={cn(classes.icon, classes.tw)} />
            </Link>
          </div>
        </div>
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
          <Accordion className={classes.features}>
            <AccordionSummary
              className={classes.summary}
              classes={{ root: classes.root }}
              expandIcon={<Add className={classes.icon} />}
            >
              <h3>Features</h3>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.subRoot }}>
              <p>
                Gently curved waistband
                <br />
                Long self fabric waist belt
                <br />
                Seamless side profile
                <br />
                Back welt pocket with button
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.fabrics}>
            <AccordionSummary
              classes={{ root: classes.root }}
              expandIcon={<Add className={classes.icon} />}
            >
              <h3>Fabric Care</h3>
            </AccordionSummary>
            <AccordionDetails classes={{ root: classes.subRoot }}>
              <div>
                <h4>Fabric Notes</h4>
                <p>
                  Hand block printed with azo-free dyes. 90% Cotton 10% linen.
                </p>
              </div>
              <div>
                <h4>Care Instructions</h4>
                <p>
                  Keep this garment separate in the first few washes to prevent
                  colour runs. When washed garment runs clear, you can throw it
                  into the machine with other like-coloured clothing. Always use
                  delicate machine wash with cold water, or handwash cold for
                  best results. Do not tumble dry. Line dry inside out. Iron
                  inside out using a low-temperature setting.
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Main>
  );
};

export default Product;
