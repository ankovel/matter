import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import Banner from '../components/Shop/Banner';
import Select from '../components/Shop/Select';
import Categories from '../components/Shop/Caregories';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  select: {
    display: 'flex',
    alignItems: 'center',
  },
  women: {
    fontSize: '18px',
    fontWeight: '600',
  },
  sort: {
    marginRight: '25px',
    fontSize: '24px',
    fontWeight: '600',
    color: '#333',
  },
  categories: {
    backgroundColor: '#f3f3f3',
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
          <Categories />
        </Main>
      </div>
    </div>
  );
};

export default ShopPage;
