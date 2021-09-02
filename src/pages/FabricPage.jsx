import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import articles from '../constants/articles';
import FabricArticle from '../components/Fabric/FabricArticle';

const useStyles = makeStyles({
  container: {
    padding: '65px 0',
  },
  title: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: 'normal',
    color: '#33333a',
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
      <Main>
        <div>
          <h1 className={classes.title}>Our Techniques</h1>
        </div>
        <h2 className={classes.explore}>Explore</h2>
        <div className={classes.wrapper}>
          {articles.slice(0, 6).map((article) => (
            <FabricArticle
              key={article.id}
              className={classes.card}
              article={article}
            />
          ))}
        </div>
      </Main>
    </div>
  );
};

export default FabricPage;
