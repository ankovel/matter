import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/HomeBanner/HomeBanner';

const useStyles = makeStyles({
  wrapper: {},
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <HomeBanner />
      <Main>
        <div>hello</div>
      </Main>
    </div>
  );
};

export default HomePage;
