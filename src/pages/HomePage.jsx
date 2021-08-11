import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import ProductCard from '../components/ProductCard/ProductCard';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fcfcfc',
  },
  wrapper: {
    marginTop: '62px',
  },
  title: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '46px',
    fontWeight: 'normal',
    color: '#33333a',
  },
  product: {
    width: '263px',
  },
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HomeBanner />
      <Main>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Featured</h1>
          <div className={classes.product}>
            <ProductCard />
          </div>
        </div>
      </Main>
    </div>
  );
};

export default HomePage;
