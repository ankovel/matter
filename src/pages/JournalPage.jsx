import React from 'react';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import FilterSelect from '../components/Journal/FilterSelect';
import SmallArticle from '../components/Home/Explore/SmallArticle';
import BigArticle from '../components/Home/Explore/BigArticle';
import articles from '../constants/articles';
import Loading from '../components/Shop/Loading';

const useStyles = makeStyles({
  header: {
    padding: '20px 0',
    boxShadow: 'rgb(0 0 0 / 0%) 0px 14px 28px, rgb(0 0 0 / 7%) 0px 10px 10px',
  },
  wrapper: {
    padding: '20px 0 40px',
  },
  journal: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '60px',
  },
  imageWrapper: {
    padding: '20px',
    position: 'absolute',
    zIndex: '1',
    color: '#fff',
  },
  story: {
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  imageTitle: {
    margin: '20px 0',
    fontSize: '30px',
    fontWeight: 'normal',
  },
  imageText: {
    width: '515px',
    marginBottom: '300px',
    lineHeight: 1.56,
    fontSize: '16px',
  },
  img: {
    width: '49%',
    filter: 'brightness(0.6)',
  },
  category: {
    width: '49%',
  },
  popular: {
    marginBottom: '20px',
    fontSize: '20px',
    fontWeight: 'normal',
  },
  item: {
    position: 'relative',
    padding: '0 0 20px 40px',
    borderBottom: 'solid 2px #f3f3f3',
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: 0,
      border: 'none',
    },
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    fontWeight: 'normal',
    color: '#000',
  },
  text: {
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '300',
  },
  date: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
    marginBottom: '20px',
    position: 'relative',
    marginRight: '10px',
    whiteSpace: 'pre-wrap',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '2px',
      left: '90px',
      bottom: '7px',
      borderRadius: '50%',
      backgroundColor: '#33333a',
    },
  },
  number: {
    position: 'absolute',
    fontSize: '24px',
    left: 0,
    top: 0,
  },
  articleBlock: {
    display: 'grid',
  },
  articles: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  small: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '555px',
  },
  smallMore: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  loading: {
    margin: '0 auto',
  },
});

const JournalPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Main>
          <FilterSelect />
        </Main>
      </div>
      <div className={classes.wrapper}>
        <Main>
          <div className={classes.journal}>
            <div className={classes.imageWrapper}>
              <span className={classes.story}>Featured story</span>
              <h3 className={classes.imageTitle}>
                Lasik Eye Surgery Are You Ready
              </h3>
              <p className={classes.imageText}>
                As a voice for conscious fashion, Raye Padit is motivated by the
                belief that one person’s actions, no matter how small, holds
                great impact. This core ideal has driven him to start his three
                passion projects: Connected Threads Asia, PeyaR, and Swagalls.
              </p>
              <span className={classes.date}>FIELDTESTED JANUARY 19, 2017</span>
            </div>
            <img
              className={classes.img}
              src="images/journalImage.png"
              alt="journalImage"
            />
            <div className={classes.category}>
              <h3 className={classes.popular}>Popular</h3>
              <div className={classes.item}>
                <span className={classes.number}>01</span>
                <h2 className={classes.title}>Six Pack Abs The Big Picture</h2>
                <p className={classes.text}>
                  Millions of Americans turn to Lasik Surgery when their vision
                  is less than perfect and they’re tired of being tied down to
                  wearing glasses or …
                </p>
                <span className={classes.date}>
                  FIELDTESTED JANUARY 19, 2017
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.number}>02</span>
                <h2 className={classes.title}>
                  Night Creams Will Help Your Skin To Relax Become Younger
                </h2>
                <p className={classes.text}>
                  Millions of Americans turn to Lasik Surgery when their vision
                  is less than perfect and they’re tired of being tied down to
                  wearing glasses or …
                </p>
                <span className={classes.date}>
                  FIELDTESTED JANUARY 19, 2017
                </span>
              </div>
              <div className={classes.item}>
                <span className={classes.number}>03</span>
                <h2 className={classes.title}>
                  Natural Beauty From Natural Ingredients
                </h2>
                <p className={classes.text}>
                  Millions of Americans turn to Lasik Surgery when their vision
                  is less than perfect and they’re tired of being tied down to
                  wearing glasses or …
                </p>
                <span className={classes.date}>
                  FIELDTESTED JANUARY 19, 2017
                </span>
              </div>
            </div>
          </div>
          <div className={classes.articleBlock}>
            <div className={classes.articles}>
              <BigArticle article={articles[0]} />
              {articles.length > 1 && (
                <div className={classes.small}>
                  {articles.slice(1, 5).map((article) => (
                    <SmallArticle key={article.id} article={article} />
                  ))}
                </div>
              )}
            </div>
            {articles.length > 1 && (
              <div className={classes.smallMore}>
                {articles.slice(5, 9).map((article) => (
                  <SmallArticle key={article.id} article={article} />
                ))}
              </div>
            )}
            <Loading className={classes.loading} />
          </div>
        </Main>
      </div>
    </div>
  );
};

export default JournalPage;
