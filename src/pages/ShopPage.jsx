import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import Banner from '../components/Shop/Banner';
import Select from '../components/Shop/Select';
import ProductCard from '../components/Home/ProductCard';
import products from '../constants/products';
import Navigation from '../components/Shop/Navigation';
import Loading from '../components/Shop/Loading';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: 'rgb(0 0 0 / 0%) 0px 14px 28px, rgb(0 0 0 / 5%) 0px 10px 10px',
  },
  select: {
    display: 'flex',
    alignItems: 'center',
  },
  women: {
    fontSize: '18px',
    fontWeight: 'normal',
  },
  sort: {
    marginRight: '25px',
    fontSize: '24px',
    fontWeight: 'normal',
    color: '#333',
  },
  categories: {
    padding: '40px 0 60px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navigation: {
    width: '23%',
  },
  wrapper: {
    width: '75%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '31%',
    marginTop: '40px',
    '&:nth-child(-n+3)': {
      marginTop: 0,
    },
  },
  loading: {
    margin: '40px auto 0',
  },
});

const ShopPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Banner />
      <div className={classes.header}>
        <Main>
          <p className={classes.women}>Women</p>
          <div className={classes.select}>
            <p className={classes.sort}>Sort by</p>
            <Select />
          </div>
        </Main>
      </div>
      <div className={classes.categories}>
        <Main>
          <div className={classes.content}>
            <Navigation className={classes.navigation} />
            <div className={classes.wrapper}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  className={classes.card}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  isNew={product.isNew}
                />
              ))}
              <Loading className={classes.loading} />
            </div>
          </div>
        </Main>
      </div>
    </div>
  );
};

export default ShopPage;
