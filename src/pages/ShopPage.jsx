import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import Banner from '../components/Shop/Banner/Banner';

const useStyles = makeStyles({
  banner: {
    height: '600px',
    backgroundImage: 'url(images/ShopBanner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'opacity(0.8)',
  },
});

const ShopPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <Main>
          <Banner />
        </Main>
      </div>
    </div>
  );
};

export default ShopPage;
