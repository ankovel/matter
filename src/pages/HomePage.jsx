import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/Home/HomeBanner/HomeBanner';
import ProductCard from '../components/Home/ProductCard/ProductCard';
import AboutMatter from '../components/Home/AboutMatter/AboutMatter';
import Explore from '../components/Home/Explore/Explore';
import Shop from '../components/Home/Shop/Shop';
import categories from '../constants/categories';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
  },
  products: {
    backgroundColor: '#fcfcfc',
    padding: '62px 0',
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '23%',
  },
  shop: {
    padding: '62px 0',
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
            <ProductCard className={classes.card} />
            <ProductCard className={classes.card} />
            <ProductCard className={classes.card} />
            <ProductCard className={classes.card} />
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
    </div>
  );
};

export default HomePage;
