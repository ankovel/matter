import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Main from '../components/Main/Main';
import HomeBanner from '../components/Home/HomeBanner';
import ProductCard from '../components/ProductCard';
import AboutMatter from '../components/Home/AboutMatter';
import ShopCard from '../components/Home/ShopCard';
import Videos from '../components/Home/Videos';
import Magazine from '../components/Home/Magazine';
import categories from '../constants/categories';
import products from '../constants/products';
import BigArticle from '../components/Home/BigArticle';
import SmallArticle from '../components/Home/SmallArticle';
import articles from '../constants/articles';
import Button from '../components/Button';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#fff',
  },
  products: {
    backgroundColor: '#fcfcfc',
    padding: '60px 0',
  },
  about: {
    padding: '62px 0',
  },
  explore: {
    display: 'grid',
    padding: '60px 0',
    backgroundColor: '#fcfcfc',
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
  title: {
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
  card: {
    width: '23%',
    marginTop: '40px',
    '&:nth-child(-n+4)': {
      marginTop: 0,
    },
  },
  shop: {
    padding: '62px 0',
  },
  videos: {
    backgroundColor: '#fcfcfc',
  },
  magazine: {
    padding: '60px 0',
  },
});

const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToJournal = () => {
    history.push('/journal');
  };

  return (
    <div className={classes.container}>
      <HomeBanner />
      <div className={classes.products}>
        <Main>
          <h1 className={classes.title}>Featured</h1>
          <div className={classes.wrapper}>
            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                className={classes.card}
                image={product.image}
                title={product.title}
                price={product.price}
                isNew={product.isNew}
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.about}>
        <Main>
          <h1 className={classes.title}>About Matter</h1>
          <AboutMatter />
        </Main>
      </div>
      <div className={classes.explore}>
        <Main>
          <h1 className={classes.title}>Explore</h1>
          <div className={classes.wrapper}>
            <BigArticle article={articles[0]} />
            {articles.length > 1 && (
              <div className={classes.small}>
                {articles.slice(1, 5).map((article) => (
                  <SmallArticle key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
          <Button variant="black" className={classes.btn} onClick={goToJournal}>
            See the journal
          </Button>
        </Main>
      </div>
      <div className={classes.shop}>
        <Main>
          <h1 className={classes.title}>Shop</h1>
          <div className={classes.wrapper}>
            {categories.map((category) => (
              <ShopCard
                key={category.id}
                className={classes.card}
                title={category.title}
                image={category.image}
                href="/shop"
              />
            ))}
          </div>
        </Main>
      </div>
      <div className={classes.videos}>
        <Main>
          <Videos />
        </Main>
      </div>
      <div className={classes.magazine}>
        <Main>
          <Magazine />
        </Main>
      </div>
    </div>
  );
};

export default HomePage;
