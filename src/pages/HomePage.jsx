import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import ProductCard from '../components/Home/ProductCard/ProductCard';
import AboutMatter from '../components/Home/AboutMatter/AboutMatter';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
  },
  products: {
    backgroundColor: '#fcfcfc',
  },
  wrapper: {
    padding: '62px 0',
    marginBottom: '62px',
  },
  title: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
    color: '#33333a',
  },
  product: {
    position: 'relative',
    width: '263px',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HomeBanner />
      <div className={classes.products}>
        <Main>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>Featured</h1>
            <div className={classes.product}>
              <ProductCard />
            </div>
          </div>
        </Main>
      </div>
      <div className={classes.about}>
        <Main>
          <AboutMatter />
        </Main>
      </div>
    </div>
  );
};

export default HomePage;
