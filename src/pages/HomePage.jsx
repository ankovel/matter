import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/Home/HomeBanner/HomeBanner';
import ProductCard from '../components/Home/ProductCard/ProductCard';
import AboutMatter from '../components/Home/AboutMatter/AboutMatter';
import Explore from '../components/Home/Explore/Explore';
import Shop from '../components/Home/Shop/Shop';
import Videos from '../components/Home/Videos/Videos';
import categories from '../constants/categories';
import products from '../constants/products';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
  },
  products: {
    backgroundColor: '#fcfcfc',
    padding: '60px 0',
  },
  about: {
    paddingTop: '62px',
  },
  explore: {
    backgroundColor: '#fcfcfc',
  },
  title: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
    color: '#33333a',
  },
  wrapper: {
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
  shop: {
    padding: '62px 0',
  },
  videos: {
    backgroundColor: '#fcfcfc',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HomeBanner />
      <div className={classes.products}>
        <Main>
          <h1 className={classes.title}>Featured</h1>
          <div className={classes.wrapper}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                className={classes.card}
                image={product.image}
                title={product.title}
                price={product.price}
                isNew={product.isNew}
                href="/shop"
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.about}>
        <Main>
          <AboutMatter />
        </Main>
      </div>
      <div className={classes.explore}>
        <Main>
          <Explore />
        </Main>
      </div>
      <div className={classes.shop}>
        <Main>
          <h1 className={classes.title}>Shop</h1>
          <div className={classes.wrapper}>
            {categories.map((category) => (
              <Shop
                key={category.id}
                className={classes.card}
                title={category.title}
                image={category.image}
                href="/shop"
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.videos}>
        <Main>
          <Videos />
        </Main>
      </div>
    </div>
  );
};

export default HomePage;
