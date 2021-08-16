import React from 'react';
import { makeStyles } from '@material-ui/core';
import BigArticle from './BigArticle';
import SmallArticle from './SmallArticle';
import articles from '../../../constants/articles';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    padding: '60px 0',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  title: {
    marginBottom: '24px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
  },
  btn: {
    margin: '0 auto',
    padding: '8px 20px',
    width: '172px',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    backgroundColor: '#33333a',
    border: 'none',
    cursor: 'pointer',
    color: '#fff',
  },
  small: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '555px',
  },
});

const Explore = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Explore</h1>
      <div className={classes.wrapper}>
        <BigArticle article={articles[0]} />
        {articles.length > 1 &&
          <div className={classes.small}>
            {articles.slice(1, 5).map(article => (
              <SmallArticle key={article.id} article={article} />
            ))}
          </div>
        }
      </div>

      <button type="button" className={classes.btn}>See the journal</button>
    </div>
  )
}

export default Explore;