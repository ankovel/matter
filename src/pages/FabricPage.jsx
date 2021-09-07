import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import articles from '../constants/articles';
import FabricArticle from '../components/Fabric/FabricArticle';
import FabricCard from '../components/Fabric/FabricCard';
import fabrics from '../constants/fabrics';
import FabricMap from '../components/Fabric/FabricMap';

const useStyles = makeStyles({
  container: {
    padding: '65px 0',
  },
  fabrics: {
    display: 'flex',
    height: '560px',
    marginBottom: '67px',
  },
  title: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: 'normal',
    color: '#33333a',
    boxShadow: 'rgb(0 0 0 / 0%) 0px 14px 28px, rgb(0 0 0 / 7%) 0px 10px 10px',
  },
  card: {
    width: '43%',
    overflowY: 'scroll',
    padding: '20px 20px 10px 90px',
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.03) 50%)',
    '&::-webkit-scrollbar': {
      webkitAppearance: 'none',
      width: '7px',
    },
    '&::-webkit-scrollbar-thumb ': {
      borderRadius: '4px',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      webkitBoxShadow: '0 0 1px rgba(255, 255, 255, .5)',
    },
  },
  explore: {
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
});

const FabricPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Our Techniques</h1>
      <div className={classes.fabrics}>
        <div className={classes.card}>
          {fabrics.map((fabric) => (
            <FabricCard key={fabric.id} fabric={fabric} />
          ))}
        </div>
        <FabricMap />
      </div>
      <Main>
        <h2 className={classes.explore}>Explore</h2>
        <div className={classes.wrapper}>
          {articles.slice(0, 6).map((article) => (
            <FabricArticle key={article.id} article={article} />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default FabricPage;
