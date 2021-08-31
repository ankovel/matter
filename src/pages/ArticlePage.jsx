import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { ExpandMore } from '@material-ui/icons';
import Main from '../components/Main/Main';
import ProductCard from '../components/Home/ProductCard';
import products from '../constants/products';

const useStyles = makeStyles({
  header: {
    padding: '20px 0',
    boxShadow: 'rgb(0 0 0 / 0%) 0px 14px 28px, rgb(0 0 0 / 7%) 0px 10px 10px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#33333a',
    '&:hover': {
      color: '#ff6008',
    },
  },
  arrow: {
    marginRight: '5px',
    fontSize: '20px',
    transform: 'rotate(90deg)',
  },
  comeback: {
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  article: {
    padding: '60px 0',
  },
  wrapper: {
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '60px',
    fontWeight: 600,
  },
  date: {
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
    marginBottom: '20px',
    position: 'relative',
    whiteSpace: 'pre-wrap',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '2px',
      left: '554px',
      bottom: '7px',
      borderRadius: '50%',
      backgroundColor: '#33333a',
    },
  },
  description: {
    margin: '0 auto',
    padding: '50px 0',
    textAlign: 'justify',
    width: '66%',
  },
  quote: {
    marginBottom: '60px',
    fontSize: '25px',
    lineHeight: 'normal',
    fontWeight: 600,
    color: '#4a4a4a',
  },
  text: {
    fontSize: '16px',
    fontWeight: 600,
  },
  product: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardLink: {
    width: '32%',
    textDecoration: 'none',
    color: '#666',
    transition: '0.4s all ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  item: {
    marginTop: '20px',
    textAlign: 'center',
    '&:hover': {
      color: '#ff5e1b',
    },
  },
  textContinued: {
    width: '47%',
    margin: '0 auto',
    padding: '16px 0 60px',
    textAlign: 'justify',
    fontSize: '16px',
    lineHeight: '1.56',
    color: '#666',
  },
  wrapperCard: {
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
  productTitle: {
    marginBottom: '35px',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: 'normal',
    color: '#33333a',
  },
});

const ArticlePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Main>
          <NavLink to="/journal" className={classes.link}>
            <ExpandMore className={classes.arrow} />
            <span className={classes.comeback}>back to Journal</span>
          </NavLink>
        </Main>
      </div>
      <div className={classes.article}>
        <Main>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>Lasik Eye Surgery Are You Ready</h1>
            <span className={classes.date}>FIELDTESTED JANUARY 19, 2017</span>
            <img src="/matter/images/article.png" alt="article" />
            <div className={classes.description}>
              <p className={classes.quote}>
                “Quote 1 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry has been the industry’s standard dummy text
                ever since the 1500s”
              </p>
              <p className={classes.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className={classes.product}>
            <Link to="/shop" className={classes.cardLink}>
              <img
                src="https://i.postimg.cc/yxqprFBv/2021-08-31-16-00-57.png"
                alt="product"
              />
              <h3 className={classes.item}>Product Image</h3>
            </Link>
            <Link to="/shop" className={classes.cardLink}>
              <img
                src="https://i.postimg.cc/59npcqsj/2021-08-31-14-57-53.png"
                alt="product"
              />
              <h3 className={classes.item}>Product Image</h3>
            </Link>
            <Link to="/shop" className={classes.cardLink}>
              <img
                src="https://i.postimg.cc/NfcP67d0/2021-08-31-16-00-12.png"
                alt="product"
              />
              <h3 className={classes.item}>Product Image</h3>
            </Link>
          </div>
          <div className={classes.description}>
            <p className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <img src="/matter/images/article2.png" alt="article2" />
          <p className={classes.textContinued}>
            I have taste grilled meats around the world. Before i will guide you
            to the various technologies (gas barbecues, charcoal barbecues,
            Mongolian, sauces, recipes ) i will tell you about the Greek way.
          </p>
          <h1 className={classes.productTitle}>Featured Items</h1>
          <div className={classes.wrapperCard}>
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
    </div>
  );
};

export default ArticlePage;
