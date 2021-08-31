import React from 'react';
import { makeStyles } from '@material-ui/core';
import HeaderNav from './HeaderNav';
import HeaderIcon from './HeaderIcon';
import Main from '../Main/Main';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0',
    borderBottom: 'solid 1px #f3f3f3',
    backgroundColor: '#fcfcfc',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Main>
        <HeaderNav />
        <HeaderIcon />
      </Main>
    </div>
  )
}

export default Header;