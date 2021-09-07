import React from 'react';
import { makeStyles, Link } from '@material-ui/core';
import Main from '../components/Main/Main';
import ProductCard from '../components/ProductCard';
import products from '../constants/products';

const useStyles = makeStyles({
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
