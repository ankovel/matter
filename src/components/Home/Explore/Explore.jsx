import React from 'react';
import { makeStyles } from '@material-ui/core';
import BigArticle from './BigArticle';
import SmallArticle from './SmallArticle';
import Button from '../../Main/Button';
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
    width: '174px',
    margin: '0 auto',
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

      <Button variant="black" className={classes.btn}>See the journal</Button>
    </div>
  )
}

export default Explore;