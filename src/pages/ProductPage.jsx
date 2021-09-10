import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { ExpandMore } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import Main from '../components/Main/Main';
import ProductCard from '../components/ProductCard';
import products from '../constants/products';
import Product from '../components/Product';
import Button from '../components/Button';

const useStyles = makeStyles({
  header: {
    padding: '20px 0',
    boxShadow: 'rgb(0 0 0 / 3%) 0px 14px 28px, rgb(0 0 0 / 3%) 0px 10px 10px',
  },
  categories: {
    display: 'flex',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#33333a',
    '&:hover': {
      color: '#ff6008',
    },
  },
  arrow: {
    marginRight: '5px',
    fontSize: '20px',
    transform: 'rotate(-90deg)',
  },
  comeback: {
    fontSize: '18px',
    fontWeight: 'normal',
    letterSpacing: '1px',
  },
  info: {
    padding: '60px 0 80px',
  },
  description: {
    width: '52%',
    margin: '0 auto',
    padding: '16px 0 60px',
    textAlign: 'justify',
  },
  text1: {
    marginBottom: '40px',
    textAlign: 'justify',
    fontSize: '16px',
    color: '#666',
  },
  text2: {
    fontSize: '16px',
  },
  images: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageItem: {
    transition: '0.4s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      color: '#ff6008',
    },
  },
  titleImage: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '18px',
  },
  item: {
    padding: '60px 0',
    backgroundColor: '#fcfcfc',
  },
  text3: {
    width: '52%',
    margin: '0 auto',
    fontSize: '16px',
  },
  wrapper: {
    padding: '60px 0',
  },
  title: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
    color: '#33333a',
  },
  instagram: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    transition: '0.4s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
      color: '#ff6008',
    },
  },
  feedBack: {
    padding: '60px 0',
    backgroundColor: '#fcfcfc',
  },
  writeReview: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textThoughts: {
    fontSize: '12px',
    color: '#666',
  },
  cartBtn: {
    width: '170px',
    marginLeft: '20px',
  },
  reviews: {
    width: '52%',
    margin: '0 auto',
  },
  textReviews: {
    marginTop: '15px',
    fontSize: '16px',
  },
  ratingWrapper: {
    marginBottom: '15px',
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
  userName: {
    fontSize: '16px',
  },
  date: {
    color: '#666',
  },
  moreReviews: {
    fontSize: '12px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: '#ff5e1b',
  },
  products: {
    padding: '60px 0',
  },
  productsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '23%',
    marginTop: '40px',
    '&:nth-child(-n+4)': {
      marginTop: 0,
    },
  },
});

const ProductPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Main>
          <div className={classes.categories}>
            <NavLink to="/shop" className={classes.navLink}>
              <p className={classes.comeback}>Women</p>
              <ExpandMore className={classes.arrow} />
            </NavLink>
            <NavLink to="/shop" className={classes.navLink}>
              <p className={classes.comeback}>Pants</p>
              <ExpandMore className={classes.arrow} />
            </NavLink>
            <NavLink to="/shop" className={classes.navLink}>
              <p className={classes.comeback}> The Sideswept Dhoti</p>
            </NavLink>
          </div>
        </Main>
      </div>
      <Product />
      <div className={classes.info}>
        <img src="/matter/images/productImage.png" alt="productImage" />
        <div className={classes.description}>
          <p className={classes.text1}>
            I have taste grilled meats around the world. Before i will guide you
            to the various technologies (gas barbecues, charcoal barbecues,
            Mongolian, sauces, recipes ) i will tell you about the Greek way.
          </p>
          <p className={classes.text2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Main>
          <div className={classes.images}>
            <div className={classes.imageItem}>
              <img
                src="https://i.postimg.cc/tJpF6Ccf/Rectangle-r.png"
                alt="productImage"
              />
              <p className={classes.titleImage}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={classes.imageItem}>
              <img
                src="https://i.postimg.cc/13fwwdW9/Rectangle-k.png"
                alt="productImage"
              />
              <p className={classes.titleImage}>Lorem ipsum dolor sit amet</p>
            </div>
            <div className={classes.imageItem}>
              <img
                src="https://i.postimg.cc/CK886qTX/Rectangle-l.png"
                alt="productImage"
              />
              <p className={classes.titleImage}>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </Main>
      </div>
      <div className={classes.item}>
        <p className={classes.text3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>As Seen On Instagram</h1>
        <Main>
          <div className={classes.instagram}>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://i.postimg.cc/zvZttcDh/inst1.png"
                alt="productInst"
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://i.postimg.cc/MTkmqjk2/inst2.png"
                alt="productInst"
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://i.postimg.cc/L6ykhWdV/inst3.png"
                alt="productInst"
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={classes.link}
            >
              <img
                src="https://i.postimg.cc/FRQ325ch/inst4.png"
                alt="productInst"
              />
            </Link>
          </div>
        </Main>
      </div>
      <div className={classes.feedBack}>
        <h1 className={classes.title}>Customer Reviews</h1>
        <div className={classes.reviews}>
          <div className={classes.writeReview}>
            <p className={classes.textThoughts}>
              Share your thoughts with other customers
            </p>
            <Button variant="black" className={classes.cartBtn}>
              WRITE A REVIEW
            </Button>
          </div>
          <div className={classes.ratingWrapper}>
            <div className={classes.rating}>
              <Rating
                className={classes.ratingStars}
                defaultValue={1}
                precision={0.5}
              />
              <span className={classes.ratingNumb}>4.8 of 5</span>
            </div>
            <p className={classes.textReviews}>Top Customers Reviews</p>
          </div>
          <div className={classes.ratingWrapper}>
            <div className={classes.rating}>
              <Rating
                className={classes.ratingStars}
                defaultValue={1}
                precision={0.5}
              />
              <span className={classes.ratingNumb}>4.8 of 5</span>
            </div>
            <p className={classes.userName}>
              Customer Name{' '}
              <span className={classes.date}>on February 18, 2017</span>
            </p>
            <p className={classes.textReviews}>
              Millions of Americans turn to Lasik Surgery when their vision is
              less than perfect and they’re tired of being tied down to wearing
              glasses or contacts. What part of the eye is it that may be
              causing all your vision trouble? Your cornea! When the shape of
              your cornea is irregular, the image on your retina is blurry and
              out-of-focus. The cornea is a part of your eye that works to focus
              light and projects an image on the retina. This focusing of light
              is called refraction. The 3 main types of refractive errors are
              myopia (nearsightedness), hyperopia (farsightedness) and
              astigmatism.
            </p>
          </div>
          <Link className={classes.moreReviews} to="/">
            Show more reviews
          </Link>
        </div>
      </div>
      <div className={classes.products}>
        <Main>
          <h1 className={classes.title}>You May Also Like</h1>
          <div className={classes.productsWrapper}>
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                className={classes.card}
                product={product}
              />
            ))}
          </div>
        </Main>
      </div>
    </div>
  );
};

export default ProductPage;
